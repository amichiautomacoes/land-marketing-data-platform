"""Serve only the captured landing and its local resources. Python standard library only."""
from __future__ import annotations

import argparse
import html
import json
import mimetypes
import os
import re
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urljoin, urlsplit, urlunsplit

ROOT = Path(__file__).resolve().parent
SITE = ROOT / 'site'


def normalize_public_site_url(value: str) -> str:
    parsed = urlsplit(value)
    if (parsed.scheme not in ('http', 'https') or not parsed.hostname
            or parsed.username or parsed.password or parsed.path not in ('', '/')
            or parsed.query or parsed.fragment or any(char.isspace() for char in value)):
        raise ValueError('PUBLIC_SITE_URL must be the absolute HTTP(S) origin of the landing.')
    # Accessing port also rejects malformed ports instead of publishing bad metadata.
    _ = parsed.port
    return urlunsplit((parsed.scheme, parsed.netloc, '/', '', ''))


def render_mdp_metadata(source: str, public_url: str | None) -> str:
    """Resolve the page's own URLs in the HTTP response, including without JavaScript."""
    if not public_url:
        # No public domain has been approved. An absent canonical is intentional;
        # an empty href or the preview's address would silently assert a URL.
        return source
    escaped = html.escape(public_url, quote=True)
    source = source.replace('<!-- MDP_PUBLIC_URL -->',
                            f'<link rel="canonical" href="{escaped}"><meta property="og:url" content="{escaped}">')
    source = re.sub(r'content="(/assets/[^"<>]+)" data-mdp-image-url',
                    lambda match: f'content="{html.escape(urljoin(public_url, match[1]), quote=True)}" data-mdp-image-url', source)

    def structured_data(match: re.Match) -> str:
        def resolve(value):
            if isinstance(value, list):
                return [resolve(item) for item in value]
            if isinstance(value, dict):
                result = {key: urljoin(public_url, item) if key in ('@id', 'url') and isinstance(item, str) and item.startswith(('/', '#'))
                          else resolve(item) for key, item in value.items()}
                if result.get('@type') in ('WebSite', 'SoftwareApplication', 'WebPage'):
                    result['url'] = public_url
                return result
            return value
        payload = json.dumps(resolve(json.loads(match[2])), ensure_ascii=False, separators=(',', ':')).replace('<', '\\u003c')
        return match[1] + payload + match[3]

    return re.sub(r'(<script type="application/ld\+json" id="mdp-structured-data">)(.*?)(</script>)',
                  structured_data, source, flags=re.S)


def image_identity(url: str) -> str:
    u = urlsplit(html.unescape(url))
    path = re.sub(r'^/cdn-cgi/image/[^/]+/', '/', unquote(u.path))
    return urlunsplit(('https', u.netloc, path, u.query if u.netloc != 'media.beehiiv.com' else '', ''))


class LandingHandler(BaseHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'
    assets: dict = {}
    aliases: dict = {}
    public_site_url: str | None = None

    def do_HEAD(self) -> None:
        self.do_GET()

    def do_GET(self) -> None:
        request = urlsplit(self.path)
        path = request.path
        if path == '/health':
            self.send_content(b'{"status":"ok","page":"beehiiv"}', 'application/json')
            return
        if path in ('/attributor-min.js', '/EHawkTalon.js'):
            self.send_content(b'/* Telemetry omitted from local capture. */', 'text/javascript')
            return
        # Next's link prefetch and original telemetry are not extra mirrored pages.
        if '_rsc' in parse_qs(request.query) or path.startswith(('/_proxy/', '/cdn-cgi/', '/__local/noop', '/api/')):
            self.send_content(b'{}', 'application/json')
            return
        if path in ('/', '/index.html'):
            source = (SITE / 'index.html').read_text(encoding='utf-8')
            content = render_mdp_metadata(source, self.public_site_url).encode('utf-8')
            self.send_content(content, 'text/html; charset=utf-8')
            return
        if path in ('/local-runtime.js', '/local-runtime.css', '/ativos-theme.css', '/ativos-theme.js'):
            self.send_file(SITE / path.lstrip('/'))
            return
        if path.startswith('/_mirror/'):
            url = 'https://' + self.path[len('/_mirror/'):]
        else:
            url = 'https://www.beehiiv.com' + self.path
        asset = self.assets.get(url) or self.assets.get(url.replace('&amp;', '&'))
        if not asset:
            identity = image_identity(url)
            asset = self.assets.get(self.aliases.get(identity, ''))
        if not asset and path == '/favicon.ico':
            asset = next((value for key, value in self.assets.items() if '/favicon.' in key), None)
        if not asset and path == '/_next/image':
            image_url = parse_qs(request.query).get('url', [''])[0]
            asset = self.assets.get(image_url) or self.assets.get(self.aliases.get(image_identity(image_url), ''))
        if asset:
            self.send_file(SITE / asset['path'], asset['mime'])
            return
        if path.startswith('/assets/'):
            target = (SITE / unquote(path.lstrip('/'))).resolve()
            if target.is_relative_to((SITE / 'assets').resolve()) and target.is_file():
                self.send_file(target)
                return
        self.send_content(b'Not found: this mirror contains only the landing page.', 'text/plain', 404)

    def do_POST(self) -> None:
        length = int(self.headers.get('Content-Length', '0'))
        if length:
            self.rfile.read(length)
        if self.path.startswith(('/__local/noop', '/_proxy/', '/cdn-cgi/')):
            self.send_content(b'{}', 'application/json')
        else:
            self.send_content(b'{"error":"This local capture does not submit data. Use the original beehiiv service."}', 'application/json', 501)

    def send_file(self, path: Path, mime: str | None = None) -> None:
        if not path.is_file():
            self.send_content(b'Not found', 'text/plain', 404)
            return
        content = path.read_bytes()
        status = 200
        headers = {}
        # Range support keeps captured audio/video seekable without an external server.
        if self.headers.get('Range'):
            match = re.fullmatch(r'bytes=(\d+)-(\d*)', self.headers['Range'])
            if match:
                start = int(match[1])
                end = min(int(match[2]) if match[2] else len(content) - 1, len(content) - 1)
                if start > end:
                    self.send_content(b'', 'text/plain', 416)
                    return
                headers['Content-Range'] = f'bytes {start}-{end}/{len(content)}'
                content = content[start:end + 1]
                status = 206
        self.send_content(content, mime or mimetypes.guess_type(path)[0] or 'application/octet-stream', status, headers)

    def send_content(self, content: bytes, mime: str, status: int = 200, headers: dict | None = None) -> None:
        self.send_response(status)
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', str(len(content)))
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Access-Control-Allow-Origin', '*')
        # Presentation is local; links clicked by the visitor still lead to the original services.
        self.send_header('Content-Security-Policy', "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'self'; media-src 'self' blob: data:; form-action https://*.beehiiv.com")
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        if self.command != 'HEAD':
            try:
                self.wfile.write(content)
            except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
                pass

    def log_message(self, fmt: str, *args) -> None:
        if len(args) > 1 and str(args[1]) not in ('200', '206'):
            super().log_message(fmt, *args)


class LocalPreviewServer(ThreadingHTTPServer):
    # The captured Next.js landing requests many chunks at once on a cold load.
    request_queue_size = 128


def main() -> None:
    parser = argparse.ArgumentParser(description='Marketing Data Platform landing server')
    parser.add_argument('--host', default=os.environ.get('HOST', '127.0.0.1'))
    parser.add_argument('--port', type=int, default=int(os.environ.get('PORT', '8000')))
    parser.add_argument('--site-url', default=os.environ.get('PUBLIC_SITE_URL'),
                        help='Absolute public origin for canonical and structured-data URLs.')
    args = parser.parse_args()
    if args.site_url:
        try:
            LandingHandler.public_site_url = normalize_public_site_url(args.site_url)
        except ValueError as error:
            parser.error(str(error))
    manifest_path = SITE / 'asset-map.json'
    if not manifest_path.is_file():
        parser.error('Missing site/asset-map.json. Restore the complete site/ directory.')
    manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
    LandingHandler.assets = manifest['resources']
    LandingHandler.aliases = manifest['imageAliases']
    server = LocalPreviewServer((args.host, args.port), LandingHandler)
    print(f'Marketing Data Platform: http://{args.host}:{args.port}', flush=True)
    print('Press Ctrl+C to stop.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == '__main__':
    main()

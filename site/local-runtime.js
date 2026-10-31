/* Local-preview adapter. The captured original React/CSS implement the interface and motion. */
(() => {
  const embedded = location.pathname.startsWith('/_mirror/embeds.beehiiv.com/');
  const originalEmbedPath = embedded ? location.pathname.replace('/_mirror/embeds.beehiiv.com', '') + location.search : null;
  if (embedded) history.replaceState(null, '', originalEmbedPath);
  const remoteHosts = new Set(['media.beehiiv.com', 'beehiiv-marketing-images.s3.amazonaws.com',
    'beehiiv-images-production.s3.amazonaws.com', 'beehiiv-images-production.s3.us-east-1.amazonaws.com',
    'images.prismic.io', 'beehiiv.cdn.prismic.io', 'embeds.beehiiv.com', 'fonts.googleapis.com', 'fonts.gstatic.com']);
  const originalHosts = new Set(['www.beehiiv.com', 'beehiiv.com']);
  const nativeFetch = window.fetch.bind(window);
  const telemetry = /amplitude|segment|google-analytics|googletagmanager|hubspot|hs-scripts|px-cloud|px-cdn|iubenda|ketchcdn|salesloft|prismic\.io\/prismic|chilipiper|cloudflareinsights|attributor|EHawkTalon|rsev\.|\/cdn-cgi\/challenge|\/_proxy\//i;
  const remap = value => {
    try {
      const u = new URL(value, location.href);
      if (remoteHosts.has(u.hostname)) return `/_mirror/${u.host}${u.pathname}${u.search}`;
      if (originalHosts.has(u.hostname) && /^\/(?:_next|cdn-cgi)\//.test(u.pathname)) return u.pathname + u.search;
    } catch {}
    return value;
  };
  // Keep original fetch-driven UI working, without calling remote analytics or business APIs.
  window.fetch = (input, init) => {
    const url = typeof input === 'string' || input instanceof URL ? String(input) : input.url;
    if (telemetry.test(url)) return Promise.resolve(new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } }));
    const mapped = remap(url);
    return nativeFetch(input instanceof Request ? new Request(mapped, input) : mapped, init);
  };
  const xhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    return xhrOpen.call(this, method, telemetry.test(String(url)) ? '/__local/noop' : remap(String(url)), ...rest);
  };
  if (navigator.sendBeacon) navigator.sendBeacon = () => true;
  if (embedded) document.addEventListener('submit', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    window.open(`https://embeds.beehiiv.com${originalEmbedPath}`, '_blank', 'noopener');
  }, true);
  // A single landing is mirrored. Native services and other original pages remain real links.
  document.addEventListener('click', event => {
    const anchor = event.target.closest?.('a[href]');
    if (!anchor) return;
    const value = anchor.getAttribute('href');
    if (!value || value.startsWith('#') || value.startsWith('mailto:') || value.startsWith('tel:')) return;
    const target = new URL(value, location.href);
    if (target.origin === location.origin && !['/', '/index.html'].includes(target.pathname)
        && !/^\/(?:_mirror|assets|_next)\//.test(target.pathname)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const original = `https://www.beehiiv.com${target.pathname}${target.search}${target.hash}`;
      if (event.ctrlKey || event.metaKey || anchor.target === '_blank') window.open(original, '_blank', 'noopener');
      else location.assign(original);
    }
  }, true);
  document.cookie = 'eid44_homepage_variant=control; Path=/; SameSite=Lax';
})();

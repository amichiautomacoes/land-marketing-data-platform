# Marketing Data Platform

Landing pronta para execução com Python 3.12 ou superior, usando apenas a
biblioteca padrão. O repositório contém o servidor e os recursos finais da página.

```sh
python run.py --host 0.0.0.0 --port 8000
```

O servidor também aceita as variáveis `HOST` e `PORT`. O endpoint `/health`
retorna `{"status":"ok","page":"beehiiv"}`. A pasta `site/` precisa acompanhar
`run.py`: o servidor resolve os endereços `/_mirror/` e `/_next/` pelo manifesto
`site/asset-map.json`, além de servir imagens, fontes, scripts e vídeos locais.

Para executar em um ambiente com Docker:

```sh
docker build -t mdp-landing .
docker run --rm -p 8000:8000 mdp-landing
```

A hospedagem deve iniciar o servidor ou o contêiner e encaminhar sua porta HTTP.
As credenciais do GitHub ficam somente no `.env` local e não são necessárias
para executar a landing. Os botões comerciais dependem da configuração de
`commercialContactUrl` em `site/ativos-theme.js`.

A página entrega HTML MDP pré-renderizado; Node e React não são necessários
na hospedagem. O domínio público permanece sem definição. Até sua aprovação,
o servidor omite canonical, `og:url` e URLs públicas do JSON-LD. Para fixá-las
depois, configure `PUBLIC_SITE_URL` com a origem HTTPS aprovada ou utilize
`--site-url`. A configuração rejeita credenciais, caminhos, query e fragmento.
O endereço do preview e os cabeçalhos de proxy não são usados como canonical.

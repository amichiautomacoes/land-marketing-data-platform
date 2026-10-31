/* Ativos presentation and approved copy, applied after the captured components hydrate. */
(() => {
  const heroCopy = {
    title: 'Todos os dados dos seus clientes. ',
    emphasis: 'Uma única plataforma.',
    subtitle: 'Centralize dados, acompanhe resultados e gerencie a performance da sua carteira com uma solução completa para agências de marketing.',
    primaryCta: 'Conhecer a plataforma',
    secondaryCta: 'Entenda como funciona',
  };
  const socialMediaLogos = [
    { name: 'Instagram Ads', file: 'instagram-ads', width: 266 },
    { name: 'Google Ads', file: 'google-ads', width: 690 },
    { name: 'Google Analytics 4', file: 'google-analytics', width: 411 },
    { name: 'Google Tag Manager', file: 'google-tag-manager', width: 419 },
    { name: 'TikTok Ads', file: 'tiktok-ads', width: 775 },
    { name: 'LinkedIn Ads', file: 'linkedin-ads', width: 645 },
    { name: 'Meta', file: 'meta', width: 616 },
  ];
  const operationCopy = {
    title: 'Sua agência conquista mais clientes. Mas sua operação acompanha?',
    subtitle: 'À medida que sua carteira cresce, aumentam as plataformas, os dados e os relatórios que sua equipe precisa administrar.',
    emphasis: 'Informações dispersas, tarefas manuais e processos técnicos',
    description: ' tornam a operação mais complexa e consomem tempo que poderia ser dedicado à análise de resultados e à estratégia dos clientes.',
    cta: 'Simplifique sua operação',
  };
  const platformCopy = {
    title: 'Menos complexidade. Mais controle sobre os dados da sua agência.',
    subtitle: 'A Marketing Data Platform conecta e organiza os dados de marketing dos seus clientes, estrutura a mensuração de conversões e reúne os resultados em dashboards gerenciais.',
    description: 'Tudo em uma única plataforma, com infraestrutura e operação técnica gerenciadas para sua agência.',
    cta: 'Explore a plataforma',
  };
  const platformTabsCopy = [
    {
      title: 'Conecte.',
      heading: 'Conect',
      description: 'Integre os dados de diferentes plataformas e clientes em um único ambiente, preparado para acompanhar o crescimento da sua agência.',
      image: {
        alt: 'Plataformas de marketing conectadas a uma infraestrutura central de dados.',
        desktop: { src: '/assets/section-3/conect-desktop.webp', width: 1600, height: 1000 },
        tablet: { src: '/assets/section-3/conect-tablet.webp', width: 1024, height: 819 },
        mobile: { src: '/assets/section-3/conect-mobile.webp', width: 768, height: 1024 },
      },
    },
    {
      title: 'Organize.',
      heading: 'Organize',
      description: 'Centralize as informações em uma infraestrutura gerenciada e escalável, sem aumentar a complexidade técnica da sua operação.',
      image: {
        alt: 'Infraestrutura centralizada para armazenar, processar e organizar os dados de diferentes clientes e plataformas.',
        desktop: { src: '/assets/section-3/organize-desktop.webp', width: 1600, height: 1000 },
        tablet: { src: '/assets/section-3/organize-tablet.webp', width: 1024, height: 640 },
        mobile: { src: '/assets/section-3/organize-mobile.webp', width: 768, height: 1024 },
      },
    },
    {
      title: 'Mensure.',
      heading: 'Mensure',
      description: 'Padronize o rastreamento de eventos e conversões entre clientes, com implantação e manutenção técnica gerenciadas.',
      image: {
        alt: 'Eventos e conversões de diferentes plataformas centralizados e padronizados para acompanhar os resultados dos clientes.',
        desktop: { src: '/assets/section-3/mensure-desktop.webp', width: 1600, height: 1000 },
        tablet: { src: '/assets/section-3/mensure-tablet.webp', width: 1024, height: 818 },
        mobile: { src: '/assets/section-3/mensure-mobile.webp', width: 768, height: 1024 },
      },
    },
    {
      title: 'Analise.',
      heading: 'Analise',
      description: 'Acompanhe toda a sua carteira em dashboards padronizados, ampliando sua capacidade de gestão sem multiplicar o trabalho manual.',
      image: {
        alt: 'Dashboard com indicadores consolidados da carteira e painéis individuais conectados para cada cliente.',
        desktop: { src: '/assets/section-3/analise-desktop.webp', width: 1600, height: 1000 },
        tablet: { src: '/assets/section-3/analise-tablet.webp', width: 1024, height: 642 },
        mobile: { src: '/assets/section-3/analise-mobile.webp', width: 768, height: 1024 },
      },
    },
  ];
  const solutionsCopy = {
    title: 'Quatro soluções integradas. Uma única plataforma.',
    subtitle: 'Da integração de dados à análise de resultados, a Marketing Data Platform reúne os recursos essenciais para organizar, mensurar e acompanhar a operação de dados da sua agência.',
    cta: 'Conheça as funcionalidades',
  };
  const solutionsCardsCopy = [
    {
      title: 'Integração de Dados',
      description: 'Conecte plataformas de anúncios, analytics, CRM e planilhas para reunir as informações dos seus clientes em um ambiente integrado.',
      image: {
        name: 'integracao-dados',
        alt: 'Google Ads, Meta, Google Analytics e Google Sheets conectados à Marketing Data Platform.',
        desktop: { width: 419, height: 200 },
        tablet: { width: 227, height: 139 },
        mobile: { width: 292, height: 178 },
      },
    },
    {
      title: 'Infraestrutura de Dados',
      description: 'Conte com uma estrutura gerenciada em Google Cloud para armazenar, processar e organizar os dados da sua operação, sem administrar diretamente os serviços de nuvem.',
      image: {
        name: 'infraestrutura-dados',
        alt: 'Servidores e bancos de dados conectados em uma infraestrutura gerenciada no Google Cloud.',
        desktop: { width: 500, height: 200 },
        tablet: { width: 369, height: 161 },
        mobile: { width: 300, height: 131 },
      },
    },
    {
      title: 'Tracking & Conversões',
      description: 'Estruture a mensuração de eventos e conversões dos sites e landing pages dos seus clientes, com implantação e manutenção técnica gerenciadas.',
      image: {
        name: 'tracking-conversoes',
        alt: 'Eventos de um site processados e enviados para Meta, Google Ads e Google Analytics.',
        desktop: { width: 500, height: 200 },
        tablet: { width: 369, height: 166 },
        mobile: { width: 300, height: 135 },
      },
    },
    {
      title: 'Dashboards & BI',
      description: 'Acompanhe a performance da sua carteira, compare empresas-clientes, monitore metas e consulte indicadores em dashboards organizados por cliente e plataforma.',
      image: {
        name: 'dashboards-bi',
        alt: 'Dashboard consolidado da agência conectado aos painéis individuais de seus clientes.',
        desktop: { width: 419, height: 200 },
        tablet: { width: 227, height: 144 },
        mobile: { width: 292, height: 185 },
      },
    },
  ];
  const dashboardsCopy = {
    title: 'Toda a sua carteira em uma visão. Cada cliente em detalhe.',
    subtitle: 'Visualize os indicadores consolidados da sua agência, compare o desempenho entre clientes e explore os resultados individuais em dashboards organizados por plataforma.',
    cta: 'Explore os dashboards',
  };
  const dashboardCardsCopy = [
    {
      title: 'Visão geral da carteira',
      subtitle: 'Acompanhe os principais indicadores dos seus clientes em um painel executivo consolidado.',
      items: [
        { label: 'Indicadores consolidados', description: 'visualize os principais KPIs de marketing da carteira.' },
        { label: 'Investimento e resultados', description: 'acompanhe valores investidos, leads, conversões e custos por resultado.' },
        { label: 'Visão por empresa', description: 'consulte os indicadores resumidos de cada cliente.' },
        { label: 'Navegação centralizada', description: 'acesse as áreas individuais diretamente pelo painel.' },
      ],
    },
    {
      title: 'Comparativo entre clientes',
      subtitle: 'Consulte e compare resultados, pesquise empresas e identifique quais operações precisam de atenção.',
      items: [
        { label: 'Comparação de desempenho', description: 'analise indicadores de diferentes empresas em uma mesma visão.' },
        { label: 'Pesquisa por cliente', description: 'encontre rapidamente uma empresa pelo nome.' },
        { label: 'Tabelas interativas', description: 'organize e consulte os resultados com filtros e paginação.' },
        { label: 'Acesso individual', description: 'navegue diretamente para os dashboards de cada empresa.' },
      ],
    },
    {
      title: 'Dashboards individuais',
      subtitle: 'Acesse os indicadores de cada empresa, explore os resultados por plataforma e acompanhe o desempenho em relação às metas.',
      items: [
        { label: 'Visão executiva individual', description: 'acompanhe os principais indicadores de cada cliente.' },
        { label: 'Dashboards por plataforma', description: 'explore os resultados das ferramentas de marketing conectadas.' },
        { label: 'Metas mensais', description: 'compare o desempenho registrado com os objetivos definidos.' },
        { label: 'Filtros analíticos', description: 'consulte os resultados por períodos e dimensões disponíveis.' },
      ],
    },
    {
      title: 'Relatórios para sua operação',
      subtitle: 'Exporte dashboards em PDF com a identidade da agência e dados tabulares em Excel.',
      items: [
        { label: 'Exportação em PDF', description: 'gere documentos a partir dos dashboards disponíveis.' },
        { label: 'Identidade da agência', description: 'apresente relatórios em PDF com a identidade visual da sua operação.' },
        { label: 'Exportação em Excel', description: 'obtenha dados tabulares para análises complementares.' },
        { label: 'Relatórios sob demanda', description: 'exporte informações conforme a necessidade da equipe.' },
      ],
    },
  ];
  const dashboardCardTitles = dashboardCardsCopy.map(card => card.title);
  const productivityCopy = {
    title: 'Sua agência mais produtiva, organizada e preparada para crescer.',
    subtitle: 'Reduza o trabalho manual, ganhe visibilidade sobre os resultados dos seus clientes e dedique mais tempo à análise e à estratégia, com uma operação de dados estruturada para acompanhar o crescimento da sua carteira.',
    conclusion: 'Sua agência ganha estrutura para crescer com mais controle e eficiência.',
  };
  // Approved section 6 copy from copy_06.txt; artwork stays local and unchanged.
  const productivityCardsCopy = [
    {
      title: 'Mais produtividade',
      description: 'Reduza tarefas recorrentes de coleta e organização de informações para dedicar mais tempo à análise.',
      image: platformTabsCopy[0].image,
    },
    {
      title: 'Crescimento com organização',
      description: 'Amplie sua carteira utilizando processos e dashboards padronizados, sem reconstruir a estrutura de dados a cada cliente.',
      image: platformTabsCopy[1].image,
    },
    {
      title: 'Mais visibilidade sobre resultados',
      description: 'Acompanhe os principais indicadores da carteira e identifique oportunidades de melhoria com mais facilidade.',
      image: platformTabsCopy[3].image,
    },
    {
      title: 'Menos dependência técnica',
      description: 'Conte com implantação, infraestrutura e manutenção técnica gerenciadas, conforme os módulos contratados.',
      image: platformTabsCopy[2].image,
    },
    {
      title: 'Mais praticidade nos relatórios',
      description: 'Organize a apresentação de resultados com dashboards e exportações para apoiar a rotina da equipe.',
      image: platformTabsCopy[3].image,
    },
  ];
  const onboardingCopy = {
    title: 'Começar é mais simples do que você imagina.',
    subtitle: 'Nossa equipe cuida da implantação, configuração e operação técnica da plataforma, enquanto sua agência se concentra no que realmente importa: acompanhar os resultados dos seus clientes.',
  };
  // Section 7 structure follows mdp_connected_timeline.html; copy follows copy_07.txt.
  const onboardingStepsCopy = [
    {
      title: 'Conectamos suas plataformas',
      description: 'Sua agência autoriza os acessos necessários e nossa equipe configura as integrações contratadas.',
      icon: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/>',
      visual: '<span class="ativos-journey-chip">Google Ads</span><span class="ativos-journey-chip">Meta Ads</span><span class="ativos-journey-chip">GA4</span>',
    },
    {
      title: 'Organizamos seus dados',
      description: 'As informações são coletadas, tratadas e estruturadas em uma infraestrutura gerenciada.',
      icon: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
      visual: '<div class="ativos-journey-cloud">Google Cloud<span>Coleta · Tratamento · Organização</span></div>',
    },
    {
      title: 'Configuramos a mensuração',
      description: 'Quando contratado, implantamos o tracking de eventos e conversões conforme as necessidades de cada operação.',
      icon: '<path d="m5 3 13 9-7 1-3 7-3-17Z"/><path d="m12 14 4 6"/>',
      visual: '<div class="ativos-journey-conversions"><span>Evento capturado</span><span>Conversão processada</span></div>',
    },
    {
      title: 'Disponibilizamos seus dashboards',
      description: 'Sua equipe passa a acompanhar indicadores, consultar metas e acessar os resultados dos clientes em um ambiente centralizado.',
      icon: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 2 5-7"/>',
      visual: '<div class="ativos-journey-chart"><span style="height:38%"></span><span style="height:62%"></span><span style="height:48%"></span><span style="height:82%"></span><span style="height:67%"></span><span style="height:100%"></span></div>',
    },
    {
      title: 'Sua operação acompanha o crescimento',
      description: 'Novos clientes podem ser incorporados à plataforma mediante solicitação, aprovação e ativação.',
      icon: '<path d="M3 17 9 11l4 4 8-9"/><path d="M15 6h6v6"/>',
      visual: '<div class="ativos-journey-clients"><span>Cliente A</span><span>Cliente B</span><span>+</span></div>',
    },
  ];
  const onboardingConclusion = 'Você administra seus clientes. Nós gerenciamos a estrutura técnica da solução.';
  const faqCopy = {
    title: 'Tudo o que você precisa saber antes de começar.',
    subtitle: 'Entenda como funciona a Marketing Data Platform, desde a implantação e integração dos seus clientes até a gestão técnica e utilização da plataforma.',
  };
  const integrationsCopy = {
    title: 'Sua agência está preparada para crescer sem multiplicar a complexidade?',
    subtitle: 'Centralize os dados dos seus clientes, organize a mensuração de resultados e conte com uma estrutura técnica gerenciada para acompanhar a evolução da sua operação. Conheça como a Marketing Data Platform pode se adaptar à realidade da sua agência.',
    cta: 'Agendar uma apresentação',
  };
  const faqItems = [
    {
      question: 'Preciso de uma equipe técnica para utilizar a plataforma?',
      answer: 'Não. Nossa equipe cuida da implantação, infraestrutura e manutenção técnica dos serviços contratados, para que sua agência possa se concentrar na análise dos resultados.',
    },
    {
      question: 'Posso gerenciar vários clientes na mesma plataforma?',
      answer: 'Sim. A Marketing Data Platform foi desenvolvida para agências, permitindo acompanhar toda a carteira em uma visão consolidada e acessar os resultados individuais de cada cliente.',
    },
    {
      question: 'Preciso criar dashboards para cada novo cliente?',
      answer: 'Não. A plataforma oferece dashboards padronizados por ferramenta, permitindo acompanhar os resultados dos clientes sem desenvolver painéis individuais.',
    },
    {
      question: 'Quais plataformas posso integrar?',
      answer: 'A solução contempla Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads, Google Analytics 4, Google Search Console, RD Station e Google Sheets, conforme a disponibilidade das integrações e permissões.',
    },
    {
      question: 'Como funciona a contratação?',
      answer: 'A contratação inclui uma assinatura-base da agência e uma mensalidade por cliente conectado. O serviço de tracking de conversões, quando contratado, possui uma taxa adicional de implantação por cliente.',
    },
    {
      question: 'Posso adicionar novos clientes depois?',
      answer: 'Sim. Conforme sua carteira cresce, você pode solicitar a inclusão de novos clientes, sujeitos à aprovação e às condições contratadas.',
    },
  ];
  const setText = (node, value) => {
    if (node && node.textContent !== value) node.textContent = value;
  };
  // Intentionally blank until the commercial contact destination is supplied.
  const commercialContactUrl = '';
  const isHydrated = node => {
    const key = node && Object.keys(node).find(key => key.startsWith('__reactFiber$'));
    const fiber = key && node[key];
    if (!fiber?.memoizedProps) return false;
    // A fiber can exist before React commits it. Use the captured runtime's
    // mounted-fiber check (4098 = Placement | Hydrating), then check the root.
    let current = fiber;
    let nearestMounted = fiber;
    while (current && !current.alternate) {
      if (current.flags & 4098) nearestMounted = current.return;
      if (!current.return) break;
      current = current.return;
    }
    while (current.return) current = current.return;
    return nearestMounted === fiber && current.tag === 3 && !current.memoizedState?.isDehydrated;
  };
  const applySocialLogos = () => {
    const container = document.querySelector('.trusted-newsletters-container');
    const original = container?.querySelector('.trusted-newsletters-track:not(.ativos-social-track)');
    if (!original || !isHydrated(original)) return;
    // Keep the captured React marquee mounted; its replacement owns only presentation.
    original.classList.add('ativos-legacy-logos');
    original.hidden = true;
    original.setAttribute('aria-hidden', 'true');
    if (container.querySelector(':scope > .ativos-social-track')) return;
    container.classList.add('ativos-social-logos');
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', 'Plataformas de mídia e mensuração');
    const track = document.createElement('div');
    track.className = 'trusted-newsletters-track ativos-social-track';
    const group = document.createElement('ul');
    group.className = 'ativos-social-group';
    group.setAttribute('role', 'list');
    for (const logo of socialMediaLogos) {
      const item = document.createElement('li');
      item.className = 'ativos-social-item';
      const image = document.createElement('img');
      image.src = `/assets/social-logos/${logo.file}.webp`;
      image.alt = logo.name;
      image.width = logo.width;
      image.height = 128;
      image.decoding = 'async';
      image.className = 'ativos-social-logo';
      item.append(image);
      group.append(item);
    }
    const duplicate = group.cloneNode(true);
    duplicate.classList.add('trusted-newsletters-duplicate');
    duplicate.setAttribute('aria-hidden', 'true');
    track.append(group, duplicate);
    container.append(track);
  };
  const applyIntegrationArtwork = () => {
    const section = document.querySelector('.ativos-integrations');
    const image = section?.querySelector('img[data-ativos-integrations-art], img[alt="Integrations dark"]');
    if (!image || !isHydrated(image)) return;
    // Update the captured image in place so React and lazy loading stay intact.
    image.dataset.ativosIntegrationsArt = '';
    image.classList.add('ativos-integrations-art');
    const attributes = {
      sizes: '(min-width: 1264px) 1200px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)',
      srcset: '/assets/section-9/integrations-768.webp 768w, /assets/section-9/integrations-1536.webp 1536w, /assets/section-9/integrations-3072.webp 3072w',
      src: '/assets/section-9/integrations-1536.webp',
      width: '3072',
      height: '549',
      alt: 'Plataformas de marketing integradas: Instagram, Meta, Google Ads, Google Analytics, Google Tag Manager, LinkedIn e TikTok.',
    };
    for (const [name, value] of Object.entries(attributes)) {
      if (image.getAttribute(name) !== value) image.setAttribute(name, value);
    }
  };
  const applyHeroCopy = () => {
    const heading = document.querySelector('h1');
    if (!isHydrated(heading)) { setTimeout(schedule, 50); return; }
    const section = heading?.closest('section');
    if (!section) return;
    section.classList.add('ativos-hero');
    heading.classList.add('ativos-hero-title');
    // Keep the captured element tree intact for subsequent React updates.
    const titleNodes = [...heading.childNodes].filter(node => node.nodeType === Node.TEXT_NODE);
    titleNodes.forEach((node, index) => {
      const value = index === 0 ? heroCopy.title : '';
      if (node.nodeValue !== value) node.nodeValue = value;
    });
    setText(heading.querySelector('span'), heroCopy.emphasis);
    setText(heading.nextElementSibling, heroCopy.subtitle);
    const [primary, secondary] = section.querySelectorAll('.custom-box-shadow-button:not(.ativos-commercial-action)');
    setText(primary?.querySelector('.custom-box-shadow-text > span:last-child'), heroCopy.primaryCta);
    setText(secondary?.querySelector('.custom-box-shadow-text'), heroCopy.secondaryCta);
    // Keep React-owned nodes mounted while removing the original promotional copy from presentation.
    [...heading.parentElement.children].filter(node =>
      node.querySelector('.star-ratings') ||
      (node.tagName === 'P' && node.textContent.trim() === 'Get started for free. No credit card required.')
    ).forEach(node => node.classList.add('ativos-hero-omitted'));
    applyHeroVideo(section, heading);
  };
  const createLoopFilm = className => {
    const video = document.createElement('video');
    video.className = className;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('tabindex', '-1');
    return video;
  };
  const createLoopToggle = className => {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = className;
    toggle.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path class="ativos-pause-icon" d="M7 5h3v14H7zm7 0h3v14h-3z"/><path class="ativos-play-icon" d="m8 5 11 7-11 7z"/></svg>';
    return toggle;
  };
  const applyHeroVideo = (section, heading) => {
    if (section.querySelector(':scope > .ativos-hero-background')) return;
    // The captured page renders a different, static hero under reduced motion.
    const originalMedia = heading.parentElement.nextElementSibling;
    if (!originalMedia || !isHydrated(originalMedia)) { setTimeout(schedule, 50); return; }
    const grid = originalMedia.parentElement;
    section.classList.add('ativos-hero-video');
    const inner = section.firstElementChild;
    inner.classList.add('ativos-hero-inner');
    for (let container = grid.parentElement; container && container !== inner; container = container.parentElement) {
      container.classList.add('ativos-hero-container');
    }
    grid.classList.add('ativos-hero-grid');
    heading.parentElement.classList.add('ativos-hero-content');
    originalMedia.classList.add('ativos-hero-legacy-media');

    const background = document.createElement('div');
    background.className = 'ativos-hero-background';
    background.setAttribute('aria-hidden', 'true');
    const video = createLoopFilm('ativos-hero-film');
    background.append(video);
    section.prepend(background);

    const toggle = createLoopToggle('ativos-hero-motion-toggle');
    section.append(toggle);
    attachLoopPlayback(video, toggle, background, {
      target: section, query: '(min-width: 1024px)', prefix: '/assets/hero/hero-',
    });
  };
  const attachLoopPlayback = (video, toggle, background, { target, query, prefix, labelSuffix = '' }) => {
    const landscape = matchMedia(query);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let manuallyPaused = false;
    let explicitMotion = false;
    const rect = target.getBoundingClientRect();
    let inView = rect.bottom > 0 && rect.top < innerHeight;
    const motionAllowed = () => !reduced.matches || explicitMotion;
    const updateButton = () => {
      toggle.dataset.paused = String(video.paused);
      const label = (video.paused ? 'Reproduzir animação' : 'Pausar animação') + labelSuffix;
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    };
    const syncPlayback = () => {
      if (video.getAttribute('src') && motionAllowed() && !manuallyPaused && inView && !document.hidden) {
        video.play().catch(updateButton);
      } else {
        video.pause();
      }
      updateButton();
    };
    const updateSource = () => {
      const variant = landscape.matches ? 'desktop' : 'mobile';
      const asset = `${prefix}${variant}`;
      video.poster = `${asset}-poster.webp`;
      // Reduced motion starts on the poster without downloading a video.
      if (!motionAllowed()) { syncPlayback(); return; }
      // Media below the fold remains on its poster until it enters the viewport.
      if (!inView && !explicitMotion) { syncPlayback(); return; }
      const src = `${asset}-loop.mp4`;
      if (video.getAttribute('src') !== src) {
        video.style.visibility = '';
        toggle.hidden = false;
        background.style.backgroundImage = '';
        video.autoplay = !manuallyPaused && inView && !document.hidden;
        video.src = src;
        video.load();
      }
      syncPlayback();
    };
    toggle.addEventListener('click', () => {
      if (video.paused) {
        explicitMotion = true;
        manuallyPaused = false;
        updateSource();
      } else {
        manuallyPaused = true;
        syncPlayback();
      }
    });
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('error', () => {
      background.style.backgroundImage = `url("${video.poster}")`;
      video.style.visibility = 'hidden';
      toggle.hidden = true;
    });
    landscape.addEventListener('change', updateSource);
    reduced.addEventListener('change', () => {
      explicitMotion = false;
      updateSource();
    });
    document.addEventListener('visibilitychange', syncPlayback);
    new IntersectionObserver(entries => {
      // Rapid scroll/resize can batch several visibility changes for this target.
      const entry = entries[entries.length - 1];
      inView = entry.isIntersecting;
      updateSource();
    }, { threshold: 0 }).observe(target);
    updateSource();
  };
  const applyOperationVideo = () => {
    const section = document.querySelector('.ativos-operation');
    if (!section || section.querySelector('.ativos-operation-video')) return;
    const originalMedia = section.querySelector('.ativos-operation-header')?.nextElementSibling;
    if (!originalMedia || !isHydrated(originalMedia)) { setTimeout(schedule, 50); return; }
    originalMedia.classList.add('ativos-operation-legacy-media');

    const figure = document.createElement('figure');
    figure.className = 'ativos-operation-video';
    figure.setAttribute('aria-label', 'Dados fragmentados, trabalho repetitivo, mensuração complexa e dificuldade para escalar.');
    const background = document.createElement('div');
    background.className = 'ativos-operation-video-media';
    background.setAttribute('aria-hidden', 'true');
    const video = createLoopFilm('ativos-operation-film');
    background.append(video);
    const toggle = createLoopToggle('ativos-hero-motion-toggle ativos-operation-motion-toggle');
    figure.append(background, toggle);
    originalMedia.after(figure);
    attachLoopPlayback(video, toggle, background, {
      target: figure, query: '(min-width: 640px)', prefix: '/assets/section-2/section-2-', labelSuffix: ' da operação',
    });
  };
  const applySectionCopy = (name, originalTitle, copy) => {
    const hook = `ativos-${name}`;
    const section = document.querySelector(`.${hook}`) ||
      [...document.querySelectorAll('h2')].find(heading => heading.textContent.includes(originalTitle))?.closest('section');
    const heading = section?.querySelector('h2');
    if (!heading) return;
    let subtitle = heading.nextElementSibling;
    const ctaText = copy.cta ? section.querySelector('.custom-box-shadow-text') : null;
    // Headings and CTA components can hydrate separately; wait for every edited element.
    const editedElements = [heading];
    if (subtitle && !subtitle.classList.contains('ativos-copy-subtitle')) editedElements.push(subtitle);
    if (copy.cta) editedElements.push(ctaText);
    if (!editedElements.every(isHydrated)) { setTimeout(schedule, 50); return; }
    if (!subtitle) {
      subtitle = document.createElement('p');
      subtitle.className = 'ativos-copy-subtitle text-lg md:text-xl font-medium mx-auto max-w-2xl text-center';
      heading.after(subtitle);
    }
    section.classList.add(hook);
    heading.classList.add(`${hook}-title`, 'ativos-copy-title');
    heading.parentElement.classList.add(`${hook}-intro`, 'ativos-copy-intro');
    if (ctaText) {
      if (heading.parentElement.contains(ctaText)) {
        heading.parentElement.classList.add(`${hook}-header`, 'ativos-copy-centered');
      } else {
        heading.parentElement.parentElement.classList.add(`${hook}-header`, 'ativos-copy-header');
      }
    }
    if (heading.previousElementSibling?.tagName === 'SPAN') {
      heading.previousElementSibling.classList.add(`${hook}-label`, 'ativos-copy-label');
    }
    setText(heading, copy.title);
    setText(subtitle, copy.subtitle);
    let description = section.querySelector(`.${hook}-description`);
    if (copy.description) {
      if (!description) {
        description = document.createElement('p');
        description.className = `${subtitle.className} ${hook}-description`;
        subtitle.after(description);
      }
      if (copy.emphasis) {
        if (description.textContent !== copy.emphasis + copy.description || !description.querySelector('strong')) {
          const emphasis = document.createElement('strong');
          emphasis.textContent = copy.emphasis;
          description.replaceChildren(emphasis, document.createTextNode(copy.description));
        }
      } else {
        setText(description, copy.description);
      }
    } else {
      description?.remove();
    }
    if (ctaText) setText(ctaText, copy.cta);
  };
  const applyFaqItems = () => {
    const section = document.querySelector('.ativos-faq');
    if (!section) return;
    const items = [...section.querySelectorAll('details')];
    if (items.length < faqItems.length || !items.every(item =>
      [item, item.querySelector('summary h3'), item.querySelector('.faq-answer')].every(isHydrated)
    )) { setTimeout(schedule, 50); return; }
    items.slice(0, faqItems.length).forEach((item, index) => {
      setText(item.querySelector('summary h3'), faqItems[index].question);
      setText(item.querySelector('.faq-answer'), faqItems[index].answer);
    });
    items.slice(faqItems.length).forEach(item => item.remove());
  };
  const applySectionOrder = () => {
    const headings = [...document.querySelectorAll('h2')];
    const integrations = document.querySelector('.ativos-integrations') || headings.find(heading => heading.textContent.includes('CONNECT YOUR NEWSLETTER'))?.closest('section');
    const faq = document.querySelector('.ativos-faq') || headings.find(heading => heading.textContent.includes('GOT QUESTIONS'))?.closest('section');
    if (!integrations || !faq || integrations.parentElement !== faq.parentElement) return;
    if (!(integrations.compareDocumentPosition(faq) & Node.DOCUMENT_POSITION_FOLLOWING)) return;
    if (![integrations, faq].every(isHydrated)) { setTimeout(schedule, 50); return; }
    // Swap the existing nodes so React handlers, images and accordion state survive.
    const marker = document.createComment('ativos-section-order');
    integrations.before(marker);
    faq.replaceWith(integrations);
    marker.replaceWith(faq);
  };
  const relocateTestimonials = () => {
    const section = document.querySelector('.ativos-platform');
    const board = document.querySelector('.ativos-testimonials');
    if (!section || !board || section.contains(board)) return;
    const illustration = section.querySelector('.lottie-player')?.parentElement;
    const tabs = [...board.querySelectorAll('[role="tab"]')];
    if (!illustration || !tabs.length || ![board, illustration, ...tabs].every(isHydrated)) {
      setTimeout(schedule, 50);
      return;
    }
    // Move the hydrated tab group so its React state, handlers and ARIA links survive.
    const source = board.parentElement;
    board.classList.add('ativos-platform-testimonials');
    illustration.after(board);
    illustration.hidden = true;
    source.hidden = true;
  };
  const applyPlatformTabVisual = (panel, copy, description) => {
    if (copy.heading) {
      let heading = panel.querySelector('.ativos-platform-tab-title');
      if (!heading) {
        heading = document.createElement('h3');
        heading.className = 'ativos-platform-tab-title';
        description.before(heading);
      }
      setText(heading, copy.heading);
    }
    if (!copy.image || panel.querySelector('.ativos-platform-tab-picture')) return;
    const original = panel.querySelector('img');
    if (!original) return;
    // Keep React's original image mounted; the picture selects one supplied format.
    original.classList.add('ativos-platform-legacy-image');
    original.parentElement.classList.add('ativos-platform-tab-media');
    const picture = document.createElement('picture');
    picture.className = 'ativos-platform-tab-picture';
    for (const [variant, media] of [
      ['desktop', '(min-width: 1024px)'],
      ['tablet', '(min-width: 640px)'],
    ]) {
      const source = document.createElement('source');
      source.media = media;
      source.srcset = copy.image[variant].src;
      source.width = copy.image[variant].width;
      source.height = copy.image[variant].height;
      picture.appendChild(source);
    }
    const image = document.createElement('img');
    Object.assign(image, copy.image.mobile, {
      alt: copy.image.alt,
      loading: 'lazy',
      decoding: 'async',
    });
    picture.appendChild(image);
    original.after(picture);
  };
  const applyPlatformTabsCopy = () => {
    const board = document.querySelector('.ativos-platform-testimonials');
    if (!board) return;
    const tabs = [...board.querySelectorAll('[role="tab"]')];
    const panels = [...board.querySelectorAll('[role="tabpanel"]')];
    if (tabs.length !== platformTabsCopy.length) return;
    if (!tabs.every(isHydrated)) { setTimeout(schedule, 50); return; }
    tabs.forEach((tab, index) => {
      const copy = platformTabsCopy[index];
      setText(tab, copy.title);
      // Inactive panels mount on selection; the observer reapplies their copy.
      const panel = panels[index];
      const description = panel?.querySelector('p');
      if (!description) return;
      if (!isHydrated(description)) { setTimeout(schedule, 50); return; }
      // Styling hooks follow the freshly mounted panel without changing React's tree.
      description.parentElement.classList.add('ativos-platform-tab-copy');
      description.parentElement.parentElement.classList.add('ativos-platform-tab-layout');
      setText(description, copy.description);
      applyPlatformTabVisual(panel, copy, description);
      // Product descriptions must not retain the captured testimonial attribution.
      [...description.parentElement.children].filter(node =>
        node !== description && !node.classList.contains('ativos-platform-tab-title'))
        .forEach(node => node.classList.add('ativos-platform-legacy-copy'));
      panel.querySelector('a')?.parentElement.classList.add('ativos-platform-legacy-copy');
    });
  };
  const applySolutionCardImage = (card, copy) => {
    const media = card.querySelector('img')?.parentElement;
    if (!media) return;
    const picture = document.createElement('picture');
    picture.className = 'ativos-solution-picture';
    for (const variant of ['mobile', 'tablet', 'desktop']) {
      const { width, height } = copy[variant];
      picture.style.setProperty(`--solution-${variant}-width`, `${width}px`);
      picture.style.setProperty(`--solution-${variant}-aspect`, `${width} / ${height}`);
    }
    for (const [variant, breakpoint] of [['desktop', 1024], ['tablet', 768]]) {
      const source = document.createElement('source');
      source.media = `(min-width: ${breakpoint}px)`;
      source.type = 'image/webp';
      source.srcset = `/assets/section-4/${copy.name}-${variant}.webp`;
      picture.appendChild(source);
    }
    const image = document.createElement('img');
    Object.assign(image, copy.mobile, {
      src: `/assets/section-4/${copy.name}-mobile.webp`,
      alt: copy.alt,
      loading: 'lazy',
      decoding: 'async',
    });
    picture.appendChild(image);
    media.replaceChildren(picture);
  };
  const duplicateProductivityCards = () => {
    const section = document.querySelector('.ativos-solutions');
    if (!section || section.querySelector('.ativos-solutions-cards')) return;
    const source = document.querySelector('.ativos-productivity .ativos-content-card')?.parentElement;
    const illustration = section.querySelector('.lottie-player')?.parentElement;
    if (!source || !illustration) return;
    if (![source, illustration, ...source.children].every(isHydrated)) {
      setTimeout(schedule, 50);
      return;
    }
    // Reuse the captured layout, with the supplied artwork and static solution copy.
    const copy = source.cloneNode(true);
    copy.hidden = false;
    copy.classList.remove('mt-12');
    copy.classList.add('ativos-solutions-cards');
    [...copy.children].forEach((card, index) => {
      const content = solutionsCardsCopy[index];
      if (!content) return;
      setText(card.querySelector('h3'), content.title);
      const [description, ...actions] = card.querySelectorAll(':scope > p');
      setText(description, content.description);
      actions.forEach(action => action.remove());
      applySolutionCardImage(card, content.image);
      // Replace the entire anchor so clicking any part of the card cannot navigate.
      const article = document.createElement('article');
      article.className = card.className;
      article.classList.remove('cursor-pointer');
      article.append(...card.childNodes);
      card.replaceWith(article);
    });
    illustration.after(copy);
    illustration.hidden = true;
  };
  const applyProductivityCarousel = () => {
    const section = document.querySelector('.ativos-productivity');
    const cta = document.querySelector('.ativos-final-cta');
    const cards = section?.querySelector('.ativos-content-card')?.parentElement;
    if (!section || !cta || !cards || section.querySelector('.ativos-benefits-carousel')) return;
    if (!document.querySelector('.ativos-solutions-cards')) return;
    if (![cta, cards].every(isHydrated)) {
      setTimeout(schedule, 50);
      return;
    }
    // Keep captured React nodes mounted. Only the new carousel owns its DOM and state.
    cards.hidden = true;
    cta.hidden = true;
    cta.classList.add('ativos-productivity-legacy-cta');
    const carousel = document.createElement('div');
    carousel.className = 'ativos-benefits-carousel';
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-roledescription', 'carrossel');
    carousel.setAttribute('aria-label', 'Benefícios da Marketing Data Platform');
    const controls = document.createElement('div');
    controls.className = 'ativos-benefits-controls';
    const track = document.createElement('div');
    track.className = 'ativos-benefits-track';
    track.id = 'ativos-benefits-track';
    const createArrow = (label, path) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ativos-benefits-arrow';
      button.setAttribute('aria-label', label);
      button.setAttribute('aria-controls', track.id);
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '1.75');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      const line = document.createElementNS(svg.namespaceURI, 'path');
      line.setAttribute('d', path);
      svg.appendChild(line);
      button.appendChild(svg);
      return button;
    };
    const previous = createArrow('Mostrar benefício anterior', 'M15 6l-6 6 6 6');
    const next = createArrow('Mostrar próximo benefício', 'M9 6l6 6-6 6');
    controls.append(previous, next);
    const artwork = [
      ['mais-produtividade', 1003, 1568],
      ['crescimento-organizacao', 1086, 1448],
      ['mais-visibilidade-resultados', 1086, 1448],
      ['menos-dependencia-tecnica', 1003, 1568],
      ['mais-praticidade-relatorios', 1086, 1448],
    ];
    const buttons = productivityCardsCopy.map((copy, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ativos-benefit-card';
      const titleId = `ativos-benefit-${index}-title`;
      const descriptionId = `ativos-benefit-${index}-description`;
      button.setAttribute('aria-labelledby', titleId);
      button.setAttribute('aria-controls', descriptionId);
      const image = document.createElement('img');
      const [name, width, height] = artwork[index];
      const asset = `/assets/section-6/${name}`;
      Object.assign(image, {
        src: `${asset}-${width}.webp`,
        srcset: `${asset}-640.webp 640w, ${asset}-${width}.webp ${width}w`,
        sizes: '(min-width: 1024px) 400px, (min-width: 520px) 448px, calc(100vw - 72px)',
        width, height, alt: '', loading: 'lazy', decoding: 'async',
      });
      image.className = 'ativos-benefit-image';
      const visual = document.createElement('span');
      visual.className = 'ativos-benefit-visual';
      visual.append(image);
      const body = document.createElement('span');
      body.className = 'ativos-benefit-body';
      const description = document.createElement('span');
      description.className = 'ativos-benefit-description';
      description.id = descriptionId;
      description.textContent = copy.description;
      const title = document.createElement('span');
      title.className = 'ativos-benefit-title';
      title.id = titleId;
      title.textContent = copy.title;
      body.append(title, description);
      button.append(body, visual);
      track.appendChild(button);
      return button;
    });
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    let active = 0;
    let revealTimer;
    let spotlightFrame = 0;
    let spotlightPointer;
    const updateSpotlight = () => {
      spotlightFrame = 0;
      if (!spotlightPointer || !finePointer.matches || reducedMotion.matches) return;
      const { card, x, y } = spotlightPointer;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--mdp-pointer-x', `${x - bounds.left}px`);
      card.style.setProperty('--mdp-pointer-y', `${y - bounds.top}px`);
    };
    const reveal = () => {
      const card = buttons[active];
      // Scroll this strip only; changing a card must never move the page vertically.
      track.scrollTo({
        left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
        behavior: reducedMotion.matches ? 'instant' : 'smooth',
      });
    };
    const select = (index, shouldReveal = false) => {
      active = Math.max(0, Math.min(buttons.length - 1, index));
      buttons.forEach((button, i) => {
        const expanded = i === active;
        button.setAttribute('aria-expanded', String(expanded));
        button.querySelector('.ativos-benefit-description').setAttribute('aria-hidden', String(!expanded));
        if (expanded) button.setAttribute('aria-describedby', `ativos-benefit-${i}-description`);
        else button.removeAttribute('aria-describedby');
      });
      previous.disabled = active === 0;
      next.disabled = active === buttons.length - 1;
      clearTimeout(revealTimer);
      if (shouldReveal) {
        // Wait for the width transition before measuring the final card position.
        revealTimer = setTimeout(reveal, reducedMotion.matches ? 0 : 300);
      }
    };
    buttons.forEach((button, index) => {
      button.addEventListener('pointerenter', event => {
        const keyboardCard = track.querySelector('.ativos-benefit-card:focus-visible');
        if (keyboardCard && keyboardCard !== button) return;
        if (event.pointerType === 'mouse' && finePointer.matches) select(index);
      });
      // CSS draws the light; JavaScript only supplies the pointer coordinates, once per frame.
      button.addEventListener('pointermove', event => {
        if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches) return;
        spotlightPointer = { card: button, x: event.clientX, y: event.clientY };
        if (!spotlightFrame) spotlightFrame = requestAnimationFrame(updateSpotlight);
      });
      button.addEventListener('pointerleave', () => {
        if (spotlightPointer?.card === button) spotlightPointer = null;
      });
      button.addEventListener('click', () => select(index, true));
      button.addEventListener('focus', () => select(index, true));
      button.addEventListener('keydown', event => {
        const target = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: buttons.length - 1 }[event.key];
        if (target === undefined) return;
        event.preventDefault();
        buttons[Math.max(0, Math.min(buttons.length - 1, target))].focus({ preventScroll: true });
      });
    });
    previous.addEventListener('click', () => select(active - 1, true));
    next.addEventListener('click', () => select(active + 1, true));
    select(0);
    const conclusion = document.createElement('p');
    conclusion.className = 'ativos-productivity-conclusion';
    conclusion.textContent = productivityCopy.conclusion;
    carousel.append(controls, track, conclusion);
    cards.after(carousel);
  };
  const applyOnboardingTimeline = () => {
    const section = document.querySelector('.ativos-onboarding');
    const intro = section?.querySelector('.ativos-onboarding-intro');
    if (!intro || section.querySelector('.ativos-journey')) return;
    const legacy = [...intro.parentElement.children].filter(node =>
      node !== intro && node.querySelector('a[href^="/i-am-a"], a[href^="/i-want-to"]'));
    if (legacy.length !== 2 || !legacy.every(isHydrated)) { setTimeout(schedule, 50); return; }
    // Retain hydrated React nodes while replacing the old audience-link panels visually.
    legacy.forEach(node => { node.hidden = true; node.classList.add('ativos-onboarding-legacy'); });
    section.classList.add('ativos-onboarding-timeline');
    const journey = document.createElement('div');
    journey.className = 'ativos-journey';
    const timeline = document.createElement('div');
    timeline.className = 'ativos-journey-timeline';
    const track = document.createElement('div');
    track.className = 'ativos-journey-track';
    track.setAttribute('aria-hidden', 'true');
    const fill = document.createElement('span');
    fill.className = 'ativos-journey-fill';
    track.appendChild(fill);
    const list = document.createElement('ol');
    list.className = 'ativos-journey-steps';
    list.setAttribute('role', 'list');
    list.setAttribute('aria-label', 'Etapas da implantação da Marketing Data Platform');
    onboardingStepsCopy.forEach((copy, index) => {
      const step = document.createElement('li');
      step.className = 'ativos-journey-step';
      const dot = document.createElement('span');
      dot.className = 'ativos-journey-dot';
      dot.textContent = String(index + 1).padStart(2, '0');
      dot.setAttribute('aria-hidden', 'true');
      const card = document.createElement('article');
      card.className = 'ativos-journey-card';
      const icon = document.createElement('div');
      icon.className = 'ativos-journey-icon';
      icon.setAttribute('aria-hidden', 'true');
      // Static SVG paths and schematics are from the user-supplied HTML, never runtime input.
      icon.innerHTML = `<svg viewBox="0 0 24 24" focusable="false">${copy.icon}</svg>`;
      const visual = document.createElement('div');
      visual.className = 'ativos-journey-mini';
      visual.setAttribute('aria-hidden', 'true');
      visual.innerHTML = copy.visual;
      const heading = document.createElement('h3');
      heading.id = `ativos-journey-step-${index + 1}`;
      heading.textContent = copy.title;
      card.setAttribute('aria-labelledby', heading.id);
      const description = document.createElement('p');
      description.textContent = copy.description;
      card.append(icon, visual, heading, description);
      if (index === 2) {
        const optional = document.createElement('span');
        optional.className = 'ativos-journey-optional';
        optional.textContent = 'Etapa opcional conforme contratação';
        card.appendChild(optional);
      }
      step.append(dot, card);
      list.appendChild(step);
    });
    const conclusion = document.createElement('p');
    conclusion.className = 'ativos-journey-conclusion';
    const emphasis = document.createElement('strong');
    const [firstSentence, ...remaining] = onboardingConclusion.split('. ');
    emphasis.textContent = remaining.join('. ');
    conclusion.append(document.createTextNode(`${firstSentence}. `), emphasis);
    timeline.append(track, list);
    journey.append(timeline, conclusion);
    intro.after(journey);

    const dots = [...list.querySelectorAll('.ativos-journey-dot')];
    const steps = [...list.children];
    const desktop = matchMedia('(min-width: 1024px)');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let queued = false;
    const clamp = value => Math.max(0, Math.min(1, value));
    const update = () => {
      queued = false;
      if (!timeline.isConnected) return;
      const bounds = timeline.getBoundingClientRect();
      const points = dots.map(dot => { const r = dot.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; });
      const first = points[0], last = points.at(-1);
      const distance = desktop.matches ? last.x - first.x : last.y - first.y;
      track.style.left = `${first.x - bounds.left - (desktop.matches ? 0 : 1)}px`;
      track.style.top = `${first.y - bounds.top - (desktop.matches ? 1 : 0)}px`;
      track.style.width = `${desktop.matches ? distance : 2}px`;
      track.style.height = `${desktop.matches ? 2 : distance}px`;
      const guide = innerHeight * .57;
      const progress = reducedMotion.matches ? 1 : desktop.matches
        ? clamp((innerHeight * .82 - first.y) / (innerHeight * .52))
        : clamp((guide - first.y) / (distance || 1));
      timeline.style.setProperty('--journey-progress', String(progress));
      steps.forEach((step, index) => {
        const reached = reducedMotion.matches || (desktop.matches
          ? progress >= index / (steps.length - 1) && first.y <= innerHeight * .82
          : points[index].y <= guide);
        step.classList.toggle('is-reached', reached);
      });
    };
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue, { passive: true });
    desktop.addEventListener('change', queue);
    reducedMotion.addEventListener('change', queue);
    new ResizeObserver(queue).observe(timeline);
    document.fonts.ready.then(queue);
    queue();
  };
  const standardizeDashboardCards = () => {
    const section = document.querySelector('.ativos-dashboards');
    if (!section || section.querySelector('.ativos-dashboard-copy')) return;
    const cards = [...section.querySelectorAll('.ativos-plan')];
    const grid = cards[0]?.parentElement;
    if (cards.length !== 3 || !grid) return;
    if (![grid, ...cards].every(isHydrated)) {
      setTimeout(schedule, 50);
      return;
    }
    grid.classList.add('ativos-dashboard-grid');
    // Reuse the first card's existing content without inventing another plan or price.
    const copy = cards[0].cloneNode(true);
    copy.classList.add('ativos-dashboard-copy');
    const button = copy.querySelector('button[aria-expanded]');
    const list = copy.querySelector('ul');
    if (button && list) {
      // Native disclosure keeps the copied card functional without cloning React handlers or IDs.
      const mobile = button.parentElement.parentElement;
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.className = button.className;
      summary.append(...[...button.childNodes].map(node => node.cloneNode(true)));
      const features = list.cloneNode(true);
      features.className = 'grid gap-2 pt-2';
      details.append(summary, features);
      mobile.replaceChildren(details);
    }
    grid.append(copy);
  };
  const applyDashboardCardCopy = () => {
    const cards = [...document.querySelectorAll('.ativos-dashboard-grid > .ativos-plan')];
    if (cards.length !== dashboardCardTitles.length) return;
    const originalNodes = cards.filter(card => !card.classList.contains('ativos-dashboard-copy'))
      .flatMap(card => [card.querySelector('.ativos-plan-title'), card.querySelector(':scope > .border-y'), card.querySelector(':scope > .mt-auto'),
        ...card.querySelectorAll('ul, h3, button[aria-expanded] > span')])
      .filter(Boolean);
    if (!originalNodes.every(isHydrated)) { setTimeout(schedule, 50); return; }
    cards.forEach((card, index) => {
      const content = dashboardCardsCopy[index];
      const title = card.querySelector('.ativos-plan-title');
      setText(title, content.title);
      let subtitle = card.querySelector('.ativos-dashboard-card-subtitle');
      if (!subtitle) {
        subtitle = document.createElement('p');
        subtitle.className = 'ativos-dashboard-card-subtitle';
        title.after(subtitle);
      }
      setText(subtitle, content.subtitle);
      // Remove the complete price block, including its label, dividers and spacing.
      card.querySelector(':scope > .border-y')?.remove();
      card.querySelector(':scope > .mt-auto')?.remove();
      card.querySelector(':scope > .flex-1')?.classList.remove('mb-6');
      card.querySelectorAll('h3').forEach(heading => heading.remove());
      card.querySelectorAll('button[aria-expanded] > span, summary:not(.ativos-dashboard-summary) > span').forEach(label => setText(label, 'Ver detalhes'));
      // Mobile disclosures mount fresh lists when opened, so decorate each new list too.
      card.querySelectorAll('ul').forEach(list => {
        if (list.dataset.ativosDashboardCopy === String(index)) return;
        const template = list.firstElementChild;
        if (!template) return;
        const items = content.items.map(item => {
          const row = template.cloneNode(true);
          const text = row.querySelector(':scope > span:last-child');
          const label = document.createElement('strong');
          label.textContent = item.label + ':';
          text.replaceChildren(label, document.createTextNode(' ' + item.description));
          return row;
        });
        list.classList.add('ativos-dashboard-features');
        list.dataset.ativosDashboardCopy = String(index);
        list.replaceChildren(...items);
      });
    });
    const contactPanel = cards[0].parentElement.nextElementSibling;
    if (contactPanel?.querySelector('a[href="/enterprise"]') && contactPanel.textContent.includes('More than 250,000 subscribers?')) {
      if (isHydrated(contactPanel)) contactPanel.remove();
      else setTimeout(schedule, 50);
    }
  };
  const brand = link => {
    if (!link?.querySelector('svg')) return;
    link.classList.add('ativos-brand');
    link.setAttribute('aria-label', 'Marketing Data Platform');
  };
  const simplifyHeader = nav => {
    nav.classList.add('ativos-nav');
    nav.setAttribute('role', 'banner');
    if (nav.childElementCount === 1 && nav.firstElementChild.classList.contains('ativos-header-content')) return;
    // Remove the captured menus only after React has committed their nodes.
    if (![nav, ...nav.querySelectorAll('a, button')].every(isHydrated)) {
      setTimeout(schedule, 50);
      return;
    }
    const content = document.createElement('div');
    content.className = 'ativos-header-content';
    const logo = document.createElement('span');
    logo.className = 'ativos-brand';
    logo.setAttribute('role', 'img');
    logo.setAttribute('aria-label', 'Marketing Data Platform');
    content.appendChild(logo);
    nav.replaceChildren(content);
  };
  const frames = new WeakSet();
  const simplifyFooter = footer => {
    if (!footer || (footer.childElementCount === 1 && footer.firstElementChild.classList.contains('ativos-footer-content'))) return;
    if (![footer, ...footer.querySelectorAll('a, iframe')].every(isHydrated)) {
      setTimeout(schedule, 50);
      return;
    }
    const content = document.createElement('div');
    content.className = 'ativos-footer-content';
    const logo = document.createElement('span');
    logo.className = 'ativos-brand';
    logo.setAttribute('role', 'img');
    logo.setAttribute('aria-label', 'Marketing Data Platform');
    content.appendChild(logo);
    footer.classList.add('ativos-footer');
    footer.replaceChildren(content);
  };
  const themeFrame = frame => {
    const apply = () => {
      try {
        const doc = frame.contentDocument;
        if (!doc?.head) return;
        doc.documentElement.dataset.ativosEmbed = 'true';
        if (!doc.getElementById('ativos-embed-theme')) {
          const sheet = doc.createElement('link');
          sheet.id = 'ativos-embed-theme';
          sheet.rel = 'stylesheet';
          sheet.href = '/ativos-theme.css';
          doc.head.appendChild(sheet);
        }
      } catch {}
    };
    if (!frames.has(frame)) { frames.add(frame); frame.addEventListener('load', apply); }
    apply();
  };
  const refineAccessibility = () => {
    const pageTitle = 'Marketing Data Platform | Ativos Tecnologia';
    if (document.title !== pageTitle) document.title = pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description && description.content !== heroCopy.subtitle) description.content = heroCopy.subtitle;
    const main = document.querySelector('main');
    if (main && !document.querySelector('.ativos-skip-link')) {
      if (!main.id) main.id = 'ativos-main';
      main.tabIndex = -1;
      const skip = document.createElement('a');
      skip.className = 'ativos-skip-link';
      skip.href = `#${main.id}`;
      skip.textContent = 'Pular para o conteúdo';
      skip.addEventListener('click', () => main.focus({ preventScroll: true }));
      document.body.prepend(skip);
    }
    if (!document.querySelector('meta[name="theme-color"]')) {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#0c0e12';
      document.head.append(meta);
    }
    const logoMarquee = document.querySelector('.trusted-newsletters-track')?.parentElement;
    const textMarquee = document.querySelector('.ticker-image-container')?.parentElement?.parentElement;
    for (const [marquee, label] of [[logoMarquee, 'dos logos'], [textMarquee, 'da faixa de texto']]) {
      if (!marquee || marquee.querySelector('.ativos-marquee-toggle')) continue;
      marquee.classList.add('ativos-marquee');
      if (marquee === textMarquee) marquee.classList.add('ativos-text-marquee');
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'ativos-marquee-toggle';
      const render = () => {
        const paused = marquee.dataset.paused === 'true';
        toggle.setAttribute('aria-label', `${paused ? 'Retomar' : 'Pausar'} animação ${label}`);
        toggle.setAttribute('aria-pressed', String(paused));
        toggle.innerHTML = paused
          ? '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2 13 8 5 14Z" fill="currentColor"/></svg>'
          : '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 3H6V13H4ZM10 3H12V13H10Z" fill="currentColor"/></svg>';
      };
      toggle.addEventListener('click', () => {
        marquee.dataset.paused = String(marquee.dataset.paused !== 'true');
        render();
      });
      render();
      marquee.append(toggle);
    }
  };
  const refineReadingHierarchy = () => {
    document.querySelectorAll('.ativos-dashboard-grid > .ativos-plan').forEach((card, index) => {
      if (card.querySelector(':scope > .ativos-dashboard-disclosure')) return;
      const source = card.querySelector('ul.ativos-dashboard-features');
      if (!source || source.children.length !== dashboardCardsCopy[index]?.items.length) return;
      // Keep React's lists and mobile controls mounted. One native disclosure owns
      // the visible details at every size, without duplicating accessible content.
      const features = source.cloneNode(true);
      features.className = 'ativos-dashboard-features ativos-dashboard-disclosure-list';
      features.id = `ativos-dashboard-features-${index + 1}`;
      card.querySelectorAll(':scope > div').forEach(container => {
        if (!container.querySelector('ul')) return;
        container.classList.add('ativos-dashboard-legacy-details');
        container.hidden = true;
      });
      const details = document.createElement('details');
      details.className = 'ativos-dashboard-disclosure';
      const summary = document.createElement('summary');
      summary.className = 'ativos-dashboard-summary';
      const label = document.createElement('span');
      label.textContent = 'Ver detalhes';
      summary.append(label);
      summary.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      const updateLabel = () => {
        const action = details.open ? 'Ocultar detalhes' : 'Ver detalhes';
        setText(label, action);
        summary.setAttribute('aria-label', `${action}: ${dashboardCardsCopy[index].title}`);
      };
      details.addEventListener('toggle', updateLabel);
      updateLabel();
      details.append(summary, features);
      card.append(details);
    });

    for (const name of ['hero', 'integrations']) {
      const section = document.querySelector(`.ativos-${name}`);
      if (!section || section.querySelector('.ativos-commercial-action')) continue;
      const original = section.querySelector('.custom-box-shadow-button');
      if (!original || !isHydrated(original)) continue;
      const action = document.createElement(commercialContactUrl ? 'a' : 'button');
      action.className = `${original.className} ativos-commercial-action ativos-primary-action`;
      if (commercialContactUrl) action.href = commercialContactUrl;
      else {
        action.type = 'button';
        action.disabled = true;
        action.title = 'Contato comercial indisponível no momento';
      }
      const label = document.createElement('span');
      label.className = original.querySelector('.custom-box-shadow-text')?.className || 'custom-box-shadow-text';
      label.textContent = 'Falar com o comercial';
      action.append(label);
      if (name === 'integrations') original.parentElement.classList.add('ativos-commercial-slot');
      // The captured authentication handler remains mounted but cannot be reached.
      original.classList.add('ativos-legacy-action');
      original.hidden = true;
      original.after(action);
    }

    const destinations = {
      '.ativos-hero': 'ativos-platform-heading',
      '.ativos-operation': 'ativos-platform-heading',
      '.ativos-platform': 'ativos-solutions-heading',
      '.ativos-solutions': 'ativos-dashboards-heading',
      '.ativos-dashboards': 'ativos-dashboard-card-1',
    };
    for (const [selector, id] of Object.entries(destinations)) {
      const destination = document.getElementById(id);
      if (!destination) continue;
      destination.setAttribute('tabindex', '-1');
      document.querySelectorAll(`${selector} a.custom-box-shadow-button:not(.ativos-commercial-action):not(.ativos-legacy-action)`).forEach(link => {
        link.setAttribute('href', `#${id}`);
        link.removeAttribute('target');
        link.dataset.ativosReadingLink = '';
      });
    }
  };
  // Preserve native anchor behavior while keeping captured Link handlers out of
  // the local reading path. Modifier clicks and keyboard activation stay native.
  window.addEventListener('click', event => {
    if (event.target.closest?.('a[data-ativos-reading-link]')) event.stopImmediatePropagation();
  }, true);
  const refinePresentation = () => {
    // Decorate existing nodes only: preserve section order, copy, assets and handlers.
    for (const name of ['hero', 'operation', 'platform', 'solutions', 'dashboards', 'productivity', 'onboarding', 'faq', 'integrations']) {
      const section = document.querySelector(`.ativos-${name}`);
      const heading = section?.querySelector('h1,h2');
      if (!heading) continue;
      section.classList.add('ativos-section');
      if (!heading.id) heading.id = `ativos-${name}-heading`;
      if (section.getAttribute('aria-labelledby') !== heading.id) section.setAttribute('aria-labelledby', heading.id);
      if (name !== 'hero') section.firstElementChild?.classList.add('ativos-section-frame');
    }
    document.querySelector('.ativos-hero-content .custom-box-shadow-button')?.classList.add('ativos-primary-action');
    document.querySelector('.ativos-integrations .custom-box-shadow-button')?.classList.add('ativos-primary-action');
    document.querySelectorAll('.ativos-dashboard-grid > .ativos-plan').forEach((card, index) => {
      const title = card.querySelector('.ativos-plan-title');
      if (!title) return;
      title.id = `ativos-dashboard-card-${index + 1}`;
      title.setAttribute('role', 'heading');
      title.setAttribute('aria-level', '3');
      card.setAttribute('role', 'group');
      card.setAttribute('aria-labelledby', title.id);
    });
  };
  const mark = () => {
    // The captured React root may remove this attribute during a delayed render.
    if (document.documentElement.dataset.theme !== 'ativos') document.documentElement.dataset.theme = 'ativos';
    if (document.documentElement.lang !== 'pt-BR') document.documentElement.lang = 'pt-BR';
    document.querySelectorAll('nav[data-ref="mobile-nav"], nav[data-ref="desktop-nav"]').forEach(simplifyHeader);
    document.querySelectorAll('a[href="/"]').forEach(brand);
    simplifyFooter(document.querySelector('footer'));
    applyHeroCopy();
    const socialMediaHeading = document.querySelector('.trusted-newsletters-container')?.previousElementSibling;
    if (socialMediaHeading && isHydrated(socialMediaHeading)) {
      setText(socialMediaHeading, 'Relatórios e dashboards completos para todas as mídias sociais!');
      socialMediaHeading.classList.remove('uppercase');
    }
    applySocialLogos();
    applySectionCopy('operation', 'STAND OUT IN THE INBOX', operationCopy);
    applyOperationVideo();
    applySectionCopy('platform', 'NO CODE. NO LIMITS.', platformCopy);
    applySectionCopy('solutions', 'Monetize your content', solutionsCopy);
    applySectionCopy('dashboards', 'BUILD YOUR CONTENT YOUR WAY', dashboardsCopy);
    applySectionCopy('productivity', 'MORE THAN JUST NEWSLETTERS', productivityCopy);
    applySectionCopy('onboarding', 'THE ONE PLATFORM FOR EVERY CREATOR', onboardingCopy);
    applySectionCopy('faq', 'GOT QUESTIONS', faqCopy);
    applySectionCopy('integrations', 'CONNECT YOUR NEWSLETTER', integrationsCopy);
    applyIntegrationArtwork();
    applyFaqItems();
    document.querySelectorAll('a[href^="/features?tag="]').forEach(card => card.classList.add('ativos-content-card'));
    for (const heading of document.querySelectorAll('h2')) {
      const section = heading.closest('section');
      if (!section) continue;
      if (heading.textContent.includes('BUILD YOUR CONTENT') || section.classList.contains('ativos-dashboards')) {
        section.classList.add('ativos-pricing');
        for (const label of section.querySelectorAll('p,span')) {
          if (!['Free', 'Lite', 'Pro', ...dashboardCardTitles].includes(label.textContent.trim()) || label.children.length) continue;
          let card = label.parentElement;
          while (card && card !== section && !card.querySelector('ul')) card = card.parentElement;
          if (card && card !== section) { card.classList.add('ativos-plan'); label.classList.add('ativos-plan-title'); }
        }
      }
      if (heading.textContent.includes('GOT QUESTIONS')) section.classList.add('ativos-faq');
      if (heading.textContent.toUpperCase().includes('READY TO')) {
        section.classList.add('ativos-final-cta');
        const panel = heading.parentElement?.parentElement;
        if (panel?.querySelector('.custom-box-shadow-button')) panel.classList.add('ativos-cta-panel');
      }
      if (heading.textContent.includes('THE ONE PLATFORM') || section.classList.contains('ativos-onboarding')) {
        section.querySelectorAll('a').forEach(link => link.classList.add('ativos-intent-link'));
      }
    }
    const media = [...document.querySelectorAll('button')].find(b => b.textContent.trim() === 'Media');
    if (media) {
      let container = media.parentElement;
      for (let i = 0; container && i < 5; i++, container = container.parentElement) {
        if (container.querySelector('img') && !container.querySelector('h2')) {
          container.classList.add('ativos-testimonials');
          break;
        }
      }
    }
    relocateTestimonials();
    applyPlatformTabsCopy();
    duplicateProductivityCards();
    applyProductivityCarousel();
    applyOnboardingTimeline();
    standardizeDashboardCards();
    applyDashboardCardCopy();
    document.querySelectorAll('iframe[src*="embeds.beehiiv.com"]').forEach(themeFrame);
    applySectionOrder();
    refinePresentation();
    refineAccessibility();
    refineReadingHierarchy();
  };
  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; mark(); });
  };
  // Wait for the original React tree to hydrate before decorating its nodes.
  const start = () => {
    const heading = document.querySelector('h1');
    if (heading && !isHydrated(heading)) {
      setTimeout(start, 50);
      return;
    }
    mark();
    new MutationObserver(schedule).observe(document.documentElement, {
      childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['data-theme'],
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();

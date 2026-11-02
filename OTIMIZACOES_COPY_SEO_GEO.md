# Otimizações de copy SEO/GEO — Marketing Data Platform

**Status:** propostas pendentes de implementação. **Data:** 02/11/2026.

Recomendações numeradas em ordem de execução: **P0 — correção factual; P1 — alta; P2 — média; P3 — refinamento**. O foco é o texto da landing atual, incluindo títulos, descrições, FAQ e metadados editoriais.

**Premissa comercial atual:** o tracking faz parte do pacote, conforme esclarecimento do usuário nesta revisão. Essa definição prevalece sobre as referências anteriores a contratação opcional. A inclusão no pacote, por si só, não esclarece a existência ou o valor de uma taxa de implantação.

Base: estratégia SEO/GEO em `seo/estrategia_unificada_copy_seo_geo_mdp.md` e matriz em `seo/matriz_final_seo_marketing_data_platform.csv` (fontes locais de trabalho), [copy de origem](site/ativos-theme.js) e [HTML atual](site/index.html). As prioridades abaixo são editoriais; não representam demanda ou ganhos de posicionamento medidos.

## 1. P0 — Apresentar o tracking como parte do pacote em toda a copy

- **Onde:** implantação, FAQ de contratação e textos auxiliares ligados à mensuração.
- **Achado confirmado:** a implantação diz “Quando contratado, implantamos o tracking”; a mesma etapa apresenta “Etapa opcional conforme contratação”. A FAQ também usa a condição “quando contratado” para o tracking. Esses textos contradizem a definição comercial atual.
- **Ajuste recomendado:** retirar a condição de contratação opcional e apresentar a configuração de eventos e conversões como parte da implantação do pacote. Exemplo: “Implantamos o tracking de eventos e conversões conforme as necessidades de cada operação.” Revisar também o aviso auxiliar da etapa e a resposta comercial completa.
- **Motivo SEO/GEO:** permitir que a oferta seja interpretada corretamente mesmo quando apenas a FAQ ou a etapa de implantação for recuperada em uma resposta de busca.
- **Validação necessária:** confirmar o tratamento da taxa de implantação antes de reescrever essa parte da FAQ. Não presumir gratuidade nem cobrança adicional a partir da inclusão do tracking no pacote.

## 2. P1 — Completar a definição do produto na abertura

- **Onde:** texto de apoio do hero e primeira apresentação da solução.
- **Achado confirmado:** a categoria “plataforma de dados de marketing para agências” já aparece no hero. O nome por extenso e a operação técnica gerenciada ficam explícitos mais adiante, na seção de pilares.
- **Ajuste recomendado:** apresentar na abertura a relação entre nome, categoria, público e diferencial gerenciado. Exemplo: “A Marketing Data Platform (MDP) é uma plataforma de dados de marketing para agências, com infraestrutura e operação técnica gerenciadas para acompanhar vários clientes.” Distribuir a explicação entre os textos existentes para manter a concisão. Identificar uma vez, em texto visível adequado, sua relação com a Ativos Tecnologia.
- **Motivo SEO/GEO:** tornar a definição da MDP compreensível desde o primeiro trecho, distinguindo a oferta integrada de uma ferramenta isolada de relatórios. O H1 comercial atual pode ser preservado; a otimização não exige repetir a palavra-chave nele.

## 3. P1 — Esclarecer que os usuários são da equipe da agência

- **Onde:** apresentação dos dashboards e FAQ “Posso gerenciar vários clientes na mesma plataforma?”.
- **Achado confirmado:** a copy explica carteira e visões individuais, mas expressões como “Acesso individual” não esclarecem, isoladamente, quem acessa os painéis. A estratégia vigente define uso interno pela agência e ausência de acesso direto do cliente final na V1.
- **Ajuste recomendado:** explicitar esse público na resposta existente. Exemplo: “A equipe da agência acompanha a carteira e consulta os dashboards individuais de cada cliente. Na versão atual, o acesso à plataforma é interno à agência.” Ajustar “Acesso individual” para um rótulo como “Navegação por cliente”.
- **Motivo SEO/GEO:** diferenciar “dashboard por cliente” de “portal para o cliente” e evitar que uma resposta sobre a MDP atribua acesso externo ao produto.
- **Validação necessária:** confirmar se a restrição da V1 permanece vigente antes de publicar a redação definitiva.

## 4. P2 — Tornar os H3 dos pilares mais descritivos

- **Onde:** títulos internos dos painéis Conecte, Organize, Mensure e Analise.
- **Achado confirmado:** os H3 atuais são “Conect”, “Organize”, “Mensure” e “Analise”. Os objetos das ações aparecem nas descrições, mas não nos títulos; “Conect” também diverge do rótulo “Conecte.” da aba.
- **Ajuste recomendado:** usar títulos como “Conecte dados de marketing”, “Organize os dados dos clientes”, “Mensure eventos e conversões” e “Analise os resultados da carteira”. Manter os rótulos curtos das abas, se forem melhores para navegação.
- **Motivo SEO/GEO:** dar contexto semântico aos subtítulos e uniformizar a nomenclatura. Preservar a função dos pilares de explicar o fluxo; os módulos continuam apresentando as capacidades. Essa revisão não exige combinar as duas seções.

## 5. P2 — Explicar as condições das integrações junto à capacidade

- **Onde:** card “Integração de Dados” e descrição do pilar Conecte.
- **Achado confirmado:** o card cita anúncios, analytics, CRM e planilhas sem condições locais. A FAQ já informa dependências de disponibilidade e permissões. Não há uma promessa expressa de integração universal; a oportunidade é tornar os trechos mais completos quando lidos separadamente.
- **Ajuste recomendado:** incorporar uma condição curta ao texto do módulo, como “conforme as integrações disponíveis e os acessos autorizados”. Ao exemplificar plataformas, usar somente as confirmadas para a oferta atual e distinguir fontes de dados de ferramentas de gestão de tags, como o Google Tag Manager.
- **Motivo SEO/GEO:** explicar com precisão a “integração de dados de marketing”, sem transformar um catálogo previsto em garantia de disponibilidade.
- **Validação necessária:** conferir a lista operacional atual antes de alterar exemplos ou afirmar que um conector está disponível.

## 6. P2 — Explicar um fluxo concreto de leitura dos dashboards

- **Onde:** introdução da seção de dashboards e descrições dos quadros existentes.
- **Achado confirmado:** carteira consolidada, comparação, visão individual, indicadores e metas já estão documentados, mas a explicação se distribui entre vários textos semelhantes sobre acompanhar resultados.
- **Ajuste recomendado:** substituir uma passagem genérica por um exemplo curto da sequência carteira → cliente → plataforma → indicador. Exemplo: “A equipe consulta os indicadores da carteira, seleciona uma empresa e analisa seus resultados por plataforma e período.” Relacionar o exemplo aos recursos efetivamente apresentados nos quadros.
- **Motivo SEO/GEO:** responder de forma concreta como funciona um dashboard para múltiplos clientes e como ele apoia a rotina da agência. A matriz prioriza esse caso de uso; basta uma explicação comercial na landing, sem transformá-la em tutorial.
- **Validação necessária:** confirmar a origem e a disponibilidade de métricas específicas antes de acrescentar exemplos de receita, ROAS ou atribuição entre fontes.

## 7. P2 — Tornar explícita a exportação manual dos relatórios

- **Onde:** quadro “Relatórios para sua operação” e benefício “Mais praticidade nos relatórios”.
- **Achado confirmado:** a copy informa PDF, Excel e exportações sob demanda. O caráter manual está implícito no verbo “exporte”, mas não aparece de forma direta. Não há promessa atual de envio automático.
- **Ajuste recomendado:** esclarecer em uma passagem que a equipe realiza a exportação quando necessário. Exemplo: “Sua equipe exporta manualmente os dashboards em PDF com a identidade da agência e os dados tabulares em Excel.” Usar “relatórios de mídia paga” apenas onde os dados apresentados corresponderem a esse recorte.
- **Motivo SEO/GEO:** esclarecer a relação entre dashboards e relatórios e atender ao contexto de busca sem atribuir à MDP uma automação de envio não documentada. Evitar espalhar “relatórios automáticos” como promessa comercial.

## 8. P2 — Responder sobre atualização dos dados após confirmação do produto

- **Onde:** FAQ existente.
- **Achado confirmado:** as seis perguntas atuais não esclarecem a frequência de atualização. A matriz registra essa dúvida, mas os materiais consultados não estabelecem a cadência operacional.
- **Ajuste recomendado:** preparar uma resposta para “Com que frequência os dados dos dashboards são atualizados?”, informando a frequência real, eventuais diferenças entre fontes e dependências relevantes. Publicar somente depois de confirmar essas informações.
- **Motivo SEO/GEO:** responder uma dúvida concreta de avaliação da plataforma com uma explicação própria e verificável.
- **Validação necessária:** frequência por fonte, atrasos e tratamento de falhas. Não preencher a resposta com “tempo real”, “diariamente” ou outra periodicidade presumida. A demanda específica dessa consulta permanece uma hipótese editorial da matriz.

## 9. P2 — Contextualizar as imagens e os números demonstrativos

- **Onde:** textos associados às representações de dashboards e à apresentação visual do produto.
- **Achado confirmado:** a copy não informa a origem dos valores exibidos nas artes nem esclarece textualmente quais imagens representam interfaces reais ou ilustrações.
- **Ajuste recomendado:** identificar exemplos ilustrativos e dados fictícios quando essa for sua natureza. Para telas reais, descrever brevemente o recurso mostrado e seu uso pela equipe. Se houver resultados de clientes autorizados, vinculá-los ao contexto, período e fonte verificáveis.
- **Motivo SEO/GEO:** oferecer informação própria sobre o produto e evitar que números de uma demonstração sejam interpretados como resultados comprovados da MDP.
- **Validação necessária:** classificar cada material visual antes de definir a legenda. A ausência de contexto textual está confirmada; a natureza de cada imagem e de seus números exige conferência.

## 10. P3 — Relacionar o benefício de visibilidade a recursos concretos

- **Onde:** card “Mais visibilidade sobre resultados”.
- **Achado confirmado:** a descrição diz “identifique oportunidades de melhoria com mais facilidade”, sem nomear o mecanismo. Outros benefícios já citam processos, padronização ou gestão técnica e não precisam receber a mesma reescrita.
- **Ajuste recomendado:** relacionar a visibilidade à visão consolidada, comparação entre clientes e acompanhamento de metas. Exemplo: “Compare os indicadores da carteira e acompanhe as metas de cada cliente para identificar operações que precisam de atenção.”
- **Motivo SEO/GEO:** tornar o benefício verificável e compreensível sem insinuar recomendações autônomas ou melhoria financeira garantida. Substituir a abstração, preservando a concisão do card.

## 11. P3 — Refinar a meta description para destacar a operação gerenciada

- **Onde:** redação da meta description, após aprovar o apoio do hero.
- **Achado confirmado:** a descrição atual já é coerente com a MDP e inclui a categoria e o público. O refinamento proposto é destacar o diferencial gerenciado e o atendimento a vários clientes.
- **Ajuste recomendado:** considerar “Integre dados de marketing e acompanhe vários clientes em dashboards padronizados, com infraestrutura e operação técnica gerenciadas para agências.” Manter a mesma promessa no conteúdo visível.
- **Motivo SEO/GEO:** apresentar ao comprador uma síntese mais específica da oferta. O SEO Title atual já identifica categoria, público e marca; não é necessário substituí-lo para executar esse ajuste.

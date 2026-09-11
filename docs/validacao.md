# Validação da primeira entrega

Validação local em 11/09/2026, com Node 22.18.0.

- Instalação concluída; npm audit reportou zero vulnerabilidades.
- `npm run lint`: aprovado, sem erros ou avisos.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado; exportação em `out/`, sem runtime de servidor.
- 495 referências locais nos HTMLs exportados verificadas, sem arquivos ou destinos ausentes.
- Playwright em Chromium: cinco quizzes percorridos até o final, reinício e tentativa incorreta conferidos; menu mobile, fechamento por Escape e download de PDF verificados.
- Onze rotas verificadas nas larguras 320, 390, 768 e 1440 px, sem overflow horizontal e com um h1 por página.
- axe-core em dez páginas: nenhuma violação detectada nas regras WCAG 2 A/AA e 2.1 AA executadas.
- Home inspecionada por screenshots em desktop e celular; PDF de formas renderizado para conferência.
- `git diff --check`: sem erros.

Os testes de navegador usaram ferramentas já instaladas no notebook, sem adicionar dependências de execução ao site. A verificação automática não substitui auditoria manual completa com leitores de tela, revisão pedagógica ou teste de dispositivos reais. Publicação Cloudflare e configuração de DNS não foram executadas.

## Complementos da entrega

- Quatro artes reais integradas com versões WebP responsivas e imagem de compartilhamento JPEG.
- Seção da criadora na Home e em Sobre, com conteúdo público resumido, sem identificadores pessoais do currículo.
- Favicon estático adicionado e validado com resposta HTTP 200 no servidor de desenvolvimento.
- Atributo `data-scroll-behavior="smooth"` configurado no HTML.
- Navegação em desenvolvimento testada sem avisos de rolagem ou hidratação em navegador sem extensões.
- Lint, TypeScript e build aprovados após as correções.

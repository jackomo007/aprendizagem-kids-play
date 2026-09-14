# Aprendizagem Kids Play

**Aprender, brincar e descobrir!**

Plataforma educacional gratuita para Educação Infantil e Ensino Fundamental I. Primeira versão estática, sem cadastro, backend, banco, cookies, tracking ou coleta de dados pessoais nos jogos.

## Executar localmente

Requer Node.js 22.13+ (recomendado Node 22 LTS) e npm. Neste notebook, Node 22 já está instalado via nvm.

O projeto fixa npm 10.9.2 e `legacy-peer-deps=false` para que instalações locais e builds na Cloudflare resolvam exatamente a mesma árvore de dependências.

```sh
cd /Users/greto/Documents/GitHub/aprendizagem-kids-play
nvm use
npm ci
npm run dev
```

Abra http://localhost:3000. Não é necessário configurar domínio ou arquivo `.env`.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

`build` gera HTML, CSS, JavaScript e arquivos públicos em **`out/`**. `preview` serve essa pasta na porta 3000 com Python 3; pare o servidor de desenvolvimento antes. Não use `next start`: este projeto usa exportação estática. O servidor simples de preview não aplica os headers da Cloudflare e não reproduz a página 404 personalizada automaticamente.

## Stack e organização

Next.js 16 (App Router), React 19, TypeScript estrito e Tailwind CSS 4. ESLint 9, compatível com os plugins React usados pelo Next.js. Nenhuma biblioteca de UI, ícones, animação, analytics ou estado global.

```text
src/
  app/                 rotas, layout, CSS, metadata, sitemap e robots
  components/          navegação, hero, cards, design system e quizzes
  data/                categorias, jogos, atividades, idiomas, vídeos, perguntas
  types/content.ts     contratos de conteúdo
  lib/                 helpers de metadata e contrato futuro de analytics
public/
  atividades/          PDFs por disciplina
  images/marca/        imagens reais da marca otimizadas em WebP
  _headers             headers estáticos para Cloudflare Pages
docs/                  relatório de validação
```

Componentes: Button, ButtonLink, Card, CategoryCard, ContentCard, GameCard, ActivityCard, VideoCard, Badge, SectionTitle, Container, Navbar, Footer, Brand, Hero, PageIntro e QuizPlayer.

Os tokens de cores, tipografia, raios, sombras, espaçamento e transição ficam em `src/app/globals.css`. Breakpoints: 48rem/64rem no tema Tailwind, com ajustes específicos de composição em 390px, 767px e 1100px. Fontes do sistema evitam downloads externos. SVGs pequenos são ícones de interface, não uma recriação da marca.

## Rotas e conteúdo

- `/`: home com todas as categorias, jogos, atividades e orientação para famílias.
- `/educacao-infantil/` e `/fundamental/`: áreas por etapa, temas futuros e materiais disponíveis.
- `/jogos/`: dois jogos curtos funcionais e card de Missão Oceano em preparação.
- `/jogos/conta-comigo/` e `/jogos/detetive-das-palavras/`: perguntas interativas, tentativas livres, feedback e reinício.
- `/atividades/`: navegação em três níveis — turma, categoria ou matéria e cards grandes de atividades. Inclui coleções de dez atividades de Grafomotricidade e dez de Percepção Visual para o Pré III, todas em PDF A4 com visualização e download.
- `/idiomas/`, `/idiomas/ingles/`, `/idiomas/espanhol/`: coleção inicial e um quiz funcional por idioma.
- `/desafios/` e `/desafios/natureza/`: prática de Ciências, sem nota ou cronômetro.
- `/videos/`: prévia claramente identificada como em preparação, sem embeds nem links inventados.
- `/sobre/` e `/privacidade/`: orientações e informações sobre esta versão.
- 404 personalizada, `/sitemap.xml` e `/robots.txt`.

Os jogos são pequenos quizzes de demonstração, não jogos completos de aventura. Temas e anos escolares futuros são apresentados como texto, não filtros que parecem funcionar. Os materiais são complementares e não representam currículo completo.

## Adicionar conteúdo e marca

1. Acrescente os itens tipados em `src/data/`.
2. Coloque PDFs em `public/atividades/<disciplina>/` e informe caminho e número real de páginas em `activities.ts`.
3. Para jogos deste formato, adicione perguntas em `quizzes.ts` e um jogo com `status: "available"`; `generateStaticParams` exporta as rotas. Uma aventura própria como Missão Oceano deve ter uma integração específica antes de ser disponibilizada.
4. Para vídeos, preencha `youtubeId` somente após revisão do conteúdo. O card abre o YouTube em nova aba, identificado, sem carregar o serviço antes do clique.
5. As quatro artes fornecidas já estão integradas: logo no cabeçalho/rodapé, perfil na Home, banner na página Sobre e banner YouTube na área de vídeos. Os componentes Brand, BrandBanner e Hero usam versões WebP responsivas, sem recortes; Open Graph usa JPEG. Veja `public/images/README.md` para os arquivos e dimensões.
6. O domínio de metadata e canonical fica em `src/data/site.ts`. As rotas locais são relativas.

Os PDFs atuais são materiais demonstrativos originais. Para regenerá-los, execute `python3 scripts/generate-activities.py` (sem dependências Python adicionais). Novos conteúdos devem passar por revisão pedagógica antes da publicação.

## UX, acessibilidade e privacidade

HTML semântico, link de pular conteúdo, navegação por teclado, foco visível, menu mobile com estado expandido e fechamento por Escape, contraste, ícones decorativos ocultos de leitores de tela, feedback anunciado, alvos de toque confortáveis e respeito a movimento reduzido. Não há animações contínuas, fontes externas ou imagens pesadas. Apenas Navbar e QuizPlayer precisam de estado client-side.

Respostas ficam na memória da página e são descartadas ao sair ou recarregar. Nenhum nome, idade, escola ou perfil é solicitado. Não há storage, ranking ou área social. `src/lib/analytics.ts` contém somente tipos para eventos agregados futuros, sem integração ou envio. A hospedagem pode manter registros técnicos; isso é explicado em Privacidade.

## GitHub

O repositório Git existente foi preservado. `.gitignore` exclui `.env`, dependências, builds e arquivos locais. `package-lock.json` deve ser versionado. Nenhum commit, push ou publicação é feito pelos scripts.

```sh
git add .
git commit -m "Cria primeira versão do Aprendizagem Kids Play"
git push
```

Use a branch e o remoto configurados no seu repositório.

## Cloudflare Pages

Conecte o repositório na Cloudflare e configure:

| Campo            | Valor                             |
| ---------------- | --------------------------------- |
| Framework        | Next.js (Static HTML Export)      |
| Build command    | `npm run build`                   |
| Output directory | `out`                             |
| Root directory   | raiz deste repositório            |
| Node             | 22.18.0 ou Node 22 LTS compatível |

A aplicação não precisa de Workers, adaptador Next, Functions, runtime Node, variáveis secretas ou banco. A Cloudflare só serve arquivos estáticos. O `_headers` é copiado para `out/` no build. Use o preview de deploy antes de apontar o domínio.

Em Custom domains, adicione `www.aprendizagemkidsplay.com`. Configure DNS conforme o painel e uma regra na Cloudflare para redirecionar `aprendizagemkidsplay.com` para `https://www.aprendizagemkidsplay.com`, preservando caminho e query. Essas configurações de conta/DNS não foram executadas pelo projeto.

Referências oficiais: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports) e [Cloudflare Pages: static Next.js](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).

## Próximos passos

Revisar e ampliar o conteúdo; integrar Missão Oceano; selecionar vídeos; conectar GitHub à Cloudflare e configurar domínio. Analytics agregado é opcional e ficou para depois.

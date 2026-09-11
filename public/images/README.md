# Arquivos visuais da marca

Artes fornecidas pelo usuário e integradas sem redesenho ou recorte:

- `banner.png` → `marca/logo-{360,560}.webp`: cabeçalho e rodapé.
- `profile.png` → `marca/perfil-{400,800}.webp`: destaque da Home.
- `banner_youtube.png` → `marca/banner-videos-{640,1280}.webp`: área de vídeos.
- Imagem panorâmica fornecida → `marca/banner-sobre-{640,1280}.webp`: página Sobre; `marca/compartilhamento.jpg`: Open Graph.

Versões WebP com dimensões proporcionais, qualidade 85 e sem metadados pessoais. Os originais permanecem em Downloads e não são servidos pelo site. As imagens menores são selecionadas por `picture` em telas até 767px. Cabeçalho e imagem principal têm prioridade; rodapé e banners usam lazy loading. Todos os arquivos necessários estão em `public` e são exportados para `out`.

Configuração em `src/data/site.ts`; componentes Brand, BrandBanner e Hero. Atualize também as dimensões intrínsecas ao substituir arquivos. Imagens de compartilhamento usam JPEG para ampla compatibilidade.

# Nathan

Homepage pessoal com estetica minimalista e navegacao split-panel. Paginas de Now, About, Bookshelf, Games, Music, Setup, Gallery, Blog e Links -- com i18n (pt/en), animacoes GSAP + Motion e scroll suave Lenis.

## O que faz?

O Nathan e um site pessoal que funciona como um "digital home". O layout divide a tela em painel de navegacao fixo (esquerda) e conteudo animado (direita). Cada pagina apresenta uma faceta do autor: o que esta fazendo agora (Now), livros que marcaram (Bookshelf), jogos que importam (Games), albuns que sempre volta (Music), setup de trabalho (Setup), e links que recomenda. O conteudo e bilíngue (portugues e ingles) com toggle de idioma.

## Funcionalidades

- Layout split-panel: navegacao fixa à esquerda, conteudo à direita
- 9 paginas: Now, About, Bookshelf, Games, Music, Setup, Gallery, Blog, Links
- Internacionalizacao pt/en com toggle de idioma
- Animacoes de pagina com Framer Motion (AnimatePresence)
- Scroll suave via Lenis integrado ao GSAP ScrollTrigger
- Cursor personalizado (CustomCursor)
- Barra de progresso de scroll (ScrollProgress)
- Componentes reutilizaveis: Rating, DirectionalLinkTile, BottomSheet, PageTitle
- Dados de conteudo tipados em TypeScript (bookshelf, games, music, links)
- Template de conteudo (CONTENT_TEMPLATE.txt) para preenchimento personalizado

## Tecnologias

React 19, TypeScript, Vite 8, Tailwind CSS v4, GSAP + ScrollTrigger, Motion (Framer Motion), Lenis, React Router v7

## Pre-requisitos

- Node.js 22+
- pnpm (recomendado) ou npm

## Instalacao

```bash
pnpm install
```

ou

```bash
npm install
```

## Uso

1. Inicie o servidor: `pnpm dev` (ou `npm run dev`)
2. Acesse `http://localhost:3002`
3. Navegue pelas paginas usando o menu lateral
4. Alterne idioma com o toggle no canto superior

O site redireciona automaticamente para `/now` ao acessar a raiz.

## Comandos

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento na porta 3002 |
| `npm run build` | Build de producao (TypeScript + Vite) |
| `npm run preview` | Preview do build de producao |
| `npm run lint` | Lint com ESLint |

## Estrutura

```
nathan-src/
├── index.html                    HTML de entrada
├── CONTENT_TEMPLATE.txt          Template para preenchimento de conteudo
├── src/
│   ├── App.tsx                   Rotas, Lenis, GSAP, layout split-panel
│   ├── main.tsx                  Ponto de entrada React
│   ├── index.css                 Estilos globais (Tailwind)
│   ├── components/
│   │   ├── BottomSheet.tsx            Sheet inferior deslizante
│   │   ├── CustomCursor.tsx           Cursor personalizado
│   │   ├── DirectionalLinkTile.tsx    Tile de link com seta
│   │   ├── LanguageToggle.tsx         Alternancia pt/en
│   │   ├── Nav.tsx                    Navegacao lateral
│   │   ├── PageTitle.tsx              Titulo de pagina com subtitulo
│   │   ├── Rating.tsx                 Componente de avaliacao (estrelas)
│   │   ├── ScrollProgress.tsx         Barra de progresso de scroll
│   │   └── SplitPanelLayout.tsx       Layout de paineis divididos
│   ├── context/
│   │   └── LanguageContext.tsx         Provider de i18n (pt/en)
│   ├── data/
│   │   ├── bookshelf.ts              Dados de livros
│   │   ├── games.ts                  Dados de jogos
│   │   ├── i18n.ts                   Traducoes completas pt/en
│   │   ├── links.ts                  Links recomendados
│   │   ├── music.ts                  Dados de albuns e generos
│   │   └── site.ts                   Configuracoes do site e menu
│   └── pages/
│       ├── Now.tsx                   Pagina "o que estou fazendo agora"
│       ├── About.tsx                 Sobre o autor
│       ├── Bookshelf.tsx             Estante de livros
│       ├── Games.tsx                 Jogos
│       ├── Music.tsx                 Musica e albuns
│       ├── Setup.tsx                 Setup de trabalho
│       ├── Gallery.tsx               Galeria de imagens
│       ├── Blog.tsx                  Blog (em breve)
│       ├── Links.tsx                 Links recomendados
│       └── NotFound.tsx              Pagina 404
└── vite.config.ts               Configuracao Vite (base: /nathan/)
```

## Arquitetura

O Nathan segue uma arquitetura de SPA com layout fixo de paineis:

- **SplitPanelLayout:** Divide a tela em nav (esquerda, fixa) e conteudo (direita, scrollavel). A navegacao persiste entre rotas.
- **App.tsx:** Orquestra o roteamento (React Router), inicializa o Lenis para scroll suave, integra o GSAP ScrollTrigger, e envolve as transicoes de pagina com AnimatePresence.
- **LanguageContext:** Provider que gerencia o idioma atual (pt/en). Todos os textos das paginas acessam traducoes via hook `useLanguage()`.
- **Data layer:** Cada pagina consome dados tipados de `src/data/`. O conteudo de livros, jogos, musica e links e definido em arquivos TypeScript dedicados.

Fluxo de dados: `Rotas (React Router) -> SplitPanelLayout -> Pagina (dados de src/data/) -> i18n (LanguageContext)`.

## Configuracao

| Arquivo | Descricao |
|---------|-----------|
| `src/data/site.ts` | Nome do site, email, URLs de GitHub e LinkedIn |
| `src/data/i18n.ts` | Todas as traducoes pt/en das paginas |
| `vite.config.ts` | Base path (`/nathan/`) e plugins |
| `CONTENT_TEMPLATE.txt` | Instrucoes para preencher conteudo pessoal |

Nao ha variaveis de ambiente ou backend. O site e inteiramente estatico.

## Testes

O projeto nao possui suíte de testes automatizados no momento.

## Troubleshooting

| Problema | Solucao |
|----------|---------|
| Pagina em branco apos deploy | Verifique se `base` em `vite.config.ts` corresponde ao path do deploy |
| Animacoes nao disparam | O GSAP ScrollTrigger sincroniza com o Lenis; verifique se o JavaScript carregou completamente |
| Idioma nao alterna | Limpe o localStorage e recarregue |
| Layout quebrado em mobile | O split-panel adapta-se; se persistir, verifique se o Tailwind esta processando as classes |

## Contribuindo

1. Fork o repositorio em [github.com/xAngryBadger/nathan-src](https://github.com/xAngryBadger/nathan-src)
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit: `git commit -m "Adiciona minha-feature"`
4. Push: `git push origin minha-feature`
5. Abra um Pull Request

## Licenca

MIT

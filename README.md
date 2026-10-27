# maycon.vercel.app

Site pessoal de Maycon Pereira dos Santos, Engenheiro de Software Full Stack. O visual é uma área de trabalho no estilo do macOS, com janelas, terminal e Dock. As decisões de design estão em [`DESIGN.md`](DESIGN.md).

## Stack

- Next.js 16 (App Router, geração estática) com TypeScript
- CSS próprio em `src/app/globals.css`, sem framework de estilo
- Fontes Geist e Geist Mono pelo pacote `geist` (servidas pelo próprio site)

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Mesa em português |
| `/en` | Mesa em inglês |
| `/curriculo` | Texto do currículo em HTML, com link para o PDF |
| `/sitemap.xml`, `/robots.txt` | Gerados por `src/app/sitemap.ts` e `src/app/robots.ts` |

## Onde editar

- **Textos:** `src/content/pt.ts` e `src/content/en.ts`
- **Currículo em HTML:** `src/content/resume.ts` (sem telefone). O PDF fica em `public/curriculo-maycon-pereira-dos-santos.pdf`.
- **Vídeos e pôsteres dos projetos:** `public/projects/`
- **Logos das empresas:** `public/logos/`
- **Imagens de compartilhamento:** `src/app/(pt)/opengraph-image.png` e `src/app/(en)/en/opengraph-image.png`

## Comandos

```bash
npm install
npm run dev    # http://localhost:3000
npm run lint
npm run build
```

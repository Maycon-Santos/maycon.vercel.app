# DESIGN.md: site pessoal de Maycon Pereira dos Santos

Registro das decisões de design do novo site. Cada etapa só avança com a aprovação do Maycon.
A fonte de verdade dos fatos de carreira é o `AGENTS.md` do repositório `Maycon-Santos/curriculo`.

## Etapa 0: decisões gerais

| Tema | Decisão |
|---|---|
| Nome de exibição | Maycon Pereira dos Santos |
| Idiomas | Português do Brasil e inglês |
| Currículo para baixar | PDF da versão ATS, **com** telefone. A versão em inglês do site aponta para o mesmo PDF em português. |
| Domínio | `maycon.vercel.app` |
| Projetos | Jogo da Cobrinha e os projetos da agência: jornada 2D, quiz para TV touchscreen, simulador de esmaltes e infográfico de saneamento |
| Clientes da agência | Os projetos aparecem **sem o nome do cliente** no texto e no SEO. Os vídeos podem mostrar a marca. |
| Enquadramento dos projetos | Os projetos são trabalhos anteriores às ferramentas de IA para programação. A ideia é mostrar conhecimento técnico de base, não competir com projetos atuais. O texto diz isso como fato, sem se desculpar. Fica como subtítulo na barra de título da janela Projetos: "feitos antes das ferramentas de IA para programação". |
| Busca de vagas | **O site não diz que o Maycon está aberto a vagas** (decisão de 27/10/2026, para não chegar à gerência atual). A janela Sobre não tem selo de disponibilidade. **Exceção pedida pelo Maycon:** o terminal mantém `echo $DISPONIBILIDADE` → "Vagas remotas ou híbridas em São Paulo" (o Maycon foi avisado de que a linha é pública e indexável). |
| Contato | E-mail, LinkedIn e GitHub. Sem WhatsApp, endereço, data de nascimento nem CPF. |
| Tema | Segue o sistema de quem visita (claro ou escuro) |
| Foto | Sem foto por enquanto. Os avatares do site antigo têm só 125 px. |
| Design System | Não aparece como projeto (decisão de 27/10/2026). Continua citado na apresentação e na experiência da Paag. |

## Etapa 1: direção escolhida

**Área de trabalho no estilo macOS.** O site é uma mesa com barra de menus, janelas que se arrastam, terminal, ícones na mesa e Dock.

Amostra aprovada: https://claude.ai/artifact/3HR3KoquZMKdwrHZVSWe5G

### Princípios
- **Lembrar o macOS, sem usar a marca da Apple.** Sem o logo da Apple e sem ícones copiados. Os ícones são desenhos próprios. A barra de menus começa com "Maycon".
- **O conteúdo é HTML de verdade.** As janelas são `section` com título; tudo fica legível para leitores de tela e para o Google, mesmo com a janela fechada.
- **O recrutador vê quem é o Maycon nos primeiros segundos.** A janela com nome, cargo, resumo e contato fica à frente na abertura.
- **Interações com propósito.** Janelas arrastáveis; botões vermelho, amarelo e verde funcionam; terminal com comandos; Dock com ampliação; visualizador de vídeo.
- **Acessibilidade.** Foco visível, navegação por teclado (abas da Experiência com setas), `prefers-reduced-motion` desliga as animações e o autoplay.
- **Celular.** Abaixo de 900 px (ou de 600 px de altura) não há janelas livres. A estrutura do celular é decidida na Etapa 2.1.

### Base visual da amostra (pode mudar no refinamento)
- **Fonte da interface:** pilha do sistema (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`). No Mac, aparece a SF Pro.
- **Fonte do terminal:** `SF Mono`, com `JetBrains Mono` como alternativa.
- **Janelas:** translúcidas com desfoque, raio de 12 px, sombra longa e barra de título de 38 px.
- **Cor de seleção:** azul do sistema (`#0A64D8` no claro, `#2E7BEA` no escuro).
- **Papel de parede:** degradê suave próprio (azul, rosa e verde no claro; azul-marinho, ameixa e verde-petróleo no escuro).

### Vídeos dos projetos
- **Origem:** `public/assets/videos/projects/*/video.mp4` do site antigo, os mesmos arquivos do Google Drive. Têm de 55 s a 7 min e de 19 a 61 MB cada.
- **Na amostra:** trechos de 14 s, sem áudio, em H.264 com 960 px, cerca de 1,3 MB no total, mais um pôster JPG para cada vídeo.
- **No site final:** a definir (trecho curto ou vídeo completo comprimido).

### Direções recusadas (para não repetir)
- **Rodada 1** (changelog, especificação de Design System, linha de metrô, índice suíço): conceito forçado, fria e técnica demais, cores e fontes sem graça, aparência genérica.
- **Rodada 2** (cartaz amarelo, campo de stack interativo, arena de esports, capa de revista rosa): infantilizada e escrachada.
- **Rodada 3** (estúdio em preto e branco: monumental, editorial, painéis): superada pela ideia da área de trabalho.

## Etapa 2: refinamento

| # | Decisão | Status |
|---|---|---|
| 1 | Estrutura do hero e da navegação | **Decidido:** Variação 1 (ver abaixo) |
| 2 | Tipografia (par de fontes e escala) | **Decidido:** Geist e Geist Mono |
| 3 | Cor e temas claro e escuro | **Decidido:** Entardecer |
| 4 | Ordem e densidade das seções | **Decidido:** Seções 1 (como está) |
| 5 | Componentes de detalhe (linha do tempo, cards de projeto) | **Decidido:** Lista e Finder |
| 6 | Movimento e microinterações | **Decidido:** Sutil |

### 2.1 Estrutura do hero e da navegação: Variação 1, "mesa cheia"

Amostra: https://claude.ai/artifact/3HR3KoquZMKdwrHZVSWe5G

- **Computador (a partir de 900 px de largura e 600 px de altura):** abrem quatro janelas, com Sobre à frente, Experiência, Projetos e Terminal. A navegação é feita pela barra de menus (Sobre, Experiência, Projetos, Terminal, Contato, Currículo), pelos ícones da mesa (Projetos, Currículo.pdf, Terminal) e pelo Dock.
- **Celular:** as janelas viram folhas empilhadas na rolagem, na ordem Sobre, Experiência, Projetos, Terminal e Contato. O Dock fica fixo embaixo, como navegação. O Currículo e o visualizador de vídeo abrem como folhas sobrepostas, que fecham pelo botão vermelho.
- **Apresentação (janela Sobre):** nome, cargo e resumo de domínios, mais os botões de currículo, contato, LinkedIn e GitHub. A frase sobre o Design System **saiu** da apresentação. Ela continua na experiência da Paag e no currículo.
- **Currículo para SEO:** o ícone Currículo.pdf abre uma janela de pré-visualização com o texto completo do currículo ATS em HTML, mais o botão "Baixar PDF". O telefone fica **fora** do HTML (o PDF segue com telefone).
  - Proposta para a Etapa 4: renderizar esse texto no HTML estático da página, mesmo com a janela fechada, e avaliar também uma rota própria (`/curriculo`) para indexação.
- **Projetos:** sem o Design System. A barra de título tem o subtítulo "feitos antes das ferramentas de IA para programação".
- **Janelas redimensionáveis:** pelas quatro bordas e pelos quatro cantos, com mínimo de 320 × 180 px. A janela Sobre tem altura automática, igual ao conteúdo.
- **Logos das empresas na Experiência** (pedido de 27/10/2026): quadrado de 28 px ao lado do nome na lista e de 44 px no topo do detalhe. Por enquanto aparecem as iniciais; os arquivos dos logos dependem do Maycon. O Freelance não tem logo.
- **Variações recusadas:** 2 (janela única no computador e tela inicial de apps no celular) e 3 (terminal como apresentação).

### 2.2 Tipografia: Geist e Geist Mono

Amostra: https://claude.ai/artifact/S5ckDNytr5j6ZhQMNrvmur

- **Interface e textos:** Geist (400, 500, 600, 700 e 800). É a mesma fonte em todos os sistemas e fica próxima da SF Pro.
- **Terminal e código:** Geist Mono (400 e 600).
- **Nome na janela Sobre:** Geist 800, `clamp(34px, 3.8vw, 50px)`, espaçamento de letras `-0.04em` e altura de linha 0.98.
- **Títulos de janela:** 13 px, peso 600. Texto corrido: 14 a 15 px. Rótulos e metadados: 11 a 12,5 px.
- **No Next.js:** carregar com `next/font` (Geist e Geist Mono), sem pedir fontes ao Google em tempo de execução.
- **Variações recusadas:** fontes do sistema (mudam conforme o aparelho) e Hanken Grotesk com Instrument Serif.

## Requisitos de indexação (SEO)

O visual de área de trabalho não pode esconder o conteúdo dos buscadores. Regras para a Etapa 4:

1. **Todo o conteúdo sai pronto no HTML estático** (Next.js com geração estática). Apresentação, as 6 experiências, os projetos com descrição, o contato e o texto do currículo são renderizados no servidor. Nada de conteúdo criado só por JavaScript no navegador, como os cards de projeto e a pré-visualização do currículo da amostra.
2. **As janelas só mudam a apresentação.** Abrir, fechar, arrastar e redimensionar mexem em classes e estilos; o texto continua no DOM.
3. **A versão de celular mostra todo o conteúdo na rolagem.** O Google indexa pela versão móvel (mobile-first indexing), e nela as janelas viram folhas empilhadas e visíveis.
4. **O currículo tem uma rota própria, `/curriculo`**, com o texto completo visível, em HTML semântico. A janela Currículo.pdf da mesa mostra o mesmo conteúdo.
5. **HTML semântico:** um único `h1` (o nome), `h2` nos títulos das janelas e seções, listas reais e links reais (`<a href>`) para LinkedIn, GitHub e o PDF.
6. **Metadados:** `title` e `description` com "Maycon Pereira dos Santos" e "Engenheiro de Software Full Stack"; URL canônica; Open Graph e Twitter Card com imagem própria; `lang="pt-BR"`.
7. **Versão em inglês:** rota `/en` (e `/en/resume`), com `hreflang` entre as duas línguas.
8. **`sitemap.xml` e `robots.txt`** gerados pelo Next.js (`app/sitemap.ts` e `app/robots.ts`), liberando a indexação.
9. **Dados estruturados:** JSON-LD `Person` com nome, cargo, e-mail, localização (São Paulo, SP) e `sameAs` para o LinkedIn e o GitHub. Avaliar `VideoObject` para os vídeos dos projetos.
10. **Vídeos:** `<video>` com `poster`, sem autoplay com som, e descrição do projeto em texto ao lado.
11. **Desempenho:** a primeira tela carrega sem esperar os vídeos (`preload="none"` ou `metadata`), as fontes vêm do `next/font`, e as imagens têm tamanho fixo para evitar CLS.
12. **Verificação na Etapa 4:** conferir o HTML gerado no build (o texto precisa aparecer sem JavaScript), rodar o Lighthouse (SEO, acessibilidade e desempenho) e validar o JSON-LD.

### 2.3 Cor e temas: Entardecer

Amostra: https://claude.ai/artifact/XVi9riWDdwb5qV3hNiKYTm

O tema segue o sistema de quem visita. Os tokens abaixo são os da amostra; os demais (janelas, barras, texto, linhas, terminal) seguem iguais aos da amostra base.

| Token | Claro | Escuro |
|---|---|---|
| Papel de parede A | `#FFD3AE` (pêssego) | `#2A1D57` (índigo profundo) |
| Papel de parede B | `#F2A1A6` (coral) | `#5A2944` (vinho) |
| Papel de parede C | `#A7A4F0` (índigo claro) | `#110E2A` (quase preto azulado) |
| Seleção e botão principal | `#5856D6` com texto branco (5,65:1) | `#5E5CE6` com texto branco (5,06:1) |
| Janela | `rgba(250,250,252,.88)` com desfoque | `rgba(36,36,40,.86)` com desfoque |
| Texto | `#1C1C1E` | `#F2F2F5` |
| Texto secundário | `#5F5F66` | `#A5A5AE` |

- **Variações recusadas:** Céu (azul) e Grafite (neutro).
- **Botão "Aparência"** na barra de menus: **fica no site final**. Alterna entre sistema, claro e escuro.

### 2.4 Ordem e densidade: Seções 1

Amostra: https://claude.ai/artifact/8rxuqS2mJyMPZPC9SBXPUe

- **Computador:** abrem Sobre, Experiência, Projetos e Terminal. Contato e Currículo abrem pela barra de menus, pelo Dock ou pelos ícones da mesa.
- **Celular:** Sobre → Experiência → Projetos → Terminal → Contato, empilhadas na rolagem.
- **Densidade:** Experiência com até 4 tópicos por empresa, mais as tags de tecnologia. A stack aparece no terminal (`cat stack.txt`) e nas tags; não há janela Stack.
- **Variações recusadas:** enxuta (Projetos em destaque, 2 tópicos por empresa) e com janela Stack.

### 2.5 Componentes de detalhe: Lista e Finder

Amostra: https://claude.ai/artifact/5uKzByuQe3ixZddz2CLqnY

- **Experiência:** lista lateral com logo (28 px), empresa e período; o detalhe ao lado tem logo (44 px), cargo, empresa, cidade, datas, até 4 tópicos e tags. Navegação por clique e pelas setas do teclado.
- **Projetos:** ícones com miniatura (16:10), nome do arquivo e "Vídeo, 14 s", como no Finder. O vídeo abre numa janela de visualização com título e descrição.
- **Logos das empresas:** enviados pelo Maycon em 27/10/2026 (JPG de 100 × 100 px): Omelete & Co, Paag, Firjan, Hurb e Codezone. Ficam com fundo branco, `object-fit: cover` e o mesmo raio do quadrado. O Freelance não tem logo e mostra "FL". Na Etapa 4, se possível, trocar por versões maiores (pelo menos 128 px) ou SVG.
- **Variações recusadas:** linha do tempo com galeria; lista no estilo do Mail com lista do Finder.

### Fatos confirmados nesta etapa
- **Jogo da Cobrinha:** primeiro commit em 18/06/2018; 61 dos 65 commits são de 2018 (os demais são ajustes de build e documentação em 2019, 2021 e 2023). O subtítulo "feitos antes das ferramentas de IA para programação" vale para todos os projetos.
- **`DESIGN.md`:** fica só no disco e entra no PR da Etapa 4.

### 2.6 Movimento e microinterações: Sutil

Amostra final da Etapa 2 (com logos): https://claude.ai/artifact/NqPtqXo7aoU4PTbGuD6yx4

- **Janelas:** abrir e minimizar com transição de opacidade e escala (180 a 220 ms, `cubic-bezier(.2,.8,.2,1)`). Arrastar pela barra de título, redimensionar pelas bordas e cantos, duplo clique na barra para ampliar.
- **Dock:** ampliação no hover (ícone 1,35×, vizinhos 1,14×), dica com o nome e ponto embaixo dos apps abertos.
- **Terminal:** digita a apresentação uma vez ao carregar (45 ms por caractere) e depois aceita comandos.
- **Links:** sublinhado que aparece no hover; botões clareiam levemente.
- **`prefers-reduced-motion`:** sem transições, sem ampliação no Dock, sem digitação e sem autoplay de vídeo.
- **Variações recusadas:** fiel ao macOS (janela nascendo do Dock, entrada em sequência) e discreto.

## Etapa 2: concluída em 27/10/2026

## Etapa 3: textos

Página de revisão: https://claude.ai/artifact/3Dqx7tqn3ra9hK1RpBPK18

- **Origem dos projetos da agência:** o site não informa (decisão do Maycon). Nenhum projeto diz se foi da Codezone ou de freelance.
- **Tecnologias por projeto:** não entram (o Maycon não tem essa informação).
- **PDF do currículo:** em português nas duas versões do site.
- **Aprovação dos textos:** seções 1 a 9 aprovadas em 27/10/2026.
- **Currículo na versão em inglês:** sem tradução. A janela Resume.pdf mostra o texto em português, com o aviso "Resume in Portuguese", e não há rota `/en/resume`.

## Etapa 4: implementação

- **Stack:** Next.js 16.4 (App Router, Cache Components, todas as rotas estáticas), React 19.3, TypeScript, CSS próprio. Fontes pelo pacote `geist` (`next/font/local`).
- **Rotas:** `/` (pt-BR), `/en` (en), `/curriculo`, `/sitemap.xml`, `/robots.txt` e uma página 404 global (`global-not-found.tsx`). Cada idioma tem o próprio layout raiz, para o `<html lang>` correto.
- **Janelas:** a posição inicial vem do CSS (frações da mesa), então a página não muda de lugar ao carregar (sem CLS). O JavaScript só entra para arrastar, redimensionar, abrir, fechar, minimizar e ampliar.
- **Vídeos:** os trechos de 14 s da amostra, carregados só quando o visualizador abre (`preload="metadata"`, sem autoplay com movimento reduzido).
- **PDF do currículo:** gerado a partir do `curriculo-ats.html` (com telefone), em A4, com 4 páginas.
- **Imagens de compartilhamento:** capturas da própria mesa com a janela Sobre, em 1200 × 630 px.

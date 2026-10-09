# 🌻 NA FEIRA BAR — Site Institucional
### Documento de handoff · Versão "OPÇÃO A" (base aprovada pelo cliente)

> **Para o agente que vai continuar o projeto:** leia este arquivo inteiro ANTES de editar qualquer coisa.
> Ele descreve a solicitação original, o que já foi construído, os parâmetros de design/stack e exatamente
> onde mexer em cada coisa. O refinamento deve ser feito **sobre esta base (opção A)**, sem reinventar a estrutura.

---

## 1. Contexto e solicitação original

O cliente está criando um site **para vender ao Na Feira Bar**, um bar famoso em **Curitiba (PR)** pelas
apresentações de samba ao vivo.

**Conceito-chave do bar:** o nome "Na Feira" vem do fato de ele ser **decorado e ambientado como uma
barraca de pastel de feira numa vila** (paredes coloridas pintadas à mão, teto forrado com bandeirinhas/
panos, viela com postes de luz, caixotes). No centro do bar fica um **mini coreto — um palco redondo —
com a imagem/estátua do Zé Pilintra** (figura em terno branco e chapéu, de pé ao lado de um poste).

**O pedido foi:**
1. Site **com efeitos, contemporâneo, dinâmico, mobile first e responsivo**;
2. **Apresentar o bar** (história/ambiente/conceito da feira);
3. **Cards com a agenda da semana que ficam passando automaticamente para o lado** (carrossel/marquee infinito);
4. **Seção dedicada ao cardápio**;
5. **Seção com os depoimentos públicos dos frequentadores que avaliaram no Google**
   (link de busca fornecido: `https://www.google.com/search?q=nafeira+bar+curitiba`).

**Dados oficiais do Instagram** (`@nafeira.bar`):
- "Na Feira Bar · Barraca de comida"
- "🌻 O bar mais feira da cidade"
- "🍻 Pastel de feira e cerveja gelada"
- 📍 Al. Princesa Izabel, 465 — Mercês, Curitiba
- 23 mil seguidores · 256 posts

O cliente enviou imagens de referência: artes do Instagram (paleta amarelo/laranja/vermelho sobre creme,
estrelas/sóis de raios, tipografia arredondada bold), a logo (sol amarelo de raios + "Na FEiRA BAR" em
laranja/vermelho), fotos do interior (teto de bandeirinhas, paredes coloridas, estátua do Zé Pilintra com
poste) e da fachada lotada à noite.

**Decisão do cliente:** "Vamos seguir somente com a **opção A**" → esta versão entregue é a única base
de trabalho. Nenhum conteúdo dela deve ser descartado sem pedido explícito.

---

## 2. Stack técnica (parâmetros de construção)

| Item | Detalhe |
|---|---|
| Framework | **React 19 + TypeScript** |
| Build | **Vite 7** + `vite-plugin-singlefile` → `npm run build` gera **um único `dist/index.html`** com JS/CSS inline |
| CSS | **Tailwind CSS v4** — ⚠️ **não existe `tailwind.config.js`**; o tema (cores/fontes) é definido com a diretiva `@theme` no topo de `src/index.css` |
| Fontes | Google Fonts via `<link>` no `index.html`: **Luckiest Guy** (títulos display), **Fredoka** (logo), **Nunito** (corpo) |
| Estado/libs | Apenas hooks do React (useState/useEffect) + IntersectionObserver. **Nenhuma lib de animação** — tudo em CSS puro (keyframes). Manter assim; não adicionar framer-motion etc. sem pedido |
| Imagens | 4 fotos em `public/images/` (geradas por IA como ambientação — **substituir pelas fotos reais** quando o cliente fornecer) |

**Nunca editar:** `package.json` e `vite.config.ts` manualmente (instalar dependências sempre via npm).

---

## 3. Identidade visual (parâmetros de design)

### 3.1 Paleta — tokens no `@theme` de `src/index.css`
| Token (Tailwind: `bg-feira-*`) | Hex | Uso principal |
|---|---|---|
| `--color-feira-yellow` | `#f9b000` | CTAs secundários, detalhes |
| `--color-feira-gold` | `#f6c518` | amarelo-sol do logo/raios, palavras destacadas sobre fundo escuro |
| `--color-feira-orange` | `#f05a22` | laranja da palavra "FEiRA", seção "Visite" |
| `--color-feira-red` | `#e52521` | vermelho principal: botões, títulos grandes |
| `--color-feira-blue` | `#1f6fd6` | azul: seção do cardápio, chips, variações |
| `--color-feira-cream` | `#fbf3e2` | fundo claro (creme/papel de feira) |
| `--color-feira-ink` | `#2a1a10` | texto escuro e fundos "noturnos" (hero, agenda, footer) |

**Ritmo de cores das seções:** creme → creme → **ink** → **azul** → creme → **laranja** → **ink (footer)**.
Alternar claro/escuro para dar energia. Títulos grandes sempre em **Luckiest Guy**, com uma palavra
destacada em outra cor (ex.: "Agenda da **semana**" em gold sobre fundo escuro).

### 3.2 Tipografia
- **Títulos de seção:** `Luckiest Guy` aplicado via `style={{ fontFamily: "Luckiest Guy, cursive" }}` (não há utilitário dedicado — seguir o mesmo padrão).
- **Logo:** `Fredoka` bold — **recriado em código** (`components/Logo.tsx` + `components/Sunburst.tsx`), não é imagem. "Na" pequeno em laranja, "FEiRA" grande em vermelho sobre sol amarelo, "BAR" pequeno espaçado.
- **Corpo:** `Nunito` (font-family global no `body`, via token `--font-body`).

### 3.3 Motivos visuais (reaproveitar em novas seções)
- **Sol de raios (sunburst)** — `Sunburst.tsx` (polígono SVG de raios), frequentemente girando (`animate-spin-slow` / `animate-spin-slower`);
- **Papel rasgado** — classe `.torn-top` (SVG mask em `src/index.css`) nas transições entre seções;
- **Listras de barraca** — `repeating-linear-gradient` inline (usado em `Agenda.tsx` e `Footer.tsx`);
- **Varal de luzinhas** — hero, bolinhas coloridas com `box-shadow` de glow + `animate-sway`;
- Cantos muito arredondados (`rounded-3xl`, `rounded-[2rem]`), sombras coloridas (`shadow-feira-red/30`),
  chips arredondados com texto em MAIÚSCULAS e `tracking-[0.2em]`.

---

## 4. Estrutura de arquivos

```
├── index.html                  → título, meta description, <link> das fontes
├── LEIA-ME.md                  → este documento
├── src/
│   ├── main.tsx                → bootstrap do React
│   ├── App.tsx                 → composição das seções + chama useReveal() uma vez
│   ├── index.css               → @theme (tokens) + keyframes + utilitários (.reveal, .torn-top, marquees)
│   ├── data.ts                 → ⭐ TODOS os dados editáveis: agenda, cardápio, depoimentos
│   ├── utils/cn.ts             → helper clsx/tailwind-merge (existente, pode ficar)
│   ├── hooks/useReveal.ts      → reveal-on-scroll (IntersectionObserver)
│   └── components/
│       ├── Navbar.tsx          → menu fixo (transparente → creme ao rolar) + menu mobile
│       ├── Hero.tsx            → capa em tela cheia (#top)
│       ├── About.tsx           → "O Bar" (#sobre): vila, coreto, 4 cards de fatos
│       ├── Agenda.tsx          → marquee infinito da agenda (#agenda)
│       ├── Menu.tsx            → cardápio com tabs (#cardapio)
│       ├── Reviews.tsx         → depoimentos em marquee reverso (#avaliacoes)
│       ├── Footer.tsx          → "Visite" (#visite: mapa, horários, CTAs) + rodapé
│       ├── Logo.tsx            → logo em SVG (usa Sunburst)
│       └── Sunburst.tsx        → sol de raios SVG reutilizável
└── public/images/
    ├── hero.jpg                → capa (noite, multidão, luzes)
    ├── interior.jpg            → interior com teto de bandeirinhas
    ├── ze-pilintra.jpg         → estátua do Zé Pilintra com o poste
    ├── pastel.jpg              → pastéis + cerveja
    └── logo.png                → LOGO OFICIAL (fundo transparente; usada na Navbar e no Hero)
```

---

## 5. Seções do site (ordem de rolagem)

1. **Navbar** — fixa; transparente sobre o hero, vira creme + blur + sombra após 24px de scroll;
   CTA "Reservar mesa" aponta para o Instagram.
2. **Hero** (`#top`) — foto de fundo com gradiente escuro, varal de luzes balançando, sóis girando,
   badge "🌻 O bar mais feira da cidade", headline `PASTEL, CERVEJA & MUITO SAMBA`,
   CTAs para `#agenda` / `#cardapio`, selos (4,8 Google · 23 mil Instagram · Mercês) e transição de papel rasgado.
3. **O Bar** (`#sobre`) — texto do conceito, 2 fotos com legenda (A vila / O coreto do Zé Pilintra)
   e 4 cards de fatos: Virou feira · Samba no coreto · Zé Pilintra · Pastel de verdade.
4. **Agenda** (`#agenda`) — fundo `ink` com listras, **marquee infinito horizontal** (`.animate-marquee`,
   42s, **pausa no hover**, scrollável/arrastável no mobile) com 6 cards coloridos: dia, data, artista,
   gênero, horário e tag.
5. **Cardápio** (`#cardapio`) — fundo azul, **tabs** (🥟 Pastéis / 🍟 Pra Beliscar / 🍺 Pra Beber)
   com lista nome–descrição–preço + foto do pastel "🔥 Mais pedido".
6. **Avaliações** (`#avaliacoes`) — selo grande "4,8 ★ Google", **marquee reverso** (`.animate-marquee-rev`,
   50s) com 6 depoimentos (avatar com iniciais coloridas + logo Google), botão "Ver todas no Google".
7. **Visite** (`#visite`) — fundo laranja listrado: endereço, horários, botões Instagram/Mapa,
   **mapa Google embed** (iframe `output=embed`, sem API key).
8. **Rodapé** — fundo ink, logo grande, links-âncora, copyright + link discreto para a página de exportação.

---

## 6. Efeitos e animações (onde cada um vive)

| Efeito | Onde | Como funciona |
|---|---|---|
| Marquee da agenda | `Agenda.tsx` + `.animate-marquee` (css) | Array duplicado `[...agenda, ...agenda]` em flex `w-max`, keyframes traduz `-50%` em 42s; `animation-play-state: paused` no hover (`.marquee-pause`) |
| Marquee reverso (depoimentos) | `Reviews.tsx` + `.animate-marquee-rev` | idem, direção inversa, 50s |
| Reveal on scroll | `hooks/useReveal.ts` + `.reveal` (css) | IntersectionObserver (threshold 0.12) adiciona `.is-visible`; **basta dar classe `.reveal` a qualquer elemento novo** — já cobre o documento inteiro no load |
| Luzes do varal | `Hero.tsx` + `.animate-sway` | flex de bolinhas coloridas com delays escalonados |
| Sóis girando | `Sunburst` + `.animate-spin-slow/slower` | rotação 40s/70s, um no sentido inverso |
| Flutuação | badge do hero + `.animate-bob` | translateY + leve rotação, 5s |
| Papel rasgado | `.torn-top` (css, SVG data-URI como mask) | transição irregular entre hero e seção seguinte |
| Hover de cards | inline (Tailwind) | `hover:-translate-y-*`, `hover:scale-105`, sombras |

Keyframes: `feira-marquee`, `feira-marquee-rev`, `feira-bob`, `feira-spin`, `feira-sway` — todos em `src/index.css`.

---

## 7. ⚠️ Conteúdo REAL vs. ILUSTRATIVO (muito importante)

**Real (vem do cliente/Instagram, manter):**
- Nome, slogans ("O bar mais feira da cidade", "Pastel de feira e cerveja gelada"), endereço, `@nafeira.bar`;
- "23 mil seguidores";
- Show **Adriano Rosa — "Sabadou em dobro", 26/09, 19h30–23h30** (veio da arte do Instagram enviada).

**Ilustrativo — SUBSTITUIR com o estabelecimento quando houver dados:**
- `src/data.ts` → os **outros 5 shows da agenda** (exemplos criados), **itens e preços do cardápio** (exemplos),
  **os 6 depoimentos** (o link do Google foi fornecido, mas as avaliações reais **não puderam ser
  extraídas programaticamente** — copiar textos/nomes reais do Google) e a nota exata (usada "4,8" como exemplo);
- `Footer.tsx` → **horários de funcionamento** (estimados: ter–sex 18h–00h, sex/sáb 16h–02h, dom 13h–22h, seg fechado);
- `public/images/*.jpg` → **substituir pelas fotos reais do bar** quando disponíveis.
  Referências usadas no código: `Hero.tsx` (hero.jpg), `About.tsx` (interior.jpg e ze-pilintra.jpg), `Menu.tsx` (pastel.jpg).

---

## 8. Links externos (já estão no site)

- Instagram: `https://instagram.com/nafeira.bar` (CTAs de reserva)
- Avaliações: `https://www.google.com/search?q=nafeira+bar+curitiba`
- Mapa: `https://www.google.com/maps?q=Alameda+Princesa+Izabel+465+Merc%C3%AAs+Curitiba&output=embed`

---

## 9. Como rodar

```bash
npm install
npm run dev      # desenvolvimento (hot reload)
npm run build    # produção → dist/index.html único (self-contained)
```

---

## 10. Sugerido para os próximos refinamentos (NÃO implementado)

- Trocar agenda, cardápio e depoimentos pelos **dados reais** (seção 7);
- Trocar as 4 imagens por **fotos reais** do bar (manter nomes ou ajustar os `src`);
- Formulário de reserva com **WhatsApp** (hoje o CTA vai só para o Instagram);
- **Galeria de fotos reais** na seção "O Bar";
- SEO: favicon, Open Graph (og:image etc.) e title por seção;
- Se o cliente quiser "mais efeitos": partículas/confetes, áudio ambiente de samba, parallax no hero,
  cursor customizado, animações no logo — tudo em CSS/JS puro, sem novas libs (manter o padrão do projeto).

---

## Changelog de edições (cliente)

**Edição 1 (08/10/2026):**
- Navbar: logo oficial (`public/images/logo.png`) no lugar da logo em código; removido o texto "Curitiba";
  removido o botão "Reservar mesa" (desktop e menu mobile); link "Visite" renomeado para "Localização" (âncora `#visite` mantida);
- Hero: removida a barrinha "🌻 O bar mais feira da cidade"; headline substituída pela logo oficial com
  borda branca estilo adesivo (`.logo-sticker`), efeito **zoom-in ao carregar** (`.animate-zoom-in`, keyframe
  `feira-zoom-in`) e balanço flutuante contínuo (`.animate-bob`, o mesmo da antiga barrinha);
  "Pastel, cerveja & muito samba" voltou como `<h1>` abaixo da logo, em tamanho menor (2xl→4xl);
- `Logo.tsx` (logo em código) agora é usado apenas no rodapé — Avaliar substituição futura pela logo oficial.

**Edição 2 (08/10/2026):**
- Hero: borda da logo mudou de branca para **amarela fina** (`.logo-sticker` atualizado, `#f9b000` + sombra suave);
  parágrafo substituído por "Por aqui não tem tempo ruim pra receber a freguesia. Faça chuva ou faça sol,
  *estamos sempre de portas abertas e com a cervejinha gelada*" (trecho final em negrito-itálico);
- O Bar (`About.tsx`): removido o chip "Bem-vindo à vila"; título agora é "O bar mais **feira** da cidade"
  ("feira" em laranja); parágrafo novo (ambiente seguro, cadeirinhas de praia etc.);
- Fotos da seção substituídas: `public/images/entrada.jpg` (feirab5 — fachada lotada; legendas "Entrada" /
  "A Feira começa aqui") e `public/images/ambiente.jpg` (feirab1 — viela colorida; legendas "Ambiente" /
  "A de coração mais linda da cidade"). As antigas `interior.jpg` e `ze-pilintra.jpg` deixaram de ser
  referenciadas mas continuam em `public/images` (uso futuro);
- Cards de fatos: sem emojis, títulos em **laranja** ("Na Feira" · "A música" · "O Palco" · "Pastel de verdade")
  com os novos textos fornecidos pelo cliente.

**Edição 3 (08/10/2026):**
- Agenda (`data.ts` + `Agenda.tsx`): programação real fornecida — 09/10 Samba do Cassin (Samba Raiz, 19h),
  10/10 Serena Flor (Samba, 19h), 11/10 Inimigos do Fim (Samba, 19h), 12/10 Edson Cigano & Pagode dos
  Amigos (Dose Dupla, 16h às 19h, com observação "vocalista do Pique Novo" no novo campo opcional `desc`);
- **Marquee substituído por carrossel**: exibe 1 card por vez; avança automaticamente a cada 3s sincronizado
  com uma **barra de progresso** entre dois botões (← anterior / → próximo, keyframe `feira-progress`,
  classe `.animate-progress`, reiniciada via `key={index}` + `onAnimationEnd`);
- **Arraste por mouse e toque** (Pointer Events + `setPointerCapture`, `touch-pan-y`, threshold de 60px);
  pausa automática no hover do mouse (não trava no toque); loop infinito entre os 4 cards;
- Subtítulo da seção trocado para "Confira nossa agenda de shows. Role pro lado ou deixe passar — a festa não para."

**Edição 4 (08/10/2026):**
- Carrossel da agenda agora é **center-mode**: todos os cards ficam visíveis, o ativo para centralizado
  (escala 100%) e os vizinhos aparecem esmaecidos ao fundo (opacidade 45%, scale 0.92);
- **Loop infinito real**: trilha tripla `[...agenda, ...agenda, ...agenda]` com reposicionamento silencioso
  para a cópia do meio no fim da transição (`onTransitionEnd` + `requestAnimationFrame`);
- Clicar num card lateral leva direto até ele; largura do card responsiva (80% da tela, máx. 400px, via
  ResizeObserver).

**Edição 5 (08/10/2026) — ajustes finais:**
- Cards laterais do carrossel: esmaecimento reduzido ao mínimo (opacidade 0.85, brilho 0.92, escala 0.97);
- "Visite" (`Footer.tsx`): parágrafo trocado para "Chegue cedo, garanta seu lugar que a feira te espera e
  traga os amigos!";
- **Horários reais** (Google), em ordem de dia da semana: Seg Fechado · Ter/Qua/Qui 17h–00h · Sex 17h–01h ·
  Sáb 14h–01h · Dom 14h–21h;
- Rodapé: logo oficial (imagem) no lugar da logo em código; texto trocado para "...samba do bom!";
  link "Baixar projeto (.zip)" REMOVIDO; crédito "Desenvolvido por Daniel Soberanis" em amarelo/negrito
  acima do copyright, linkado para WhatsApp `wa.me/5541984542307`; link "Visite" do rodapé renomeado
  para "Localização";
- Seção "O Bar": botão "📸 Seguir no Instagram · @nafeira.bar" (gradiente laranja→vermelho) após os cards;
- `Logo.tsx` deixou de ser importado em Footer.tsx (não é mais usado em lugar nenhum — manter no projeto
  para eventual uso futuro ou remover antes do deploy).

**Edição 6 (08/10/2026):**
- Hero: fundo substituído pela foto real do São Jorge (`public/images/hero.jpg`, convertida de feira2.png),
  com `objectPosition: 52% 51%` para manter o cavaleiro centralizado em qualquer tela;
- Botão de Instagram ("O Bar"): emoji 📸 substituído pelo glifo oficial do Instagram (SVG inline
  `InstagramIcon` em `About.tsx`, preenchimento branco via `currentColor`);
- Agenda: largura do card agora é exatamente o vão entre os botões ← e → (`min(vw,448) - 48px`), com o
  card parando perfeitamente alinhado acima deles.

**Hotfix alinhamento (08/10/2026):**
- Corrigida a translação do carrossel: a fileira avança pela largura do wrapper (`slide`), que inclui o
  padding `px-2`; antes usava `slide + 16`, acumulando 16px de desvio por card — era o desalinhamento.
  Card visível = `min(vw,448) - 48` (vão exato entre as bordas externas dos botões).

**Hero novo (08/10/2026):**
- Fundo do hero substituído pela foto panorâmica do teto (heronafeira.png, 4000×2250 → otimizada para
  1920×1080 JPEG progressivo, ~450 KB); `objectPosition: 50% 55%` mantém o painel do São Jorge
  (centro da imagem) visível em telas estreitas.

**Divisórias de papel rasgado (08/10/2026) — corrigidas:**
- Novo componente `Torn.tsx` + classes `.torn-divider` / `.torn-divider-fill` (máscaras SVG em duas
  camadas: rasgo profundo com miolo claro `#fff7e8` + rasgo raso colorido — efeito de papel rasgado
  como nas artes do bar);
- Aplicado nas 5 divisões a partir de O Bar→Agenda: Agenda (cor anterior creme), Cardápio (ink),
  Avaliações (azul), Visite (creme), Rodapé (laranja). A divisão Hero→O Bar continua como estava;
- Hotfix: o divisor estava 80px abaixo do topo (empurrado pelo padding da seção, invisível) — agora é
  `absolute top-0` dentro de cada seção, colado no limite; miolo branco; `<footer>` ganhou `relative`;
- **Hotfix 2 (definitivo): a máscara CSS foi gerada sem o prefixo `data:image/svg+xml,` na URI — URL
  inválida fazia o navegador ocultar o divisor (divisão reta). `Torn.tsx` foi reescrito com SVG INLINE
  (dois `<path>`: rasgo profundo branco + rasgo raso colorido), sem depender de máscara CSS; blocos
  `.torn-divider*` removidos do CSS. Efeito VERIFICADO com screenshots reais nas 5 divisões;
- Borda inferior do hero: **REVERTIDA** para o rasgo original `.torn-top` (pedido do cliente reavaliado;
  cliente enviará print com o que deseja na divisão inferior do hero).

**Borda do toldo no hero (08/10/2026):**
- A pedido do cliente (com print): o rasgo irregular do pé do hero foi substituído por `.toldo-edge` —
  **dentes quadrados uniformes** (tile SVG 60×40px, repeat-x: dente de 30×20px a cada 60px), contínuos
  com a foto, do início ao fim da tela, sem perda de forma;
- Efeito verificado com screenshot real (primeira versão da máscara saiu invertida — corrigida).

**Toldo na divisão do hero (08/10/2026):**
- Os dentes quadrados foram substituídos pela **imagem de toldo real** enviada pelo cliente
  (`public/images/toldo.png`): fundo branco e sombra cinza removidos via flood-fill (preservando as
  listras brancas da lona) e imagem achatada sobre fundo creme — sem transparência, evita resíduos
  nos vales entre as ondulações;
- Renderizada como `<img>` absoluta no pé do hero (`h-24/h-28/h-32` responsivo, `object-bottom`),
  com faixa creme atrás (zIndex 9) — continua creme até a seção O Bar; conteúdo do hero ganhou
  `pb-40/sm:pb-44` para nada ficar coberto (verificado em screenshots desktop 1280px e mobile 390px);
- Cardápio: legenda da foto trocada de "Pastel saído da chapa" para **"Pastel frito na hora"**.

**Ajustes mobile (09/10/2026):**
- Hero: "Pastel, cerveja / & muito samba" quebra em 2 linhas só no mobile (`<br className="sm:hidden">`);
- Título do O Bar: "O bar mais feira / da cidade" idem;
- Mosaico: foto da Entrada com `object-position: 50% 30%` (foco no prédio/entrada, não na multidão);
- Footer: botões "@nafeira.bar" e "Como chegar" agora ficam lado a lado no mobile (`flex-1`, texto xs),
  voltando ao tamanho normal (`sm:flex-none sm:text-sm`) no desktop.

**Hero atualizado (09/10/2026):**
- Fundo substituído pela nova foto (heronafeiranovo.png, 1280×720, mesma cena do São Jorge com o
  teto de panos; otimizada ~256 KB); `objectPosition: 50% 50%`.

**Mosaico de fotos no "O Bar" (09/10/2026):**
- As 2 fotos gigantes viraram um **mosaico bento de 5 fotos** (entrada em destaque 2×2 + teto, ambiente,
  Zé Pilintra e fachada de dia); fotos novas otimizadas: `teto.jpg` (feirab2), `ze-pilintra.jpg`
  (feirab6, substitui a antiga ilustrativa), `fachada-dia.jpg` (feira1);
- Grid: `sm:grid-cols-2` / `lg:grid-cols-4` com `lg:grid-rows-2`; no mobile empilha 1 por vez;
- Legendas: Entrada/A Feira começa aqui · O teto/Bandeirinhas & panos de feira ·
  Ambiente/A de coração mais linda da cidade · Zé Pilintra/O guardião da casa ·
  A fachada/Arte por todos os lados;
- Ajuste a pedido do cliente: **FACHADA DE DIA** é o destaque grande (2×2) e a **ENTRADA à noite**
  foi para o card pequeno.

**Testeira HD do toldo (09/10/2026):**
- Substituída pela versão em alta definição enviada pelo cliente (só a testeira, 1320×119): fundo branco
  externo removido por flood-fill com threshold de branco puro (≥249) — as listras claras internas do
  tecido (231,234,241) foram preservadas; achatada sobre creme;
- Agora renderiza com `background-repeat: repeat-x` (`background-size: auto 100%`): a testeira **repete**
  em telas largas em vez de esticar, mantendo a proporção das listras em qualquer tela
  (h-20 mobile / sm:h-24 / md:h-28).

---

*Documento gerado junto com a versão entregue (opção A). Atualize este arquivo sempre que houver decisão
de escopo, para o próximo turno de agente começar com contexto completo.*

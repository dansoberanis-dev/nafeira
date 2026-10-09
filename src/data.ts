export type Show = {
  day: string;
  date: string;
  artist: string;
  genre: string;
  time: string;
  tag?: string;
  desc?: string;
  accent: "red" | "blue" | "orange" | "yellow";
};

export const agenda: Show[] = [
  {
    day: "SEXTA",
    date: "09/10",
    artist: "Samba do Cassin",
    genre: "Samba de raiz",
    time: "19h",
    tag: "Samba Raiz",
    accent: "red",
  },
  {
    day: "SÁBADO",
    date: "10/10",
    artist: "Serena Flor",
    genre: "Samba ao vivo",
    time: "19h",
    tag: "Samba",
    accent: "blue",
  },
  {
    day: "DOMINGO",
    date: "11/10",
    artist: "Inimigos do Fim",
    genre: "Samba ao vivo",
    time: "19h",
    tag: "Samba",
    accent: "orange",
  },
  {
    day: "SEGUNDA",
    date: "12/10",
    artist: "Edson Cigano & Pagode dos Amigos",
    genre: "Samba & pagode",
    time: "16h às 19h",
    tag: "Dose Dupla",
    desc: "Com Edson Cigano, vocalista do Pique Novo",
    accent: "yellow",
  },
];

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  emoji: string;
  hot?: boolean;
};

export type MenuGroup = {
  title: string;
  emoji: string;
  items: MenuItem[];
};

export const menu: MenuGroup[] = [
  {
    title: "Pastéis de Feira",
    emoji: "🥟",
    items: [
      { name: "Pastel de Carne", desc: "O clássico da barraca, recheio suculento e massa sequinha.", price: "R$ 18", emoji: "🥟", hot: true },
      { name: "Pastel de Queijo", desc: "Mussarela derretida escorrendo, do jeito que tem que ser.", price: "R$ 17", emoji: "🧀" },
      { name: "Pastel de Carne com Queijo", desc: "A dupla que ninguém separa na feira.", price: "R$ 20", emoji: "🥟" },
      { name: "Pastel de Palmito", desc: "Cremoso, levinho e vegetariano.", price: "R$ 19", emoji: "🌿" },
    ],
  },
  {
    title: "Pra Beliscar",
    emoji: "🍟",
    items: [
      { name: "Porção de Mandioca", desc: "Frita na hora, crocante por fora e macia por dentro.", price: "R$ 29", emoji: "🥔" },
      { name: "Bolinho de Bacalhau", desc: "Seis unidades douradas com limonzinho.", price: "R$ 34", emoji: "🐟" },
      { name: "Linguiça na Brasa", desc: "Com vinagrete da casa e pão na chapa.", price: "R$ 32", emoji: "🌭", hot: true },
    ],
  },
  {
    title: "Pra Beber",
    emoji: "🍺",
    items: [
      { name: "Chopp Gelado", desc: "Puxado na pressão certa, colarinho perfeito.", price: "R$ 12", emoji: "🍺", hot: true },
      { name: "Long Neck", desc: "Sempre estupidamente gelada.", price: "R$ 11", emoji: "🍾" },
      { name: "Caipirinha da Feira", desc: "Cachaça artesanal, limão e aquela pegada.", price: "R$ 22", emoji: "🍹" },
      { name: "Suco da Barraca", desc: "Polpa de fruta natural batida na hora.", price: "R$ 14", emoji: "🧃" },
    ],
  },
];

export type Review = {
  name: string;
  initials: string;
  text: string;
  rating: number;
  when: string;
  color: string;
};

export const reviews: Review[] = [
  {
    name: "Juliana M.",
    initials: "JM",
    text: "Lugar incrível! Ambiente super temático, parece uma vila de feira de verdade. O samba ao vivo é maravilhoso e o pastel é o melhor de Curitiba.",
    rating: 5,
    when: "há 2 semanas",
    color: "bg-feira-red",
  },
  {
    name: "Rafael S.",
    initials: "RS",
    text: "Decoração sensacional, cada cantinho é uma foto. A estátua do Zé Pilintra no coreto é demais. Cerveja gelada e atendimento nota 10!",
    rating: 5,
    when: "há 1 mês",
    color: "bg-feira-blue",
  },
  {
    name: "Camila O.",
    initials: "CO",
    text: "Melhor bar temático da cidade! Fui num sábado com samba e foi uma experiência inesquecível. Voltarei com certeza 🌻",
    rating: 5,
    when: "há 3 semanas",
    color: "bg-feira-orange",
  },
  {
    name: "Pedro H.",
    initials: "PH",
    text: "Ambiente diferente de tudo que já vi. Muito colorido, música boa e o pastel de feira é de outro nível. Preço justo!",
    rating: 5,
    when: "há 1 semana",
    color: "bg-feira-gold",
  },
  {
    name: "Marina L.",
    initials: "ML",
    text: "Fui no domingo da feijoada com samba e amei! Clima de festa o tempo todo, gente feliz, comida boa. Curitiba precisava de um lugar assim.",
    rating: 5,
    when: "há 2 meses",
    color: "bg-feira-blue",
  },
  {
    name: "Thiago A.",
    initials: "TA",
    text: "Sensação de estar dentro de uma feira de verdade, com aquele astral de barraca de pastel. Samba ao vivo impecável. Recomendo demais!",
    rating: 5,
    when: "há 4 dias",
    color: "bg-feira-red",
  },
];

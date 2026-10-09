import Sunburst from "./Sunburst";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </svg>
  );
}

const facts = [
  {
    title: "Na Feira",
    text: "Cada canto da nossa feira é um cenário único para você tirar suas fotos e levar na lembrança esse clima gostoso da nossa casa.",
  },
  {
    title: "A música",
    text: "O melhor do samba ao vivo com os grupos e os artistas mais renomados da cidade!",
  },
  {
    title: "O Palco",
    text: "Nosso palco é 360º para que todos na casa assistam o show de onde estiverem.",
  },
  {
    title: "Pastel de verdade",
    text: "Massa fininha, frito na hora, muito recheio e cerveja gelada — a alma da feira no copo e no prato.",
  },
];

type Photo = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  className?: string;
  imgClassName?: string;
};

const photos: Photo[] = [
  {
    src: "/images/fachada-dia.jpg",
    alt: "Fachada externa do Na Feira Bar pintada com mosaico de azulejos e bicicleta",
    label: "A fachada",
    caption: "Arte por todos os lados",
    className: "sm:col-span-2 lg:row-span-2",
    imgClassName: "h-72 sm:h-96 lg:h-full",
  },
  {
    src: "/images/teto.jpg",
    alt: "Teto forrado de panos e bandeirinhas de feira coloridos",
    label: "O teto",
    caption: "Bandeirinhas & panos de feira",
    imgClassName: "h-64 lg:h-full",
  },
  {
    src: "/images/ambiente.jpg",
    alt: "Viela colorida e temática do Na Feira Bar",
    label: "Ambiente",
    caption: "A de coração mais linda da cidade",
    imgClassName: "h-64 lg:h-full",
  },
  {
    src: "/images/ze-pilintra.jpg",
    alt: "Estátua do Zé Pilintra de terno branco junto ao poste",
    label: "Zé Pilintra",
    caption: "O guardião da casa",
    imgClassName: "h-64 lg:h-full",
  },
  {
    src: "/images/entrada.jpg",
    alt: "Fachada do Na Feira Bar lotada na entrada, à noite",
    label: "Entrada",
    caption: "A Feira começa aqui",
    imgClassName: "h-64 lg:h-full [object-position:50%_30%]",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-feira-cream py-20 sm:py-28">
      <Sunburst className="absolute -right-24 top-10 h-64 w-64 opacity-10" color="#f05a22" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2
            className="text-4xl text-feira-red sm:text-6xl"
            style={{ fontFamily: "Luckiest Guy, cursive" }}
          >
            O bar mais <span className="text-feira-orange">feira</span>
            <br className="sm:hidden" /> da cidade
          </h2>
          <p className="mt-5 text-lg font-semibold text-feira-ink/80">
            No Na Feira você entra num ambiente seguro, com muita gente bonita, muito samba, pastel
            fresquinho, cerveja gelada e aquele clima de vila que só a gente tem! E do lado de fora,
            nossas tradicionais cadeirinhas de praia pra você relaxar e curtir com a galera!
          </p>
        </div>

        {/* Mosaico de fotos */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {photos.map((p) => (
            <div
              key={p.src}
              className={`reveal group relative overflow-hidden rounded-[2rem] bg-feira-red shadow-xl shadow-feira-ink/20 ${p.className ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${p.imgClassName}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-feira-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xs font-extrabold uppercase tracking-widest text-feira-gold sm:text-sm">
                  {p.label}
                </p>
                <p className="text-lg font-extrabold leading-snug text-feira-cream sm:text-xl">
                  {p.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facts */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.title}
              className="reveal rounded-3xl border-4 border-feira-ink/5 bg-white p-6 shadow-md transition hover:-translate-y-1.5 hover:shadow-xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="text-xl font-extrabold text-feira-orange">{f.title}</h3>
              <p className="mt-1.5 text-sm font-semibold leading-relaxed text-feira-ink/70">{f.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://instagram.com/nafeira.bar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-feira-orange to-feira-red px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-feira-cream shadow-xl shadow-feira-red/30 transition hover:scale-105"
          >
            <InstagramIcon className="h-5 w-5" />
            Seguir no Instagram · @nafeira.bar
          </a>
        </div>
      </div>
    </section>
  );
}

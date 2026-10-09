import Sunburst from "./Sunburst";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-feira-ink">
      {/* Background photo — panorama do teto; foco no São Jorge (painel central) */}
      <img
        src="/images/hero.jpg"
        alt="São Jorge sob o teto de panos e bandeirinhas do Na Feira Bar"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 50%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-feira-ink/70 via-feira-red/35 to-feira-ink/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(42,26,16,0.55)_80%)]" />

      {/* Floating sunbursts */}
      <Sunburst className="animate-spin-slow absolute -left-16 top-24 h-48 w-48 opacity-30" color="#f9b000" />
      <Sunburst className="animate-spin-slower absolute -right-10 bottom-24 h-40 w-40 opacity-25" color="#f05a22" points={10} />
      <Sunburst className="animate-spin-slow absolute right-1/4 top-10 hidden h-24 w-24 opacity-20 sm:block" color="#1f6fd6" points={9} />

      {/* String lights */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="animate-sway" style={{ animationDelay: `${(i % 5) * 0.3}s` }}>
            <div className="mx-auto h-5 w-px bg-feira-cream/40" />
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: ["#f9b000", "#f05a22", "#1f6fd6", "#e52521"][i % 4],
                boxShadow: `0 0 10px ${["#f9b000", "#f05a22", "#1f6fd6", "#e52521"][i % 4]}`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-40 pt-28 text-center sm:pb-44">
      {/* Official logo: zoom-in on load + floating swing (same bob as the old badge) */}
      <div className="animate-zoom-in">
        <img
          src="/images/logo.png"
          alt="Na Feira Bar"
          className="logo-sticker animate-bob mx-auto h-auto w-[min(70vw,400px)]"
        />
      </div>

      <h1
        className="mt-5 text-2xl text-feira-cream drop-shadow-[0_3px_0_rgba(42,26,16,0.45)] sm:text-4xl"
        style={{ fontFamily: "Luckiest Guy, cursive" }}
      >
        Pastel, cerveja <span className="text-feira-gold">&amp;</span> muito samba
      </h1>

        <p className="mx-auto mt-6 max-w-xl text-base font-semibold text-feira-cream/90 sm:text-lg">
          Por aqui não tem tempo ruim pra receber a freguesia. Faça chuva ou faça sol,{" "}
          <em className="font-extrabold italic">estamos sempre de portas abertas e com a cervejinha gelada</em>.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#agenda"
            className="group w-full rounded-full bg-feira-gold px-8 py-4 text-base font-extrabold uppercase tracking-wide text-feira-ink shadow-xl shadow-feira-gold/30 transition hover:scale-105 hover:bg-feira-yellow sm:w-auto"
          >
            Ver agenda da semana
            <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#cardapio"
            className="w-full rounded-full border-2 border-feira-cream/60 bg-white/10 px-8 py-4 text-base font-extrabold uppercase tracking-wide text-feira-cream backdrop-blur transition hover:scale-105 hover:bg-white/20 sm:w-auto"
          >
            Espiar o cardápio
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-feira-cream/80">
          <span>⭐ 4,8 no Google</span>
          <span className="hidden h-1 w-1 rounded-full bg-feira-cream/50 sm:block" />
          <span>📸 23 mil no Instagram</span>
          <span className="hidden h-1 w-1 rounded-full bg-feira-cream/50 sm:block" />
          <span>📍 Mercês · Curitiba</span>
        </div>
      </div>

      {/* Torn paper transition */}
      {/* Awning (toldo) — divisão entre o hero e a próxima seção */}
      <div
        className="absolute inset-x-0 bottom-0 h-12 bg-feira-cream sm:h-14"
        style={{ zIndex: 9 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 sm:h-24 md:h-28"
        style={{
          backgroundImage: "url(/images/toldo.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom left",
        }}
      />
    </section>
  );
}

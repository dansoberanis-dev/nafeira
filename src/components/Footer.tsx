import Torn from "./Torn";

const hours = [
  { d: "Segunda", h: "Fechado" },
  { d: "Terça", h: "17h – 00h" },
  { d: "Quarta", h: "17h – 00h" },
  { d: "Quinta", h: "17h – 00h" },
  { d: "Sexta", h: "17h – 01h" },
  { d: "Sábado", h: "14h – 01h" },
  { d: "Domingo", h: "14h – 21h" },
];

export default function Footer() {
  return (
    <>
      <section id="visite" className="relative overflow-hidden bg-feira-orange py-20 sm:py-28">
        <Torn color="#fbf3e2" />
        <div className="absolute inset-0 opacity-10 [background-image:repeating-linear-gradient(-45deg,#fff_0,#fff_22px,transparent_22px,transparent_44px)]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <span className="inline-block rounded-full bg-feira-cream/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-feira-cream">
                Cola na feira
              </span>
              <h2 className="mt-4 text-4xl text-feira-cream sm:text-6xl" style={{ fontFamily: "Luckiest Guy, cursive" }}>
                Te esperamos pra festa
              </h2>
              <p className="mt-4 text-lg font-semibold text-feira-cream/90">
                Chegue cedo, garanta seu lugar que a feira te espera e traga os amigos!
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-feira-cream p-5 shadow-lg">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-feira-orange">📍 Endereço</p>
                  <p className="mt-1 font-extrabold text-feira-ink">Al. Princesa Izabel, 465</p>
                  <p className="font-semibold text-feira-ink/70">Mercês · Curitiba — PR</p>
                </div>
                <div className="rounded-3xl bg-feira-cream p-5 shadow-lg">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-feira-orange">🕗 Horários</p>
                  <ul className="mt-1 space-y-0.5 text-sm font-semibold text-feira-ink/80">
                    {hours.map((x) => (
                      <li key={x.d} className="flex justify-between gap-3">
                        <span>{x.d}</span>
                        <span className="font-extrabold text-feira-ink">{x.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/nafeira.bar"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-feira-ink px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-feira-cream transition hover:scale-105"
                >
                  📸 @nafeira.bar
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Na+Feira+Bar+Alameda+Princesa+Izabel+465+Curitiba"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-feira-cream px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-feira-orange transition hover:scale-105"
                >
                  🗺️ Como chegar
                </a>
              </div>
            </div>

            <div className="reveal overflow-hidden rounded-[2rem] border-4 border-feira-cream shadow-2xl shadow-feira-ink/30">
              <iframe
                title="Mapa Na Feira Bar"
                className="h-80 w-full lg:h-[26rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Alameda+Princesa+Izabel+465+Merc%C3%AAs+Curitiba&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-feira-ink py-12 text-feira-cream">
        <Torn color="#f05a22" />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-6">
          <img
            src="/images/logo.png"
            alt="Na Feira Bar"
            className="h-24 w-auto drop-shadow-[0_0_18px_rgba(249,176,0,0.25)]"
          />
          <p className="max-w-md text-sm font-semibold text-feira-cream/70">
            🌻 O bar mais feira da cidade. Pastel de feira, cerveja gelada e samba do bom!
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold">
            <a href="#sobre" className="transition hover:text-feira-gold">O Bar</a>
            <a href="#agenda" className="transition hover:text-feira-gold">Agenda</a>
            <a href="#cardapio" className="transition hover:text-feira-gold">Cardápio</a>
            <a href="#avaliacoes" className="transition hover:text-feira-gold">Avaliações</a>
            <a href="#visite" className="transition hover:text-feira-gold">Localização</a>
          </div>
          <div className="h-px w-full max-w-xs bg-feira-cream/15" />
          <p className="text-sm font-bold text-feira-gold">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/5541984542307"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-2 transition hover:text-feira-cream"
              title="Falar com Daniel Soberanis no WhatsApp"
            >
              Daniel Soberanis
            </a>
          </p>
          <p className="text-xs font-semibold text-feira-cream/40">
            © {new Date().getFullYear()} Na Feira Bar · Curitiba. Feito com samba no pé. 🎶
          </p>
        </div>
      </footer>
    </>
  );
}

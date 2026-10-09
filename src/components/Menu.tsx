import { useState } from "react";
import { menu } from "../data";
import Torn from "./Torn";
import Sunburst from "./Sunburst";

export default function Menu() {
  const [active, setActive] = useState(0);
  const group = menu[active];

  return (
    <section id="cardapio" className="relative overflow-hidden bg-feira-blue py-20 sm:py-28">
      <Torn color="#2a1a10" />
      <Sunburst className="animate-spin-slower absolute -left-20 bottom-10 h-72 w-72 opacity-15" color="#f9b000" />
      <div className="absolute right-6 top-10 text-6xl opacity-20">🧀</div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-feira-cream/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-feira-cream">
            Direto da barraca
          </span>
          <h2 className="mt-4 text-4xl text-feira-cream sm:text-6xl" style={{ fontFamily: "Luckiest Guy, cursive" }}>
            O <span className="text-feira-gold">cardápio</span> da feira
          </h2>
          <p className="mt-4 text-base font-semibold text-feira-cream/80">
            Comida de feira de verdade, feita na hora. Pede mais um pastel que a cerveja já tá gelando.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Feature image */}
          <div className="reveal relative overflow-hidden rounded-[2rem] shadow-2xl shadow-feira-ink/30 lg:col-span-2">
            <img src="/images/pastel.jpg" alt="Pastéis de feira douradinhos com cerveja gelada" className="h-64 w-full object-cover lg:h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-feira-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-6">
              <span className="rounded-full bg-feira-red px-3 py-1 text-xs font-extrabold uppercase text-feira-cream">
                🔥 Mais pedido
              </span>
              <p className="mt-2 text-2xl font-extrabold text-feira-cream">Pastel frito na hora</p>
            </div>
          </div>

          {/* Menu card */}
          <div className="reveal rounded-[2rem] bg-feira-cream p-5 shadow-2xl shadow-feira-ink/30 sm:p-8 lg:col-span-3">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {menu.map((g, i) => (
                <button
                  key={g.title}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${
                    active === i
                      ? "bg-feira-red text-feira-cream shadow-md"
                      : "bg-feira-ink/5 text-feira-ink hover:bg-feira-orange/15"
                  }`}
                >
                  {g.emoji} {g.title}
                </button>
              ))}
            </div>

            <ul className="mt-6 divide-y divide-feira-ink/10">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-start gap-4 py-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-feira-gold/25 text-2xl">
                    {item.emoji}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-extrabold text-feira-ink">
                        {item.name}
                        {item.hot && (
                          <span className="ml-2 rounded-full bg-feira-red/15 px-2 py-0.5 text-[0.6rem] font-extrabold uppercase text-feira-red">
                            Top
                          </span>
                        )}
                      </h3>
                      <span className="shrink-0 text-lg font-black text-feira-orange">{item.price}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-semibold text-feira-ink/65">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-center text-xs font-bold text-feira-ink/50">
              * Cardápio ilustrativo. Consulte os sabores do dia na barraca 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

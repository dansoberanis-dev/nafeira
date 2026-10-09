import { reviews, type Review } from "../data";
import Torn from "./Torn";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-feira-gold" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="mx-3 flex w-[82vw] max-w-[360px] shrink-0 flex-col rounded-3xl bg-white p-6 shadow-lg shadow-feira-ink/10 sm:w-[360px]">
      <div className="flex items-center gap-3">
        <div className={`${r.color} grid h-11 w-11 place-items-center rounded-full text-sm font-extrabold text-white`}>
          {r.initials}
        </div>
        <div className="flex-1">
          <p className="font-extrabold text-feira-ink">{r.name}</p>
          <p className="text-xs font-semibold text-feira-ink/50">{r.when}</p>
        </div>
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9z" />
          <path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.2 1-3.6 1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A10.9 10.9 0 0 0 12 23z" />
          <path fill="#FBBC05" d="M6 14.3a6.5 6.5 0 0 1 0-4.2V7.3H2.3a11 11 0 0 0 0 9.8L6 14.3z" />
          <path fill="#EA4335" d="M12 5.5c1.6 0 3 .5 4.1 1.6l3.1-3.1A10.9 10.9 0 0 0 12 1 10.9 10.9 0 0 0 2.3 7.3L6 10.1c.9-2.5 3.2-4.6 6-4.6z" />
        </svg>
      </div>
      <div className="mt-3">
        <Stars n={r.rating} />
      </div>
      <p className="mt-3 text-sm font-semibold leading-relaxed text-feira-ink/75">“{r.text}”</p>
    </div>
  );
}

export default function Reviews() {
  const row = [...reviews, ...reviews];
  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-feira-cream py-20 sm:py-28">
      <Torn color="#1f6fd6" />
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
        <span className="inline-block rounded-full bg-feira-red/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-feira-red">
          Quem foi, amou
        </span>
        <h2 className="mt-4 text-4xl text-feira-red sm:text-6xl" style={{ fontFamily: "Luckiest Guy, cursive" }}>
          O que falam da <span className="text-feira-orange">feira</span>
        </h2>

        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-white px-6 py-3 shadow-md">
          <span className="text-4xl font-black text-feira-ink" style={{ fontFamily: "Luckiest Guy, cursive" }}>
            4,8
          </span>
          <Stars n={5} />
          <span className="text-sm font-bold text-feira-ink/60">· centenas de avaliações no Google</span>
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="animate-marquee-rev flex w-max">
          {row.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.google.com/search?q=nafeira+bar+curitiba"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-feira-ink px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-feira-cream transition hover:scale-105 hover:bg-feira-red"
        >
          Ver todas no Google ⭐
        </a>
      </div>
    </section>
  );
}

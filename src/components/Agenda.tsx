import { useEffect, useRef, useState, type PointerEvent, type TransitionEvent } from "react";
import { agenda, type Show } from "../data";
import Torn from "./Torn";

const accentMap: Record<Show["accent"], { bg: string; chip: string; text: string }> = {
  red: { bg: "bg-feira-red", chip: "bg-feira-gold text-feira-ink", text: "text-feira-cream" },
  blue: { bg: "bg-feira-blue", chip: "bg-feira-gold text-feira-ink", text: "text-feira-cream" },
  orange: { bg: "bg-feira-orange", chip: "bg-white text-feira-orange", text: "text-feira-cream" },
  yellow: { bg: "bg-feira-gold", chip: "bg-feira-red text-feira-cream", text: "text-feira-ink" },
};

function ShowCard({ show }: { show: Show }) {
  const a = accentMap[show.accent];
  return (
    <div
      className={`${a.bg} ${a.text} relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2rem] p-6 shadow-xl shadow-feira-ink/20`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] opacity-90">{show.day}</p>
            <p className="text-5xl font-black leading-none" style={{ fontFamily: "Luckiest Guy, cursive" }}>
              {show.date}
            </p>
          </div>
          {show.tag && (
            <span
              className={`${a.chip} rounded-full px-3 py-1 text-center text-[0.65rem] font-extrabold uppercase leading-tight tracking-wide`}
            >
              {show.tag}
            </span>
          )}
        </div>
      </div>

      <div className="relative mt-8">
        <p className="text-2xl font-extrabold leading-tight">{show.artist}</p>
        {show.desc && <p className="mt-1 text-xs font-semibold leading-snug opacity-90">{show.desc}</p>}
        <p className="mt-1 text-sm font-bold uppercase tracking-wide opacity-90">🎵 {show.genre}</p>
        <div className="mt-4 flex items-center gap-2 border-t border-white/25 pt-4 text-sm font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">🕗</span>
          {show.time}
        </div>
      </div>
    </div>
  );
}

const N = agenda.length;

export default function Agenda() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);
  const [pos, setPos] = useState(N); // posição na trilha tripla (começa na cópia do meio)
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const moved = useRef(false);

  // Largura do viewport (responsivo)
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setVw(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Card do tamanho exato do vão entre os botões ← e → (max-w-md = 448px, px-6 = 24px de cada lado)
  // Card visível = vão entre as bordas externas dos botões (max-w-md 448 - px-6 48 = 400px).
  // O wrapper tem px-2 (16px no total), entao o passo da fileira (slide) = card + 16.
  const slide = vw > 0 ? Math.min(vw, 448) - 32 : 0;
  const current = ((pos % N) + N) % N;

  const goTo = (p: number) => {
    setAnim(true);
    setPos(p);
  };
  const go = (dir: number) => goTo(pos + dir);

  // Reativa a animação no frame seguinte após um salto silencioso (loop infinito)
  useEffect(() => {
    if (!anim) {
      const t = requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
      return () => cancelAnimationFrame(t);
    }
  }, [anim]);

  // Normaliza a posição de volta para a cópia do meio, sem transição
  const onTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (pos >= 2 * N) {
      setAnim(false);
      setPos(pos - N);
    } else if (pos < N) {
      setAnim(false);
      setPos(pos + N);
    }
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
    setPaused(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) moved.current = true;
    setDragX(dx);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    const dx = e.clientX - startX.current;
    setDragX(0);
    setPaused(false);
    if (dx <= -60) go(1);
    else if (dx >= 60) go(-1);
  };

  return (
    <section id="agenda" className="relative overflow-hidden bg-feira-ink py-20 sm:py-28">
      <Torn color="#fbf3e2" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(45deg,#f9b000_0,#f9b000_28px,transparent_28px,transparent_56px)]" />

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6">
        <span className="inline-block rounded-full bg-feira-gold px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-feira-ink">
          Programação ao vivo
        </span>
        <h2 className="mt-4 text-4xl text-feira-cream sm:text-6xl" style={{ fontFamily: "Luckiest Guy, cursive" }}>
          Agenda da <span className="text-feira-gold">semana</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-semibold text-feira-cream/70">
          Confira nossa agenda de shows. Role pro lado ou deixe passar — a festa não para.
        </p>
      </div>

      {/* Carrossel center-mode: card ativo no centro, vizinhos à vista */}
      <div
        ref={viewportRef}
        className="relative mt-12"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setPaused(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse" && !dragging.current) setPaused(false);
        }}
      >
        <div
          className="cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div
            className="flex items-stretch py-2"
            onTransitionEnd={onTransitionEnd}
            style={{
              transform:
                vw > 0
                  ? `translateX(calc(${vw / 2 - slide / 2}px - ${pos * slide}px + ${dragX}px))`
                  : undefined,
              transition: anim && dragX === 0 ? "transform 500ms cubic-bezier(0.2, 0.7, 0.2, 1)" : "none",
            }}
          >
            {[...agenda, ...agenda, ...agenda].map((show, i) => {
              const active = i === pos;
              return (
                <div
                  key={i}
                  onClick={() => {
                    if (!moved.current && i !== pos) goTo(i);
                  }}
                  className="shrink-0 px-2"
                  style={{
                    width: slide || undefined,
                    opacity: active ? 1 : 0.85,
                    filter: active ? "none" : "brightness(0.92)",
                    transform: active ? "scale(1)" : "scale(0.97)",
                    transition: "opacity 500ms, filter 500ms, transform 500ms",
                  }}
                >
                  <ShowCard show={show} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Controles: anterior · barra de progresso · próximo */}
        <div className="mx-auto mt-7 flex max-w-md items-center gap-4 px-6">
          <button
            onClick={() => go(-1)}
            aria-label="Show anterior"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-feira-gold text-xl font-black text-feira-ink shadow-lg shadow-feira-gold/30 transition hover:scale-110 active:scale-95"
          >
            ←
          </button>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
            <div
              key={current}
              onAnimationEnd={() => go(1)}
              className={`animate-progress h-full rounded-full bg-gradient-to-r from-feira-gold to-feira-orange ${
                paused ? "[animation-play-state:paused]" : ""
              }`}
            />
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Próximo show"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-feira-gold text-xl font-black text-feira-ink shadow-lg shadow-feira-gold/30 transition hover:scale-110 active:scale-95"
          >
            →
          </button>
        </div>

        <p className="mt-4 text-center text-sm font-bold text-feira-cream/60">
          👆 Arraste, toque nos cards ao lado ou use as setas
        </p>
      </div>
    </section>
  );
}

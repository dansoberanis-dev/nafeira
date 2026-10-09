import Sunburst from "./Sunburst";

export default function Logo({ className = "", size = 56 }: { className?: string; size?: number }) {
  return (
    <div className={`relative inline-grid place-items-center ${className}`} style={{ width: size, height: size }}>
      <Sunburst className="absolute inset-0 h-full w-full drop-shadow-sm" color="#f6c518" points={11} />
      <div className="relative z-10 flex flex-col items-center justify-center leading-[0.78]">
        <span
          className="text-feira-orange"
          style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 700, fontSize: size * 0.2 }}
        >
          Na
        </span>
        <span
          className="text-feira-red -mt-0.5"
          style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 700, fontSize: size * 0.27, letterSpacing: "-0.02em" }}
        >
          FEiRA
        </span>
        <span
          className="text-feira-orange tracking-[0.2em]"
          style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 600, fontSize: size * 0.11 }}
        >
          BAR
        </span>
      </div>
    </div>
  );
}

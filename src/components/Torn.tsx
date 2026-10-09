/**
 * Divisor de papel rasgado entre seções (SVG inline, duas camadas + filete
 * branco de papel, no estilo das artes do Na Feira).
 * `color` = cor da seção ANTERIOR. Deve ser o primeiro filho da seção (`relative`).
 */
const DEEP = "M0 0 H1200 L1200 32 L1168 34 L1120 23 L1090 39 L1059 33 L1013 23 L969 28 L940 24 L899 35 L869 29 L839 39 L798 23 L752 25 L717 40 L688 40 L642 34 L613 29 L584 39 L552 31 L511 26 L466 25 L420 31 L375 27 L344 40 L298 28 L259 25 L214 24 L168 23 L121 28 L78 39 L37 32 L0 40 Z";
const SHALLOW = "M0 0 H1200 L1200 11 L1159 19 L1111 15 L1068 12 L1025 22 L992 22 L948 13 L920 6 L881 24 L840 8 L808 13 L773 7 L732 19 L685 20 L656 16 L611 21 L561 9 L513 17 L485 10 L434 8 L403 6 L361 11 L316 16 L276 21 L244 11 L195 7 L152 13 L122 12 L88 24 L37 8 L6 23 L0 23 Z";

export default function Torn({ color }: { color: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 z-10 block h-11 w-full"
      viewBox="0 0 1200 44"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={DEEP} fill="#ffffff" />
      <path d={SHALLOW} fill={color} />
    </svg>
  );
}

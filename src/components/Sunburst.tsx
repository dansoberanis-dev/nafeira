type Props = {
  className?: string;
  color?: string;
  points?: number;
};

/** A hand-drawn-ish spiky sunburst, the signature shape of the Na Feira logo. */
export default function Sunburst({ className = "", color = "#f9b000", points = 12 }: Props) {
  const spikes = Array.from({ length: points }, (_, i) => {
    const angle = (i / points) * Math.PI * 2;
    const next = ((i + 0.5) / points) * Math.PI * 2;
    const rOuter = 50;
    const rInner = 33;
    const x1 = 50 + rOuter * Math.cos(angle);
    const y1 = 50 + rOuter * Math.sin(angle);
    const x2 = 50 + rInner * Math.cos(next);
    const y2 = 50 + rInner * Math.sin(next);
    return `${x1},${y1} ${x2},${y2}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points={spikes} fill={color} />
    </svg>
  );
}

import { useEffect, useState } from "react";

const links = [
  { label: "O Bar", href: "#sobre" },
  { label: "Agenda", href: "#agenda" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#visite" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-feira-cream/95 shadow-lg shadow-feira-ink/10 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Na Feira Bar"
            className={`w-auto transition-all ${scrolled ? "h-11" : "h-14"}`}
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition hover:scale-105 ${
                  scrolled
                    ? "text-feira-ink hover:bg-feira-orange/15 hover:text-feira-orange"
                    : "text-feira-cream hover:bg-white/20"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className={`grid h-11 w-11 place-items-center rounded-full md:hidden ${
              scrolled ? "bg-feira-orange/15 text-feira-ink" : "bg-white/20 text-feira-cream"
            }`}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-feira-cream transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96 shadow-xl" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-lg font-extrabold text-feira-ink transition hover:bg-feira-orange/15 hover:text-feira-orange"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

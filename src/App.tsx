import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Agenda from "./components/Agenda";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-feira-cream font-body text-feira-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Agenda />
        <Menu />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
}

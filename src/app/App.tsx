import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/About";
import { Catalog } from "./components/Catalog";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection/>
        <Catalog />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

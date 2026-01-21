import { Menu, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "../../assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mymebel Logo"
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl text-[rgb(18,111,28)] text-[36px]">
              Mymebel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[rgb(0,0,0)] hover:text-amber-700 transition-colors font-[sans-serif] text-[18px] font-bold font-normal"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[rgb(0,0,0)] hover:text-amber-700 transition-colors text-[17px]"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-[rgb(0,0,0)] hover:text-amber-700 transition-colors text-[17px]"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-[rgb(0,0,0)] hover:text-amber-700 transition-colors text-[17px]"
            >
              Галерея
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/+77787489508"
              target="_blank"
              className="flex items-center gap-2 text-green-700 hover:text-amber-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+7 (778) 748 95 08 </span>
            </a>
            <a
              href="https://www.instagram.com/mymebel_01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
            >
              Контакты
            </button>
            <div className="flex items-center gap-2 px-4 py-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+7 (900) 123-45-67</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
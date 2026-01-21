import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Instagram } from "lucide-react";
import bg from "@/app/components/imgs/background.png";
import logo from "figma:asset/f9a097497369ceb283638982905bd5042e9fee69.png";

<link rel="stylesheet" href="../../styles/a_style.css"></link>

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={bg}
          alt="Мебельный шоурум"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[rgb(255,255,255)] font-[Baskervville] text-[64px]">
            Mymebel
          </h1>
        </div>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 italic font-[Anek_Gurmukhi] text-[36px]">
          Создаем уют и стиль для вашего дома
        </p>
        <p
          className="text-lg mb-10 max-w-2xl mx-auto text-gray-300 outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1 italic font-[Anek_Gurmukhi] text-[20px]"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          Качественная мебель из натуральных материалов с индивидуальным
          подходом к каждому клиенту.Мебель это стиль который радует глаз и
          создаёт уют в пространстве.Более 15 лет опыта в производстве и дизайне
          интерьеров
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/+77787489508"
            target="_blank"
            className="flex items-center gap-2 text-green-700 hover:text-amber-700 transition-colors"
          >
            <Button
              size="lg"
              className="bg-[rgb(141,226,151)] hover:bg-green-700 text-black px-8 py-6 text-lg italic text-[24px]"
              onClick={scrollToContact}
            >
              Связаться с нами
            </Button>
          </a>
          <a>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 hover:text-grey-500 hover:opacity-90  cursor: pointer via-pink-600 to-orange-500 hover:opacity-90 text-white px-8 py-6 text-lg text-[24px] flex items-center gap-2 transition-opacity"
              rel="noopener noreferrer"
              onClick={() =>
                window.open("https://www.instagram.com/mymebel_01", "_blank")
              }
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white hover:bg-green-700 cursor: revert cursor: pointer hover:text-amber-500 px-8 py-6 text-lg text-[24px] bg-[rgb(141,226,151)]"
            onClick={() => {
              const element = document.getElementById("catalog");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Каталог
          </Button>
        </div>
      </div>
    </section>
  );
}
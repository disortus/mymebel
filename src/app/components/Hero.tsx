import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import logo from "figma:asset/f9a097497369ceb283638982905bd5042e9fee69.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjgwNDMxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Мебельный шоурум"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl italic font-bold">
            Mymebel
          </h1>
        </div>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 italic">
          Создаем уютное пространство для вашего дома
        </p>
        <p 
          className="text-lg mb-10 max-w-2xl mx-auto text-gray-300 outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1 italic"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          Качественная мебель из натуральных материалов с индивидуальным подходом к каждому клиенту. Более 15 лет опыта в производстве и дизайне интерьеров.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[rgb(0,136,0)] hover:bg-amber-700 text-white px-8 py-6 text-lg italic"
            onClick={scrollToContact}
          >
            Связаться с нами
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-amber-500 px-8 py-6 text-lg"
            onClick={() => {
              const element = document.getElementById("catalog");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Смотреть каталог
          </Button>
        </div>
      </div>
    </section>
  );
}
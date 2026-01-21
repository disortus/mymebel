import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-4 text-green-400">Mymebel</h3>
            <p className="text-green-400 mb-4">
              Качественная мебель из натуральных материалов с индивидуальным
              подходом к каждому клиенту.
            </p>
            <div className="flex gap-4"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 text-green-400">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-green-400 hover:text-amber-400 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-green-400 hover:text-amber-400 transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#catalog"
                  className="text-green-400 hover:text-amber-400 transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-green-400 hover:text-amber-400 transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-green-400 hover:text-amber-400 transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4 text-green-400">Контакты</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/+77787489508"
                target="_blank"
                className="flex items-center gap-3 text-green-400 hover:text-green-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+7 (778) 748 95 08 </span>
              </a>
              <a
                href="mailto:info@mebellux.ru"
                className="flex items-center gap-3 text-green-400 hover:text-green-400 transition-colors"
              ></a>
              <div className="text-green-400 mt-4">
                <div>г. Астана ул,Шара Жиенкулова 1</div>
                <div>Участок Largo, 2-ой цех</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8 text-center text-green-400">
          <p>© {currentYear} Mymebel. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
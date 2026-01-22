import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Catalog() {
  const products = [
    {
      id: 1,
      title: "Кухонные гарнитуры",
      description: "Современные решения для кухни",
      image: "https://i.pinimg.com/474x/30/40/f6/3040f647ec8220530aa517ad4ae1acdf.jpg",
    },
    {
      id: 2,
      title: "Прихожые шкафы",
      description: "Шкафы с разными фрезировками под ваш вкус",
      image: "https://i.pinimg.com/474x/97/86/2c/97862cebbfadcbab242afef568a3a7f4.jpg",
    },
    {
      id: 3,
      title: "Спальные гарнитуры",
      description: "Шкафы и стеновые панели для спальни",
      image: "https://i.pinimg.com/736x/7e/b1/59/7eb15915e9eb2ba407f695bd6a48c19e.jpg",
    },
    {
      id: 4,
      title: "TV зона",
      description: "Идеальное решение для гостевой комнаты",
      image: "https://i.pinimg.com/736x/c9/02/70/c9027077222473d9bb924c833b1e0749.jpg",
    },
    {
      id: 5,
      title: "Санузел",
      description: "Мебель для удобств",
      image: "https://i.pinimg.com/736x/ea/91/07/ea9107ec9897bdbcaf18991d5ff343f1.jpg",
    },
    {
      id: 6,
      title: "Детская комната",
      description: "Рабочие зоны для учебы",
      image: "https://i.pinimg.com/736x/73/94/9c/73949c9e5eeca2ec9590b9635a0e004e.jpg",
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 font-bold font-[Anek_Gurmukhi] text-[32px] italic">
            Наш каталог
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[Anek_Kannada] text-[20px]">
            Производим мебель для любых помещений по индивидуальным размерам и требованиям заказчика. Выберите стиль под ваш интерьер в нашем каталоге.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* Картинка с эффектом плавного масштабирования */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-64 overflow-hidden"
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Описание с плавным выдвижением */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.1, ease: "easeOut" }}
                className="p-6"
              >
                <h3 className="text-xl mb-2 text-gray-900 font-[Anek_Gurmukhi] text-[24px] font-bold italic">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-[16px]">{product.description}</p>
                <a href="https://www.instagram.com/mymebel_01" target="_blank">
                <button className="text-[rgb(238,187,100)] hover:text-amber-800 transition-colors font-bold">
                  Подробнее →
                </button>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

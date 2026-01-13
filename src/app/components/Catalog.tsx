import { ImageWithFallback } from "./figma/ImageWithFallback";

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
      image: "https://i.pinimg.com/474x/97/86/2c/97862cebbfadcbab242afef568a3a7f4.jpg" ,
    },
    {
      id: 3,
      title: "Спальные гарнитуры",
      description: "Шкафы и стеновые панели для спальни",
      image: "https://i.pinimg.com/736x/7e/b1/59/7eb15915e9eb2ba407f695bd6a48c19e.jpg",
    },
    {
      id: 4,
      title: "TV зона ",
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
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 font-bold font-[Anek_Gurmukhi] text-[32px]">Наш каталог</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[Anek_Kannada] text-[20px]">
           Производим мебель для любых помещений по индивидуальным размерам и требованиям заказчика.Выберите стиль под ваш интерьер в нашем каталоге.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900 font-[Anek_Gurmukhi] text-[24px]">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-amber-700">{product.price}</span>
                  <button className="text-[rgb(238,187,100)] hover:text-amber-800 transition-colors font-bold">
                    <a  href="https://wa.me/+77787489508" target="_blank">
                      Подробнее →
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

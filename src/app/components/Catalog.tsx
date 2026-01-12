import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Catalog() {
  const products = [
    {
      id: 1,
      title: "Кухонные гарнитуры",
      description: "Современные решения для кухни",
      image: "https://i.pinimg.com/736x/d9/63/89/d96389d3bf6112cbc6c8730c2fcd7dd1.jpg",
    },
    {
      id: 2,
      title: "Прихожые шкафы",
      description: "Шкафы с разными фрезировками под ваш вкус",
      image: "https://i.pinimg.com/1200x/69/01/6c/69016c74af043899e64cf9f4cdff3eed.jpg" ,
    },
    {
      id: 3,
      title: "Спальные гарнитуры",
      description: "Шкафы и стеновые панели для спальни",
      image: "https://i.pinimg.com/1200x/bb/d2/1b/bbd21b9a1ad768b37e0ad614fbb7c8bf.jpg",
    },
    {
      id: 4,
      title: "Офисная мебель",
      description: "Рабочие столы и стеллажи",
      image: "",
    },
    {
      id: 5,
      title: "Кухонные гарнитуры",
      description: "Современные решения для кухни",
      image: "",
    },
    {
      id: 6,
      title: "Шкафы-купе",
      description: "Встроенные и отдельностоящие шкафы",
      image: "",
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 font-bold font-[Anek_Gurmukhi]">Наш каталог</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[Anek_Kannada] text-[20px]">
           Производим мебель для любых помещений по индивидуальным размерам и требованиям заказчика.
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
                <h3 className="text-xl mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-amber-700">{product.price}</span>
                  <button className="text-amber-700 hover:text-amber-800 transition-colors">
                    Подробнее →
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

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/cf/ff/42/cfff428489cd42a233aac2c7ffd5cdbf.jpg",
      title: "Комфортная кухня",
      category: "Кухня",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/474x/42/17/dd/4217ddcec265671fd55a14525edc6967.jpg",
      title: "TV тумба",
      category: "Гостинная",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/474x/b4/d6/c0/b4d6c0da7107f731ac408bd261b87e4f.jpg",
      title: "Функциональный офис",
      category: "Офис",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/474x/ff/8e/6f/ff8e6f2a4bb295ec144fd6fc7c97a7fb.jpg",
      title: "Стильная кухня",
      category: "Кухня",
    },
    {
      id: 5,
      src: "https://i.pinimg.com/474x/69/4b/e6/694be6e12991fc3150c8d5a4b9e73a9d.jpg",
      title: "Тумба",
      category: "Премиум",
    },
    {
      id: 6,
      src: "https://i.pinimg.com/474x/b4/43/d0/b443d01d9afd524f750e9c0e5c88d008.jpg",
      title: "Кухонные шкафы",
      category: "Кухня",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 font-[Anek_Gurmukhi] text-[36px]">Галерея наших работ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-[Anek_Gurmukhi] text-[20px]">
            Примеры реализованных проектов и интерьеров с нашего пройзводства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm text-amber-300 mb-1">{image.category}</div>
                  <h3 className="text-xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

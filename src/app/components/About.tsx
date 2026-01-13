import { CheckCircle, Award, Users, Clock } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Award,
      title: "Высокое качество",
      description: "Используем только натуральные материалы и современные технологии производства",
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Разрабатываем уникальные решения под потребности каждого клиента",
    },
     {
      icon: Clock,
      title: "Визуализация 3D",
      description: "Сделаем 3D дизайн вашей мебели, под ваш запрос",
    },
    {
      icon: CheckCircle,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на всю нашу продукцию, опытные мастера будут изготовлять вашу мебель",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[rgb(0,0,0)] font-bold italic text-[32px]">О нашей компании</h2>
          <p className="text-lg text-[rgb(0,0,0)] max-w-3xl mx-auto italic font-[Anek_Gurmukhi] text-[16px]">
            My_mebel - это компания, которая специализируется на производстве качественной мебели из проверенных материалов. Мы создаем не просто мебель,а уют в вашем доме, которые служат десятилетиями.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[rgba(248,202,113,0)]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[rgb(141,226,151)] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[rgba(238,187,100,0.44)] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-black-700" />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-center text-[rgb(0,0,0)] no-underline not-italic font-normal text-[24px] font-[Anek_Gurmukhi] font-bold">{feature.title}</h3>
              <p className="text-[rgb(0,0,0)] text-center font-[Anek_Gurmukhi] text-[16px]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl text-[rgb(238,187,100)] mb-2 font-bold">2000+</div>
            <div className="text-gray-600 font-[Anek_Gurmukhi] text-[20px]">Довольных клиентов</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl text-[rgb(238,187,100)] mb-2 font-bold">500+</div>
            <div className="text-gray-600 font-[Anek_Gurmukhi] text-[20px]">Реализованных проектов</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl text-[rgb(238,187,100)] mb-2 font-bold">10+</div>
            <div className="text-gray-600 font-[Anek_Gurmukhi] text-[20px]">Лет на рынке</div>
          </div>
        </div>
      </div>
    </section>
  );
}

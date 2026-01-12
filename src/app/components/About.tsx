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
      description: "Сделаем 3D дизайн вашей мебели,под ваш запрос",
    },
    {
      icon: CheckCircle,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на всю нашу продукцию",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 font-bold italic">О нашей компании</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
            My_mebel - это компания, которая специализируется на производстве качественной мебели из проверенных материалов. Мы создаем не просто мебел,а уют в вашем доме, которые служат десятилетиями.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[rgb(247,249,132)] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-amber-700" />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-center text-gray-900 no-underline italic font-normal text-[20px] font-[Anek_Gurmukhi] font-bold">{feature.title}</h3>
              <p className="text-gray-600 text-center font-[Anek_Gurmukhi]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl text-amber-700 mb-2">2000+</div>
            <div className="text-gray-600 font-[Anek_Gurmukhi] text-[20px]">Довольных клиентов</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl text-amber-700 mb-2">500+</div>
            <div className="text-gray-600 font-[Anek_Gurmukhi] text-[20px]">Реализованных проектов</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl text-amber-700 mb-2">15+</div>
            <div className="text-gray-600 font-[Anek_Gurmukhi] text-[20px]">Лет на рынке</div>
          </div>
        </div>
      </div>
    </section>
  );
}

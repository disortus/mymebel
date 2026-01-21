// src/app/components/About.tsx
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
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
      description: "Создаём 3D дизайн вашей мебели под ваш запрос",
    },
    {
      icon: CheckCircle,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на всю нашу продукцию, опытные мастера изготавливают мебель с вниманием к деталям",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 font-bold italic text-[32px]">
            О нашей компании
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto italic font-[Anek_Gurmukhi] text-[20px]">
            Mymebel – компания, создающая качественную мебель для вашего дома. Мы делаем уют и комфорт, которые служат десятилетиями.
          </p>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[rgb(141,226,151)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[rgba(238,187,100,0.44)] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-center text-gray-900 font-bold text-[24px]">
                {feature.title}
              </h3>
              <motion.p
                className="text-gray-800 text-center text-[16px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "2000+", label: "Довольных клиентов" },
            { value: "500+", label: "Реализованных проектов" },
            { value: "10+", label: "Лет на рынке" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-4xl text-amber-500 mb-2 font-bold">{stat.value}</div>
              <motion.div
                className="text-gray-700 text-[18px] font-medium italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


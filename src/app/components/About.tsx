import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { motion } from "motion/react";

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
            Mymebel - это компания, которая специализируется на производстве качественной мебели из проверенных материалов.
             Мы создаем не просто мебель,а уют в вашем доме, которые служат десятилетиями.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[rgba(248,202,113,0)]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[rgb(141,226,151)] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[rgba(238,187,100,0.44)] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-black-700" />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-center text-[rgb(0,0,0)] no-underline not-italic font-normal text-[24px] font-[Anek_Gurmukhi] font-bold">{feature.title}</h3>
                <motion.p 
                  className="text-[rgb(0,0,0)] text-center font-[Anek_Gurmukhi] text-[20px] not-italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="text-4xl text-[rgb(238,187,100)] mb-2 font-bold">2000+</div>
              <motion.div 
                className="text-gray-600 font-[Anek_Gurmukhi] text-[20px] font-bold italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Довольных клиентов
              </motion.div>
            </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="text-4xl text-[rgb(238,187,100)] mb-2 font-bold">500+</div>
              <motion.div 
                className="text-gray-600 font-[Anek_Gurmukhi] text-[20px] font-bold italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                Реализованных проектов
              </motion.div>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-4xl text-[rgb(238,187,100)] mb-2 font-bold">10+</div>
              <motion.div 
                className="text-gray-600 font-[Anek_Gurmukhi] text-[20px] font-bold italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Лет на рынке
              </motion.div>
          </motion.div>
          </div>
        </div>
    </section>
  );
}

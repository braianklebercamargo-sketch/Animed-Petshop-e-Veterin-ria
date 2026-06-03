import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "João Gabriel Camargo",
    avatar: "/joaogabrielcamargo.png",
    rating: 5,
    text: "Ótimo lugar, ótimos profissionais e muito capacitados, atendimento de excelência e qualidade."
  },
  {
    id: 2,
    name: "Gilberto Itamar Bonora Vieira",
    avatar: null,
    rating: 5,
    text: "Ótimo atendimento, serviços e produtos de qualidade."
  },
  {
    id: 3,
    name: "Marli Alves",
    avatar: "/marlialves.png",
    rating: 5,
    text: "Excelente em td amei ."
  },
  {
    id: 4,
    name: "Luisfernando Foiatto",
    avatar: "/luisfernandofoiato.png",
    rating: 5,
    text: "Bom"
  },
  {
    id: 5,
    name: "Anny Laissa Vieira",
    avatar: null,
    rating: 5,
    text: "Atendimento maravilhoso, profissionais muito dedicados e ambiente acolhedor. Meu pet foi super bem tratado!"
  },
  {
    id: 6,
    name: "Jordan",
    avatar: "/jordan.png",
    rating: 5,
    text: "Excelente clínica, estrutura de primeira e equipe super atenciosa. Recomendo de olhos fechados!"
  },
  {
    id: 7,
    name: "Nathanael Willian Conti",
    avatar: "/natanael.png",
    rating: 5,
    text: "Gostei muito do atendimento. Os veterinários são muito atenciosos e tiraram todas as minhas dúvidas."
  },
  {
    id: 8,
    name: "Rosana Martins",
    avatar: null,
    rating: 5,
    text: "Levei meus pets e fui muito bem atendida. A veterinária foi super carinhosa e explicou tudo certinho."
  },
  {
    id: 9,
    name: "Aline Sossela",
    avatar: null,
    rating: 5,
    text: "Clínica com ótima estrutura, super limpa e com profissionais muito educados e capacitados."
  },
  {
    id: 10,
    name: "Alexandre Oliveira",
    avatar: "/alexandre.png",
    rating: 5,
    text: "Melhor banho e tosa da cidade! Meu cachorro volta sempre cheiroso e calmo. Atendimento impecável."
  },
  {
    id: 11,
    name: "Leonardo Volpato",
    avatar: "/leonardo.png",
    rating: 5,
    text: "Muito bom o atendimento. Preços justos e profissionais que realmente amam o que fazem."
  },
  {
    id: 12,
    name: "Lucas Rosso",
    avatar: "/lucasrosso.png",
    rating: 5,
    text: "Equipe nota 1000! Sempre dispostos a ajudar e tratar nossos pets com o maior carinho do mundo."
  },
  {
    id: 13,
    name: "joao carlos moraes barros barros",
    avatar: null,
    rating: 5,
    text: "Atendimento rápido no momento de urgência e um cuidado incrível. Agradeço por tudo!"
  },
  {
    id: 14,
    name: "Carlos Borges Fortes",
    avatar: "/carlosborges.png",
    rating: 5,
    text: "Ótima clínica, bons profissionais e muita agilidade. O pet shop também tem bastante variedade."
  },
  {
    id: 15,
    name: "Maria Cristina Bristotti",
    avatar: null,
    rating: 5,
    text: "Excelente atendimento dos veterinários e na recepção. Lugar que transmite muita confiança."
  },
  {
    id: 16,
    name: "jaai pereira",
    avatar: "/jaaipererira.png",
    rating: 5,
    text: "Sou cliente há anos e o serviço continua excelente, muito atenciosos em todos os detalhes."
  }
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-100 dark:bg-slate-800 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex justify-center items-center bg-brand-50 dark:bg-slate-900 text-brand-600 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm transform -rotate-1">
            <MessageSquareQuote className="w-4 h-4 mr-2" /> O Que Dizem Sobre Nós
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-900 dark:text-slate-100 mb-6 leading-tight">
            Avaliações no Google
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            A opinião de quem já confiou a saúde do seu melhor amigo em nossas mãos é o que nos move todos os dias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: "easeOut" }}
              className="bg-brand-50 rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-100 dark:border-slate-800 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {review.avatar ? (
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-brand-200 text-brand-700 flex items-center justify-center font-black text-xl border-2 border-white shadow-sm">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-slate-100 text-sm sm:text-base leading-tight break-words pr-2 max-w-[150px] sm:max-w-[180px]">{review.name}</h4>
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6 flex-shrink-0" />
              </div>
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 font-medium text-sm sm:text-base mb-2 flex-grow">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

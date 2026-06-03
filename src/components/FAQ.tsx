import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o agendamento de consultas?",
    answer: "Você pode agendar a consulta do seu pet diretamente pelo nosso WhatsApp (54 99266-9029), telefone ou presencialmente em nossa clínica. Recomendamos o agendamento prévio para garantir o melhor horário para você e reduzir o tempo de espera."
  },
  {
    question: "Quais são as recomendações para o preparo pré-cirúrgico?",
    answer: "O preparo padrão exige jejum alimentar (sólidos) de 8 a 12 horas e jejum hídrico (água) de 2 a 4 horas antes do procedimento. No entanto, as instruções exatas podem variar de acordo com a idade, o peso do pet e o tipo de cirurgia. Nossos veterinários repassarão as orientações detalhadas durante a consulta pré-cirúrgica."
  },
  {
    question: "Vocês realizam atendimento de urgência ou emergência?",
    answer: "Sim, realizamos atendimentos de urgência dentro do nosso horário de funcionamento (Seg a Sex: 08:30h às 17:30h | Sáb: 09h às 12h). Em casos críticos, o seu pet terá prioridade total no atendimento. Recomendamos que você nos ligue ou envie uma mensagem avisando a caminho da clínica para anteciparmos o suporte."
  },
  {
    question: "O que devo levar no dia da consulta?",
    answer: "Sempre que possível, traga a carteirinha de vacinação e o histórico médico, exames anteriores e receituários do seu pet. Se ele estiver tomando alguma medicação atualmente, traga as embalagens ou anote os nomes, para facilitar a avaliação do nosso time veterinário."
  },
  {
    question: "Meu pet precisa fazer jejum para exames de sangue?",
    answer: "Para a grande maioria dos exames de sangue de rotina, o jejum é necessário (geralmente de 8 a 12 horas para alimentação), porém a água pode ser oferecida à vontade. Recomendamos que você pergunte no momento do agendamento se o exame específico do seu animal precisa de preparos diferentes."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-100 rounded-full mix-blend-multiply filter blur-[70px] opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="mb-4 inline-flex justify-center items-center bg-white dark:bg-[#020617] text-brand-600 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm transform -rotate-1">
            <HelpCircle className="w-4 h-4 mr-2" /> Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-900 dark:text-slate-100 mb-4 sm:mb-6 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 font-medium px-4">
            Abaixo estão as respostas para dúvidas muito comuns sobre nossos agendamentos, preparos e consultas.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`bg-white dark:bg-slate-900 rounded-2xl shadow-sm border overflow-hidden transition-colors duration-300 ${isActive ? 'border-brand-300' : 'border-brand-100 dark:border-slate-800 hover:border-brand-200'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-5 sm:px-6 sm:py-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className={`font-bold pr-4 text-base sm:text-lg transition-colors duration-300 ${isActive ? 'text-brand-700' : 'text-brand-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-100 dark:bg-slate-800'}`}>
                    <ChevronDown 
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-gray-600 font-medium leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

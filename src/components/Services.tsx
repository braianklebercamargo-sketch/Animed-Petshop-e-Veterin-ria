import React from 'react';
import { Stethoscope, Home, Activity, Scissors, ShoppingBag, Heart, ShieldPlus } from 'lucide-react';

const services = [
  {
    title: 'Clínica Veterinária',
    description: 'Atendimento clínico geral para cães e gatos com profissionais apaixonados pelo que fazem.',
    icon: Heart
  },
  {
    title: 'Consultas',
    description: 'Acompanhamento preventivo, diagnósticos precisos e tratamentos adequados para cada fase da vida do pet.',
    icon: Stethoscope
  },
  {
    title: 'Atendimento Domiciliar',
    description: 'Conforto e comodidade para você e seu pet. Vamos até a sua casa para consultas de rotina.',
    icon: Home
  },
  {
    title: 'Internações',
    description: 'Ambiente monitorado e climatizado, com equipe presente para cuidar da recuperação do seu pet.',
    icon: Activity
  },
  {
    title: 'Cirurgias',
    description: 'Centro cirúrgico equipado para procedimentos seguros, com anestesia inalatória e monitoramento completo.',
    icon: ShieldPlus
  },
  {
    title: 'Banho e Tosa',
    description: 'Estética animal com produtos de qualidade, profissionais cuidadosos e toalhas esterilizadas.',
    icon: Scissors
  },
  {
    title: 'Pet Shop e Farmácia',
    description: 'Ampla variedade de rações, medicamentos, acessórios, caminhas e brinquedos para alegrar seu pet.',
    icon: ShoppingBag
  }
];

import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="servicos" className="py-28 bg-brand-700 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 dark:bg-slate-9000 rounded-full mix-blend-overlay filter blur-[120px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="mb-4 inline-block bg-brand-500/30 text-white border border-brand-400 px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest shadow-sm backdrop-blur-sm transform rotate-1">
             Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Estrutura Completa para <br/>
            <span className="text-accent-400">
               o seu melhor amigo.
            </span>
          </h2>
          <p className="text-lg text-brand-100 font-medium px-6 leading-relaxed max-w-2xl mx-auto">
            Unimos clínica, pet shop e estética com muito amor. Tudo em um só lugar, com comodidade e segurança para a saúde e a alegria do animal.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            // Add custom color themes per card to make it vibrant
            const colors = [
              'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
              'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
              'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
              'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
              'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
              'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
              'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
            ];
            const colorClass = colors[index % colors.length];

            return (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className={`p-8 bg-white dark:bg-[#020617] rounded-3xl border-[6px] border-brand-100 dark:border-slate-800 hover:border-brand-300 shadow-xl hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.4)] transition-all duration-500 transform hover:-translate-y-2 group flex flex-col items-start`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${colorClass} shadow-inner`}>
                <service.icon className="w-8 h-8 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-900 dark:text-slate-100 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-700/80 font-bold text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </div>
    </section>
  );
}

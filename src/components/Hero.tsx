import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-brand-50 dark:bg-slate-900 pt-16 pb-32 lg:pt-24 lg:pb-48 overflow-hidden z-0">
      {/* Playful Background Blobs & Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-64 h-64 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="mb-6 inline-flex items-center bg-white dark:bg-[#020617] text-brand-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_20px_-4px_rgba(37,99,235,0.2)] border border-brand-100 dark:border-slate-800 hover:scale-105 transition-transform"
            >
              <span className="text-xl mr-2">🐾</span> Saúde e Alegria em um só lugar
            </motion.div>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-brand-950 dark:text-white leading-[1.1] mb-6"
            >
              Cuidado que<br/>
              <span className="text-brand-600">
                gera
              </span> 
              <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400 drop-shadow-sm">
                Alegria.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Com a Animed você tem estrutura completa, atendimento humanizado e os melhores profissionais em Passo Fundo para garantir a saúde e felicidade do seu amigão.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#servicos" className="w-full sm:w-auto bg-brand-600 text-white hover:bg-brand-700 px-8 py-3.5 rounded-2xl font-bold shadow-[0_8px_0_0_#1d4ed8] hover:shadow-[0_4px_0_0_#1d4ed8] hover:translate-y-1 transition-all text-center">
                Conhecer Serviços
              </a>
              <a href="#contato" className="w-full sm:w-auto bg-white text-brand-600 hover:bg-gray-50 border-2 border-brand-100 px-8 py-3.5 rounded-2xl font-bold transition-all text-center">
                Falar Conosco
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="lg:w-1/2 relative flex justify-center items-center h-[350px] sm:h-[500px] lg:h-[600px] mt-10 lg:mt-0 w-full"
          >
            {/* Main Clinic Image */}
            <div className="absolute right-0 lg:-right-4 top-0 w-[75%] h-[220px] sm:h-[350px] lg:h-[420px] z-10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(37,99,235,0.3)] border-[6px] sm:border-[8px] border-white dark:border-slate-800 bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/animed.webp" 
                alt="Frente da Clínica Veterinária Animed" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Happy Pet Image */}
            <div className="absolute left-0 lg:-left-8 bottom-0 w-[65%] h-[200px] sm:h-[320px] lg:h-[380px] z-20 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border-[6px] sm:border-[8px] border-white bg-white -rotate-6 hover:-rotate-2 transition-transform duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cachorro Feliz" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating decoration elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-4 lg:-left-12 z-30 bg-white p-3 rounded-2xl shadow-xl border-2 border-brand-100"
            >
              <span className="text-4xl">🐶</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 lg:-bottom-8 right-1/4 z-30 bg-white p-4 rounded-3xl shadow-xl border-2 border-accent-100"
            >
              <span className="text-4xl">🐱</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SVG Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-1">
        <svg className="relative block w-full h-[60px] md:h-[100px] text-white dark:text-[#020617] fill-current" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.4,192.27,108.9,236.4,100.67,280.9,82.16,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}

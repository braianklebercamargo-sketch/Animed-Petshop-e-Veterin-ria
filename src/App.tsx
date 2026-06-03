/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        
        {/* Playful About Section */}
        <section id="sobre" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                  <div className="mb-4 sm:mb-6 inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transform -rotate-2">
                    Sobre Nós
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-900 dark:text-slate-100 mb-6 sm:mb-8 leading-tight">
                     Paixão por cuidar, <br className="hidden sm:block" />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                       tecnologia para curar.
                     </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-slate-400 leading-relaxed font-medium mb-4 sm:mb-6">
                    A Animed não é só uma clínica. Somos um centro completo de bem-estar animal onde o amor que temos pelos pets encontra a excelência profissional.
                  </p>
                  <p className="text-base sm:text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
                    Nossa equipe de médicos veterinários especialistas está sempre pronta para atender o seu melhor amigo com carinho, utilizando tecnologia de ponta e uma estrutura inovadora.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <div className="flex -space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white dark:border-slate-800 bg-brand-200 flex items-center justify-center text-brand-700 font-bold text-lg sm:text-xl shadow-sm z-30">👨‍⚕️</div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-accent-200 flex items-center justify-center text-accent-700 font-bold text-lg sm:text-xl shadow-sm z-20">👩‍⚕️</div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-lg sm:text-xl shadow-sm z-10">🩺</div>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-slate-300">Equipe apaixonada e competente</span>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-500 rounded-[3rem] transform rotate-3 scale-100 lg:scale-105 z-0"></div>
                  <div className="relative z-10 w-full h-[350px] sm:h-[500px] lg:h-[600px] rounded-[2rem] sm:rounded-[3rem] border-[6px] border-white shadow-[0_20px_50px_-12px_rgba(37,99,235,0.4)] overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Cachorro Sorrindo" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-5 rounded-2xl text-center text-white">
                          <div className="text-2xl sm:text-4xl font-black mb-1">+10k</div>
                          <div className="text-brand-100 font-bold text-[10px] sm:text-xs uppercase tracking-wider">Pets Atendidos</div>
                        </div>
                        <div className="bg-accent-500 p-3 sm:p-5 rounded-2xl text-center text-white shadow-xl transform -translate-y-2 sm:-translate-y-5">
                          <div className="text-2xl sm:text-4xl font-black mb-1 text-white">100%</div>
                          <div className="text-red-50 font-bold text-[10px] sm:text-xs uppercase tracking-wider">Amor e Dedicação</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </section>

        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

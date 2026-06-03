import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-50 dark:bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 border-[3px] sm:border-4 border-white dark:border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-4 inline-block bg-white text-brand-600 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm transform -rotate-1">
                 Onde passear Au 🐶? Brincadeira, Onde Estamos!
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-900 dark:text-slate-100 mb-4 sm:mb-6 mt-2 sm:mt-4">
                Visite a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Animed</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 mb-8 sm:mb-10 font-medium leading-relaxed">
                Estamos de portas abertas para receber você e seu pet com muito amor. Venha tomar um café com a gente ou mande uma mensagem!
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center group bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-sm border border-transparent hover:border-brand-200 transition-all cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-brand-100 dark:bg-slate-800 text-brand-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-slate-100">Endereço</h4>
                    <p className="text-gray-500 dark:text-slate-400 font-medium text-xs sm:text-sm mt-0.5 sm:mt-1">
                      R. Uruguai, 1329 - Centro | Passo Fundo - RS
                    </p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center group bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-transparent hover:border-brand-200 transition-all cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">WhatsApp & Telefone</h4>
                    <p className="text-gray-500 font-medium text-xs sm:text-sm mt-0.5 sm:mt-1">
                      Fixo/Whats: <a href="https://wa.me/5554992669029" className="text-emerald-600 hover:text-emerald-700 underline font-bold" target="_blank" rel="noreferrer">(54) 99266-9029</a>
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center group bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-transparent hover:border-brand-200 transition-all cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">Horário Normal</h4>
                    <p className="text-gray-500 font-medium text-xs sm:text-sm mt-0.5 sm:mt-1 mb-1">
                      Seg-Sex: 08:30h às 12:00h e 13:30h às 17:30h | Sáb: 09:00h às 12:00h
                    </p>
                    <span className="inline-block bg-brand-100 text-brand-700 text-[10px] sm:text-xs font-bold px-2 py-1 rounded shadow-sm mt-1">Dom: Fechado</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] border-[6px] sm:border-8 border-white bg-white rounded-[2rem] sm:rounded-3xl shadow-xl overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 mt-6 lg:mt-0"
            >
              {/* Embedded Google Map Placeholder */}
              <iframe 
                title="Mapa de Localização Animed Passo Fundo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.719717529688!2d-52.41160372338002!3d-28.261899149472314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2bf8b3f1737e5%3A0xe5482e9d29026364!2sR.%20Uruguai%2C%201329%20-%20Centro%2C%20Passo%20Fundo%20-%20RS%2C%2099010-111!5e0!3m2!1spt-BR!2sbr!4v1716912345678!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

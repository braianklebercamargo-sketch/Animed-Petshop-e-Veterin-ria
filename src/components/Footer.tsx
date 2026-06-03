import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 border-t-[16px] border-accent-500 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBMMTQgMTRNMjYgMjZMMDAgMDBNMTAgMjBMIDMwIDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGZpbGw9Im5vbmUiIC8+Cjwvc3ZnPg==')] opacity-50 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-b border-brand-800 pb-12 md:pb-16 mb-8 md:mb-10 text-center md:text-left">
          
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 flex flex-col items-center md:items-start"
          >
            <div className="flex items-center mb-6 bg-white w-max p-3 rounded-2xl">
              <img src="/animedlogo.jpg" alt="Animed" className="h-10 w-auto mix-blend-multiply" />
            </div>
            <p className="text-brand-100/90 leading-relaxed font-medium mb-8 text-sm max-w-xs md:max-w-none">
              Sua clínica veterinária e pet shop com o cuidado e a tecnologia que o seu melhor amigo merece.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.1, rotate: 5 }} href="https://www.instagram.com/animedpf/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl text-white hover:bg-accent-500 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5 stroke-[2]" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} href="https://share.google/eW7oRLt7aP4fBiPch" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl text-white hover:bg-brand-50 dark:bg-slate-9000 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5 stroke-[2]" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-black text-white mb-6 md:mb-8 md:border-l-4 md:border-accent-500 md:pl-3">Links Rápidos</h4>
            <ul className="space-y-4 font-medium flex flex-col items-center md:items-start">
              <li><a href="#inicio" className="text-brand-200 hover:text-accent-400 transition-colors inline-block md:hover:translate-x-2 transform duration-300">Início</a></li>
              <li><a href="#sobre" className="text-brand-200 hover:text-accent-400 transition-colors inline-block md:hover:translate-x-2 transform duration-300">Sobre a Clínica</a></li>
              <li><a href="#servicos" className="text-brand-200 hover:text-accent-400 transition-colors inline-block md:hover:translate-x-2 transform duration-300">Nossos Serviços</a></li>
              <li><a href="#avaliacoes" className="text-brand-200 hover:text-accent-400 transition-colors inline-block md:hover:translate-x-2 transform duration-300">Avaliações de Clientes</a></li>
              <li><a href="#contato" className="text-brand-200 hover:text-accent-400 transition-colors inline-block md:hover:translate-x-2 transform duration-300">Contato & Localização</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-black text-white mb-6 md:mb-8 md:border-l-4 md:border-purple-500 md:pl-3">Destaques</h4>
            <ul className="space-y-4 font-medium flex flex-col items-center md:items-start">
              <li className="text-brand-200 flex items-center md:before:content-[''] md:before:w-2 md:before:h-2 md:before:bg-accent-500 md:before:rounded-full md:before:mr-3">Clínica Veterinária</li>
              <li className="text-brand-200 flex items-center md:before:content-[''] md:before:w-2 md:before:h-2 md:before:bg-purple-500 md:before:rounded-full md:before:mr-3">Atendimento Domiciliar</li>
              <li className="text-brand-200 flex items-center md:before:content-[''] md:before:w-2 md:before:h-2 md:before:bg-emerald-500 md:before:rounded-full md:before:mr-3">Pet Shop Especializado</li>
              <li className="text-brand-200 flex items-center md:before:content-[''] md:before:w-2 md:before:h-2 md:before:bg-rose-500 md:before:rounded-full md:before:mr-3">Estética Animal</li>
            </ul>
          </motion.div>
          
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-brand-300 font-bold tracking-wide text-center"
        >
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Animed Clínica Veterinária.</p>
          <p className="flex items-center">
            Feito com <span className="mx-1 text-rose-500">❤️</span> em Passo Fundo
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

import { Phone, MapPin, Clock, Menu, X, Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`bg-white dark:bg-[#020617] sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg py-0' : 'shadow-none py-1 sm:py-2'}`}>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        className="bg-brand-600 text-white text-sm font-semibold overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:flex-row sm:justify-between items-center min-h-[36px] sm:min-h-[40px] py-2 sm:py-0">
          {/* Desktop & Tablet */}
          <div className="hidden sm:flex items-center space-x-6">
            <span className="flex items-center hover:text-accent-200 transition-colors cursor-pointer"><Phone className="w-4 h-4 mr-2" /> (54) 99266-9029</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Seg a Sex: 08:30h às 17:30h | Sáb: 09h às 12h</span>
          </div>
          <div className="hidden sm:flex items-center hover:text-accent-200 transition-colors cursor-pointer text-sm">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">R. Uruguai, 1329 - Centro, Passo Fundo</span>
          </div>
          
          {/* Mobile */}
          <div className="flex sm:hidden items-center justify-between w-full text-[11px] px-1">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1.5" /> (54) 99266-9029</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1.5" /> Seg a Sex, 08:30h - 17:30h</span>
          </div>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center py-2"
          >
            <a href="#inicio" className="flex items-center shrink-0">
              <img 
                src="/animedlogo.jpg" 
                alt="Animed Clínica Veterinária e Pet Shop" 
                className="h-10 sm:h-14 md:h-16 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:rounded-xl dark:px-2 dark:py-1"
              />
            </a>
          </motion.div>
          <motion.nav 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex space-x-8 h-full items-center"
          >
            <a href="#inicio" className="text-gray-700 dark:text-slate-300 hover:text-brand-600 font-bold transition-colors relative group">
              Início
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-accent-500 rounded-full transition-all group-hover:w-full group-hover:-translate-x-1/2"></span>
            </a>
            <a href="#sobre" className="text-gray-700 dark:text-slate-300 hover:text-brand-600 font-bold transition-colors relative group">
              Sobre
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-accent-500 rounded-full transition-all group-hover:w-full group-hover:-translate-x-1/2"></span>
            </a>
            <a href="#servicos" className="text-gray-700 dark:text-slate-300 hover:text-brand-600 font-bold transition-colors relative group">
              Serviços
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-accent-500 rounded-full transition-all group-hover:w-full group-hover:-translate-x-1/2"></span>
            </a>
            <a href="#avaliacoes" className="text-gray-700 dark:text-slate-300 hover:text-brand-600 font-bold transition-colors relative group">
              Avaliações
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-accent-500 rounded-full transition-all group-hover:w-full group-hover:-translate-x-1/2"></span>
            </a>
            <a href="#contato" className="text-gray-700 dark:text-slate-300 hover:text-brand-600 font-bold transition-colors relative group">
              Contato
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-accent-500 rounded-full transition-all group-hover:w-full group-hover:-translate-x-1/2"></span>
            </a>
          </motion.nav>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex items-center space-x-4"
          >
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 dark:text-slate-400 transition-colors"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-accent-500" /> : <Moon className="w-5 h-5" />}
             </button>
             <a href="https://wa.me/5554992669029" target="_blank" rel="noreferrer" className="bg-accent-500 text-white hover:bg-accent-600 px-6 py-2.5 rounded-2xl font-black shadow-[0_8px_0_0_#c2410c] hover:shadow-[0_4px_0_0_#c2410c] hover:translate-y-1 transition-all">
               Agendar Consulta
             </a>
          </motion.div>
          
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-slate-300 focus:outline-none bg-gray-50 dark:bg-slate-900 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-accent-500" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-slate-300 hover:text-brand-600 focus:outline-none p-2 bg-gray-50 dark:bg-slate-900 rounded-lg"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white dark:bg-[#020617] border-t border-gray-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl hover:bg-brand-50 dark:hover:bg-slate-800 dark:bg-slate-900 text-base font-bold text-gray-700 dark:text-slate-300 hover:text-brand-600 transition-colors">Início</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl hover:bg-brand-50 dark:hover:bg-slate-800 text-base font-bold text-gray-700 dark:text-slate-300 hover:text-brand-600 transition-colors">Sobre Nós</a>
              <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl hover:bg-brand-50 dark:hover:bg-slate-800 text-base font-bold text-gray-700 dark:text-slate-300 hover:text-brand-600 transition-colors">Serviços</a>
              <a href="#avaliacoes" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl hover:bg-brand-50 dark:hover:bg-slate-800 text-base font-bold text-gray-700 dark:text-slate-300 hover:text-brand-600 transition-colors">Avaliações</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl hover:bg-brand-50 dark:hover:bg-slate-800 text-base font-bold text-gray-700 dark:text-slate-300 hover:text-brand-600 transition-colors">Contato</a>
              <div className="pt-4 px-3">
                <a href="https://wa.me/5554992669029" target="_blank" rel="noreferrer" className="w-full block text-center bg-accent-500 text-white hover:bg-accent-600 px-6 py-3 rounded-xl font-black shadow-sm transition-all mb-2">
                   Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

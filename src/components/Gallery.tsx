import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  { id: 1, src: '/local1.png', alt: 'Estrutura da clínica', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/cirurgia.png', alt: 'Centro Cirúrgico', span: 'col-span-1' },
  { id: 3, src: '/antesedepois1.png', alt: 'Antes e Depois do Banho e Tosa', span: 'col-span-1' },
  { id: 4, src: '/antesedepois2.png', alt: 'Antes e Depois do Banho e Tosa', span: 'col-span-1' },
  { id: 5, src: '/antesedepois3.png', alt: 'Antes e Depois do Banho e Tosa', span: 'col-span-1' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-brand-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="mb-4 inline-block bg-white dark:bg-[#020617] text-brand-600 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm transform -rotate-1">
             Nossos Momentos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-900 dark:text-slate-100 mb-6">
            Galeria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Fotos</span>
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Um pouco da nossa estrutura, centro cirúrgico e o carinho com que tratamos cada pet.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-lg group ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-wide uppercase">Ver foto</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

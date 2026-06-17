import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden z-10">
      
      {/* Subtle Background Moodboard Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity scale-105 pointer-events-none"
        style={{ backgroundImage: `url('/new image/Create_a_cinematic_hero_section_202605232200.jpeg')` }}
      />
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#4B0000]/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-[#D4AF37] font-poppins"
          >
            <span className="material-symbols-outlined text-[14px]">star</span>
            <span>Mughal Royal Tradition</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-cormorant font-bold text-5xl md:text-7xl leading-tight text-white"
          >
            Experience <span className="text-[#D4AF37] italic font-normal block md:inline">Royal Flavors</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-poppins text-base md:text-lg text-[#E8D8B8]/80 leading-relaxed max-w-xl"
          >
            {t('heroSubtitle') || 'Authentic Dum Biryani Crafted With Tradition, Aroma & Passion.'}
            <span className="block font-bengali text-[#D4AF37]/80 text-sm mt-3 tracking-wide">
              রাজকীয় স্বাদ। সমৃদ্ধ সুবাস। অবিস্মরণীয় স্বাদ।
            </span>
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <Link to="/menu" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#4B0000] to-[#6b1e1e] text-white border border-[#D4AF37] px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all font-poppins"
              >
                <span>Explore Menu</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </motion.button>
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, bg: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border border-[#E8D8B8]/30 text-[#E8D8B8] px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-colors font-poppins"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>Order Now</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Video / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="lg:col-span-6 w-full flex justify-center relative group"
        >
          {/* Glowing Shadow Behind Video */}
          <div className="absolute inset-0 bg-[#D4AF37]/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="relative w-full max-w-[500px] aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-[#D4AF37]/20 bg-black/40 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            
            {/* Cinematic Hero Video */}
            <video 
              src="/video/hero section.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
            
            {/* Steam / Glowing particles overlay effect inside card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0B0B0B]/80 backdrop-blur-md border border-[#D4AF37]/20 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="font-cormorant font-bold text-lg text-[#D4AF37]">Royal Heritage Feast</h4>
                <p className="font-poppins text-xs text-white/60">Slow cooked over fire in small batches</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#4B0000] flex items-center justify-center border border-[#D4AF37]/50 shadow-lg">
                <span className="material-symbols-outlined text-[#D4AF37] text-sm animate-pulse">local_fire_department</span>
              </div>
            </div>

          </div>

          {/* Luxury visual indicators */}
          <div className="absolute -top-4 -right-4 bg-[#0B0B0B] border border-[#D4AF37]/30 p-4 rounded-2xl shadow-xl flex items-center gap-3 glass-panel pointer-events-none">
            <span className="material-symbols-outlined text-[#D4AF37] text-2xl animate-spin" style={{ animationDuration: '6s' }}>hourglass_empty</span>
            <div className="text-left">
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-poppins">Preparation Method</p>
              <p className="text-xs text-[#E8D8B8] font-bold">12-Hour Dum Pukht</p>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Elegant Bottom Border separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
}

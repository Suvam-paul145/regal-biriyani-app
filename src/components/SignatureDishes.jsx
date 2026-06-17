import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

function DishCard({ title, titleBn, desc, image, tag, price }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = -(y - yc) / 10;
    const angleY = (x - xc) / 10;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl group flex flex-col h-full cursor-pointer"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
    >
      {/* Decorative Gold Grid Corners */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D4AF37]/40 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#D4AF37]/40 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#D4AF37]/40 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]/40 pointer-events-none" />

      {/* Image container */}
      <div className="h-64 relative overflow-hidden w-full bg-black/40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Steam overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />

        {tag && (
          <div className="absolute top-4 left-4 bg-[#4B0000] border border-[#D4AF37]/60 text-white font-poppins text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
            {tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="font-cormorant font-bold text-2xl text-white group-hover:text-[#D4AF37] transition-colors duration-300">
          {title}
        </h3>
        <h4 className="font-bengali text-[#D4AF37] text-sm mt-1 mb-4 font-normal">
          {titleBn}
        </h4>
        <p className="font-poppins text-white/60 text-sm leading-relaxed mb-6 flex-1">
          {desc}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-auto">
          <span className="font-poppins text-xs uppercase tracking-widest text-[#D4AF37] bg-[#4B0000]/30 px-3.5 py-1.5 rounded-md border border-[#D4AF37]/10">
            {price}
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-[#4B0000] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0B0B] border border-[#D4AF37]/30 flex items-center justify-center transition-all duration-300 shadow-md"
          >
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default function SignatureDishes() {
  const { t } = useLanguage();

  const signatureMenu = [
    {
      title: 'Classic Chicken Biryani',
      titleBn: 'ক্লাসিক চিকেন বিরিয়ানি',
      desc: 'Layers of premium, aged basmati rice cooked with succulent chicken cuts, golden saffron, and aromatic spices in traditional Awadhi style.',
      image: '/new image/chicken_biriyani_120_chicken_biriyani_202605232158.jpeg',
      tag: 'Chef Signature',
      price: t('contactPrice') || 'Contact for Price'
    },
    {
      title: 'Royal Mutton Biryani',
      titleBn: 'রয়্যাল মাটন বিরিয়ানি',
      desc: 'Tender baby mutton slow-cooked with long-grain basmati, saffron streams, and 21 rare spices in a wood-fired Handi.',
      image: '/new image/only_keep_the_biriyani_and_202605232201.jpeg',
      tag: 'Imperial Legend',
      price: t('contactPrice') || 'Contact for Price'
    },
    {
      title: 'Nawabi Chicken Chaap',
      titleBn: 'নওয়াবি চিকেন চাপ',
      desc: 'Slow simmered chicken leg cuts in a velvety, rich cashew nut and poppy seed paste gravy infused with saffron.',
      image: '/img/chicken_chaap.png',
      tag: 'Mughal Classic',
      price: t('contactPrice') || 'Contact for Price'
    },
    {
      title: 'Golden Fried Chicken',
      titleBn: 'গোল্ডেন ফ্রাইড চিকেন',
      desc: 'Crispy, crunchy on the outside, tender and juicy on the inside chicken bites marinated in our house spice blend.',
      image: '/img/fried_chicken.png',
      tag: 'Crispy Delight',
      price: t('contactPrice') || 'Contact for Price'
    }
  ];

  return (
    <section className="bg-[#0B0B0B] py-24 px-6 relative z-10 overflow-hidden">
      
      {/* Background visual asset overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] scale-105 pointer-events-none"
        style={{ backgroundImage: `url('/new image/Create_a_cinematic_premium_signature_202605232201.jpeg')` }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
          <h2 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
            Imperial <span className="text-[#D4AF37] italic font-normal">Signatures</span>
          </h2>
          <h3 className="font-bengali text-[#D4AF37] text-lg mt-2 font-normal">
            আমাদের রাজকীয় সিগনেচার ডিশ
          </h3>
          <p className="font-poppins text-white/50 text-sm md:text-base leading-relaxed max-w-xl mt-4">
            A curated collection of culinary masterpieces passed down through generations, cooked slow and served with honor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureMenu.map((dish, i) => (
            <motion.div
              key={dish.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <DishCard {...dish} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

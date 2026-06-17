import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function MenuSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('All');

  const menuItems = [
    // Biryani
    { name: 'Chicken Biryani', bn: 'চিকেন বিরিয়ানি', category: 'Biryani', image: '/new image/chicken_biriyani_120_chicken_biriyani_202605232158.jpeg', isSpecial: false },
    { name: 'Chicken Biryani Special', bn: 'চিকেন বিরিয়ানি স্পেশাল', category: 'Biryani', image: '/new image/chicken_biriyani_120_chicken_biriyani_202605232158.jpeg', isSpecial: true },
    { name: 'Mutton Biryani', bn: 'মাটন বিরিয়ানি', category: 'Biryani', image: '/new image/only_keep_the_biriyani_and_202605232201.jpeg', isSpecial: false },
    { name: 'Mutton Biryani Special', bn: 'মাটন বিরিয়ানি স্পেশাল', category: 'Biryani', image: '/new image/only_keep_the_biriyani_and_202605232201.jpeg', isSpecial: true },
    
    // Starters / Sides
    { name: 'Chicken Chaap', bn: 'চিকেন চাপ', category: 'Starters', image: '/img/chicken_chaap.png', isSpecial: false },
    { name: 'Fried Chicken', bn: 'ফ্রাইড চিকেন', category: 'Starters', image: '/img/fried_chicken.png', isSpecial: false },
    { name: 'Chicken Wings', bn: 'চিকেন উইংস', category: 'Starters', image: '/img/chicken_wings.png', isSpecial: false },
    { name: 'Chicken Wing Special', bn: 'চিকেন উইং স্পেশাল', category: 'Starters', image: '/img/chicken_wings.png', isSpecial: true },
    { name: 'Chilli Chicken', bn: 'চিলি চিকেন', category: 'Starters', image: '/img/chilli_chicken.png', isSpecial: false },

    // Quick Bites (Rolls & Momos)
    { name: 'Chicken Roll', bn: 'চিকেন রোল', category: 'Quick Bites', image: '/img/chicken_roll.png', isSpecial: false },
    { name: 'Egg Roll', bn: 'ডিম রোল', category: 'Quick Bites', image: '/img/egg_roll.png', isSpecial: false },
    { name: 'Egg Chicken Roll', bn: 'ডিম চিকেন রোল', category: 'Quick Bites', image: '/img/chicken_roll.png', isSpecial: false },
    { name: 'Chicken Momo', bn: 'চিকেন মোমো', category: 'Quick Bites', image: '/img/chicken_momo.png', isSpecial: false },
    { name: 'Paneer Momo', bn: 'পনির মোমো', category: 'Quick Bites', image: '/img/chicken_momo.png', isSpecial: false },
    { name: 'Fried Momo', bn: 'ফ্রাইড মোমো', category: 'Quick Bites', image: '/img/fried_momo.png', isSpecial: false },
    { name: 'Pan Fried Momo', bn: 'প্যান ফ্রাইড মোমো', category: 'Quick Bites', image: '/img/fried_momo.png', isSpecial: false },
    { name: 'Laccha Paratha', bn: 'লাচ্ছা পরোটা', category: 'Quick Bites', image: '/img/laccha_paratha.png', isSpecial: false },

    // Drinks
    { name: 'Borhani', bn: 'বোরহানি', category: 'Drinks', image: '/img/borhani.png', isSpecial: false }
  ];

  const categories = ['All', 'Biryani', 'Starters', 'Quick Bites', 'Drinks'];

  const filteredItems = activeTab === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <section className="bg-[#0B0B0B] py-24 px-6 relative z-10 border-t border-white/5" id="menu">
      {/* Background Visual Asset */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-color-dodge scale-105 pointer-events-none"
        style={{ backgroundImage: `url('/new image/Luxury_website_menu_card_for_202605232201.jpeg')` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
          <h2 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
            The Royal <span className="text-[#D4AF37] italic font-normal">Card</span>
          </h2>
          <h3 className="font-bengali text-[#D4AF37] text-lg mt-2 font-normal">
            আমাদের রাজকীয় মেনু কার্ড
          </h3>
          <p className="font-poppins text-white/50 text-sm md:text-base leading-relaxed max-w-xl mt-4">
            Browse through our extensive selection of imperial dishes. Filter by category to build your custom royal feast.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 overflow-x-auto pb-4 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveTab(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-poppins border"
              style={{
                backgroundColor: activeTab === cat ? '#4B0000' : 'rgba(255,255,255,0.03)',
                color: activeTab === cat ? '#D4AF37' : '#E8D8B8',
                borderColor: activeTab === cat ? '#D4AF37' : 'rgba(212, 175, 55, 0.15)',
                boxShadow: activeTab === cat ? '0 0 15px rgba(75, 0, 0, 0.5)' : 'none'
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-[#0B0B0B]/60 backdrop-blur-md border border-[#D4AF37]/10 rounded-2xl overflow-hidden p-4 flex gap-4 items-center group hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl"
              >
                {/* Image */}
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative bg-black/40 border border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.isSpecial && (
                    <div className="absolute top-1 left-1 bg-[#D4AF37] text-[#0B0B0B] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-poppins">
                      Special
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-cormorant font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>
                  <p className="font-bengali text-xs text-[#E8D8B8]/80 mt-0.5">
                    {item.bn}
                  </p>
                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">
                      {t('contactPrice') || 'Contact for Price'}
                    </span>
                    
                    <a 
                      href={`https://wa.me/918514054004?text=I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0B] text-[10px] uppercase tracking-wider px-3 py-1 rounded transition-all duration-300 font-poppins"
                      >
                        Order
                      </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-br from-[#4B0000]/60 to-black border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
          <div className="text-center md:text-left z-10">
            <h3 className="font-cormorant font-bold text-3xl text-white mb-2">Planning a Grand Celebration?</h3>
            <p className="font-poppins text-white/60 text-sm max-w-xl">
              We cater bulk orders for weddings, family feasts, and corporate gatherings. Treat your guests to an authentic royal dining experience.
            </p>
          </div>
          <div className="z-10 flex gap-4 w-full md:w-auto">
            <a href="tel:8514054004" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#4B0000] border border-[#D4AF37] text-[#D4AF37] hover:text-white px-8 py-3 rounded-xl text-xs uppercase tracking-widest font-bold font-poppins transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>Call Royal Court</span>
              </motion.button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

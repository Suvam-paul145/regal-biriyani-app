import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function StorySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0B0B0B] py-24 px-6 relative z-10 border-t border-white/5" id="story">
      {/* Background visual overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] scale-105 pointer-events-none"
        style={{ backgroundImage: `url('/new image/Cinematic_brand_storytelling_visual_for_202605232201.jpeg')` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Media Column */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            
            {/* Main Video Box */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 relative rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl aspect-video"
            >
              <video 
                src="/video/Our Story.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-black/60 border border-[#D4AF37]/30 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-[#D4AF37] font-poppins">
                Heritage Kitchen
              </div>
            </motion.div>

            {/* Sub-Image 1: Dum Cooking */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="col-span-6 relative rounded-2xl overflow-hidden border border-[#D4AF37]/10 shadow-xl aspect-square bg-black/40"
            >
              <img 
                src="/new image/Cinematic_close-up_of_traditional_'Dum'_202605232201.jpeg" 
                alt="Traditional Dum Cooking" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </motion.div>

            {/* Sub-Image 2: Storytelling Visual */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="col-span-6 relative rounded-2xl overflow-hidden border border-[#D4AF37]/10 shadow-xl aspect-square bg-black/40"
            >
              <img 
                src="/new image/Cinematic_brand_storytelling_visual_for_202605232201.jpeg" 
                alt="Brand Storytelling" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </motion.div>

          </div>

          {/* Right Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <h2 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
              The Legend of <span className="text-[#D4AF37] italic font-normal block md:inline">Dum Pukht</span>
            </h2>
            <h3 className="font-bengali text-[#D4AF37] text-lg font-normal">
              আমাদের ঐতিহ্যবাহী রান্নার গল্প
            </h3>
            
            <div className="flex flex-col gap-4 font-poppins text-sm md:text-base text-white/70 leading-relaxed">
              <p>
                Our biryani is not cooked in haste. We practice the ancient art of <span className="text-white font-semibold">Dum Pukht</span>—a slow-cooking method popularized in the royal courts of Awadh.
              </p>
              <p>
                Meat is marinated overnight in yoghurt and hand-ground spices, layered with partially cooked basmati rice, and sealed in clay Handis using wheat dough. The pot is then placed over low fires, allowing the ingredients to steam in their own juices.
              </p>
              <p>
                This slow process captures the rich, deep flavors, releasing a captivating aroma when the seal is finally broken. Every grain tells a story of patience, love, and royal heritage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-6 border-t border-white/5 pt-8">
              <div>
                <h4 className="font-cormorant font-bold text-2xl text-[#D4AF37]">21</h4>
                <p className="font-poppins text-xs text-white/50 uppercase tracking-widest mt-1">Secret Spices</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div>
                <h4 className="font-cormorant font-bold text-2xl text-[#D4AF37]">12 Hours</h4>
                <p className="font-poppins text-xs text-white/50 uppercase tracking-widest mt-1">Marination Time</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div>
                <h4 className="font-cormorant font-bold text-2xl text-[#D4AF37]">100%</h4>
                <p className="font-poppins text-xs text-white/50 uppercase tracking-widest mt-1">Royal Passion</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

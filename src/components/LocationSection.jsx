import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0B0B0B] py-24 px-6 relative z-10 border-t border-white/5" id="location">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
          <h2 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
            Find the <span className="text-[#D4AF37] italic font-normal">Palace</span>
          </h2>
          <h3 className="font-bengali text-[#D4AF37] text-lg mt-2 font-normal">
            আমাদের রাজকীয় ঠিকানা
          </h3>
          <p className="font-poppins text-white/50 text-sm md:text-base leading-relaxed max-w-xl mt-4">
            Visit our physical branch or place an order for fast hot delivery to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/40 border border-[#D4AF37]/10 p-6 rounded-2xl text-left"
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#4B0000] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <span className="material-symbols-outlined text-lg">storefront</span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-white tracking-wide">Main Branch</h4>
                  <p className="font-poppins text-sm text-white/60 leading-relaxed mt-1">
                    Phulia Bus Stand, Near Handloom Market, Nadia, West Bengal 741402
                  </p>
                  <p className="font-bengali text-xs text-[#D4AF37] mt-1">ফুলিয়া বাস স্ট্যান্ড, নদীয়া</p>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="bg-black/40 border border-[#D4AF37]/10 p-6 rounded-2xl text-left"
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#4B0000] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                </div>
                <div className="w-full">
                  <h4 className="font-poppins font-semibold text-white tracking-wide">Opening Hours</h4>
                  <div className="flex justify-between items-center text-sm font-poppins text-white/60 mt-2 border-b border-white/5 pb-2">
                    <span>Monday - Sunday</span>
                    <span className="text-[#D4AF37] font-semibold">11:00 AM - 10:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-[#FFB347] bg-[#4B0000]/30 px-3 py-1.5 rounded-lg w-fit border border-[#FFB347]/10">
                    <span className="material-symbols-outlined text-[16px] animate-pulse">verified</span>
                    <span className="font-poppins text-[10px] uppercase tracking-wider font-semibold">Open on Public Holidays</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <a href="tel:8514054004" className="w-full">
                <motion.button 
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-[#4B0000] border border-[#D4AF37] text-[#D4AF37] py-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#4B0000]/80 transition-all shadow-lg font-poppins font-semibold text-xs uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-[24px]">call</span>
                  <span>Call Royal Court</span>
                </motion.button>
              </a>

              <a href="https://wa.me/918514054004" target="_blank" rel="noopener noreferrer" className="w-full">
                <motion.button 
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-transparent border border-[#25D366]/40 text-[#25D366] py-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#25D366]/5 transition-all shadow-lg font-poppins font-semibold text-xs uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                  <span>WhatsApp Order</span>
                </motion.button>
              </a>
            </div>

          </div>

          {/* Right: Embedded Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full h-[350px] lg:h-auto rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl relative bg-black/40 min-h-[350px]"
          >
            {/* Google Map Iframe */}
            <iframe 
              title="Regal Biryani Location Map"
              src="https://maps.google.com/maps?q=Phulia%20Bus%20Stand,%20Nadia&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-none filter invert contrast-125 saturate-50 opacity-80"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Gold Frame Highlight Overlay */}
            <div className="absolute inset-0 border border-[#D4AF37]/10 pointer-events-none rounded-3xl" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Aditya Sen',
      role: 'Food Critic',
      review: 'The aroma itself won me over. The grains of rice are perfectly separated, and the mutton pieces were melt-in-the-mouth. Easily the best Biryani in Nadia!',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      name: 'Priyanka Das',
      role: 'Local Resident',
      review: 'We order the Royal Family Pack every Saturday. The combination of Biryani, Chaap, and Firni is absolute heaven. My family loves it!',
      rating: 5,
      date: '1 month ago'
    },
    {
      name: 'Rahul Banerjee',
      role: 'Biryani Connoisseur',
      review: 'Traditional Dum cooking is hard to find done right. Regal Biryani does it perfectly. Fragrant, rich, yet not overly oily. Highly recommended!',
      rating: 5,
      date: '3 days ago'
    }
  ];

  return (
    <section className="bg-[#0B0B0B] py-24 px-6 relative z-10 border-t border-white/5" id="testimonials">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4B0000]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
          <h2 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
            Royal <span className="text-[#D4AF37] italic font-normal">Accolades</span>
          </h2>
          <h3 className="font-bengali text-[#D4AF37] text-lg mt-2 font-normal">
            আমাদের শুভাকাঙ্ক্ষীদের মতামত
          </h3>
          <p className="font-poppins text-white/50 text-sm md:text-base leading-relaxed max-w-xl mt-4">
            Hear from our honored guests who have dined from our royal court and shared their gastronomic experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-black/40 backdrop-blur-md border border-[#D4AF37]/10 p-8 rounded-3xl relative overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              {/* Gold glow on card hover */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: rev.rating }).map((_, starIdx) => (
                    <span key={starIdx} className="material-symbols-outlined text-[#D4AF37] text-lg fill-current">
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-poppins text-white/80 text-sm leading-relaxed italic mb-8 relative z-10">
                  "{rev.review}"
                </p>
              </div>

              {/* User profile */}
              <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4B0000] border border-[#D4AF37]/30 flex items-center justify-center font-cormorant font-bold text-[#D4AF37] text-lg shadow-inner">
                    {rev.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-poppins text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {rev.name}
                    </h4>
                    <p className="font-poppins text-[10px] text-white/50 uppercase tracking-wider">
                      {rev.role}
                    </p>
                  </div>
                </div>
                <span className="font-poppins text-[10px] text-white/30">
                  {rev.date}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

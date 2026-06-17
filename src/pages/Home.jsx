import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SignatureDishes from '../components/SignatureDishes';
import MenuSection from '../components/MenuSection';
import StorySection from '../components/StorySection';
import Testimonials from '../components/Testimonials';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import ParticleBackground from '../components/ParticleBackground';
import MouseGlow from '../components/MouseGlow';

export default function Home() {
  const { t } = useLanguage();

  return (
    <SmoothScroll>
      <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins select-none">
        
        {/* Global Cinematic Effects */}
        <ParticleBackground />
        <MouseGlow />

        {/* Floating Navigation */}
        <Navbar />

        {/* Interactive Main Body */}
        <main className="relative z-10">
          
          {/* Section 2: Hero */}
          <Hero />

          {/* Section 3: Signature Dishes */}
          <SignatureDishes />

          {/* Section 5: Story & Heritage */}
          <StorySection />

          {/* Section 4: Full Menu Card */}
          <MenuSection />

          {/* Weekend Exclusive Offer Banner */}
          <section className="py-24 px-6 relative z-10 overflow-hidden bg-[#0B0B0B]">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-[#4B0000] via-[#2E1B12] to-[#0B0B0B] border border-[#D4AF37]/30 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-[#4B0000]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Left Content */}
                <div className="relative z-10 w-full lg:w-1/2 text-left flex flex-col items-start gap-6">
                  <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px] animate-pulse">bolt</span>
                    <span>Weekend Exclusive</span>
                  </div>
                  
                  <h2 className="font-cormorant font-bold text-4xl md:text-5xl text-white leading-tight">
                    The Royal Family Pack
                  </h2>
                  <p className="font-poppins text-sm md:text-base text-white/70 leading-relaxed">
                    Make your Saturday grand. Get 4 Mutton Biryanis, 2 Chicken Chaap, and complimentary Firni. Perfect for a royal feast at home with loved ones.
                  </p>
                  
                  <a href="https://wa.me/918514054004?text=I%20want%20to%20pre-order%20the%20Royal%20Family%20Pack" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-[#D4AF37] text-[#0B0B0B] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest font-poppins transition-all"
                    >
                      Pre-order for Saturday
                    </motion.button>
                  </a>
                </div>

                {/* Right Image Frame */}
                <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] group">
                    <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                    
                    <img 
                      src="/new image/only_keep_the_biriyani_and_202605232201.jpeg" 
                      alt="Royal Family Pack" 
                      className="w-full h-full object-cover rounded-full shadow-2xl border-2 border-[#D4AF37]/30 transition-transform duration-1000 group-hover:scale-[1.03]" 
                    />
                    
                    <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-[#0B0B0B] w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-2xl rotate-12 border-2 border-[#0B0B0B]">
                      <span className="text-lg md:text-xl font-bold">-15%</span>
                      <span className="text-[8px] uppercase tracking-wider font-semibold">Off</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Section 6: Testimonials */}
          <Testimonials />

          {/* Section 7: Location & Contacts */}
          <LocationSection />

        </main>

        {/* Section 8: Footer */}
        <Footer />

        {/* Floating Quick Action Contacts */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          <a 
            href="tel:8514054004"
            className="w-14 h-14 bg-[#4B0000] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0B0B] border border-[#D4AF37]/30 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            title="Call Us"
          >
            <span className="material-symbols-outlined text-[26px]">call</span>
          </a>
          <a 
            href="https://wa.me/918514054004"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] border border-[#25D366]/20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            title="Order WhatsApp"
          >
            <svg fill="currentColor" height="26" viewBox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
          </a>
        </div>

      </div>
    </SmoothScroll>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import MouseGlow from '../components/MouseGlow';
import SmoothScroll from '../components/SmoothScroll';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <SmoothScroll>
            <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins select-none">
                
                {/* Global Cinematic Effects */}
                <ParticleBackground />
                <MouseGlow />

                {/* Floating Navigation */}
                <Navbar />

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
                    
                    {/* Header */}
                    <div className="text-center mb-12 flex flex-col items-center">
                        <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
                        <h1 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
                            Visit <span className="text-[#D4AF37] italic font-normal">Us</span>
                        </h1>
                        <p className="text-white/60 text-sm md:text-base mt-2 max-w-md">
                            Experience the heritage of Mughal flavors in every grain.
                        </p>
                    </div>

                    {/* Styled Map Container */}
                    <div className="w-full h-[320px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 mb-12 bg-black/40 relative group shadow-2xl">
                        <img 
                            alt="Map indicating restaurant location at Phulia Bus Stand" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" 
                            src="/img/restaurant_map.png" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-[#4B0000]/80 backdrop-blur-md p-4 rounded-full shadow-2xl border border-[#D4AF37]/40 animate-bounce">
                                <span className="material-symbols-outlined text-[#D4AF37] text-[36px]" >location_on</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact details list */}
                    <div className="flex flex-col gap-6 mb-12">

                        <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37]/10 flex items-start gap-4 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl">
                            <div className="w-12 h-12 bg-[#4B0000]/40 rounded-full text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/20 shadow-md">
                                <span className="material-symbols-outlined" >storefront</span>
                            </div>
                            <div>
                                <h2 className="font-cormorant font-bold text-xl text-white mb-1">Main Branch</h2>
                                <p className="text-white/60 text-sm leading-relaxed">Phulia Bus Stand, Near Handloom Market, Nadia, West Bengal 741402</p>
                            </div>
                        </div>

                        <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37]/10 flex items-start gap-4 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl">
                            <div className="w-12 h-12 bg-[#4B0000]/40 rounded-full text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/20 shadow-md">
                                <span className="material-symbols-outlined" >schedule</span>
                            </div>
                            <div className="w-full">
                                <h2 className="font-cormorant font-bold text-xl text-white mb-2">Opening Hours</h2>
                                <div className="flex justify-between items-center text-white/60 text-sm mb-2 border-b border-white/5 pb-2">
                                    <span>Monday - Sunday</span>
                                    <span className="font-semibold text-[#D4AF37]">11:00 AM - 10:30 PM</span>
                                </div>
                                <div className="flex items-center gap-2 mt-3 text-[#E8D8B8] bg-[#4B0000]/30 border border-[#D4AF37]/20 px-3.5 py-1.5 rounded-lg w-fit shadow-md">
                                    <span className="material-symbols-outlined text-[18px]">verified</span>
                                    <span className="font-poppins text-xs font-semibold uppercase tracking-wider">Open on Public Holidays</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37]/10 flex items-start gap-4 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl">
                            <div className="w-12 h-12 bg-[#4B0000]/40 rounded-full text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/20 shadow-md">
                                <span className="material-symbols-outlined" >moped</span>
                            </div>
                            <div>
                                <h2 className="font-cormorant font-bold text-xl text-white mb-1">Delivery Zones</h2>
                                <p className="text-white/60 text-sm leading-relaxed">Serving Phulia, Shantipur, and surrounding areas within a 7km radius. Free delivery on orders above ₹500.</p>
                            </div>
                        </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a 
                            href="https://maps.google.com/?q=Phulia+Bus+Stand+Nadia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' }} 
                                whileTap={{ scale: 0.97 }} 
                                className="w-full bg-[#0B0B0B]/60 border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#4B0000] hover:text-white font-poppins text-xs uppercase tracking-widest font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[#D4AF37] text-[20px]" >directions</span>
                                Get Directions
                            </motion.button>
                        </a>
                        
                        <a 
                            href="https://facebook.com/RegalBiryaniPhulia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' }} 
                                whileTap={{ scale: 0.97 }} 
                                className="w-full bg-[#0B0B0B]/60 border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#4B0000] hover:text-white font-poppins text-xs uppercase tracking-widest font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-[#D4AF37] text-[20px]" >thumb_up</span>
                                Facebook Page
                            </motion.button>
                        </a>
                    </div>

                </main>

                {/* Footer Component */}
                <Footer />

            </div>
        </SmoothScroll>
    );
};

export default Contact;

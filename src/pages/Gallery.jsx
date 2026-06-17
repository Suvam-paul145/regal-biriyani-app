import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import MouseGlow from '../components/MouseGlow';
import SmoothScroll from '../components/SmoothScroll';
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <SmoothScroll>
            <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins select-none">
                
                {/* Global Cinematic Effects */}
                <ParticleBackground />
                <MouseGlow />

                {/* Floating Navigation */}
                <Navbar />

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">

                    {/* Title & Subtitle */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
                        <h1 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
                            A Visual <span className="text-[#D4AF37] italic font-normal">Feast</span>
                        </h1>
                        <p className="font-poppins text-white/60 text-sm md:text-base leading-relaxed max-w-xl mt-4">
                            Immerse yourself in the rich aromas and royal presentation of our heritage dishes. A gallery crafted to whet your appetite.
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                        {/* Large Highlight Image */}
                        <div className="md:col-span-8 h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 relative group shadow-2xl">
                            <img 
                                alt="Signature Dum Biryani" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                src="/new image/Cinematic_close-up_of_traditional_'Dum'_202605232201.jpeg" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div className="z-10">
                                    <h3 className="font-cormorant font-bold text-2xl md:text-3xl text-white mb-2">Signature Dum Biryani</h3>
                                    <p className="font-poppins text-white/70 text-sm">Slow-cooked to perfection over burning coals.</p>
                                </div>
                            </div>
                        </div>

                        {/* Side Double Column */}
                        <div className="md:col-span-4 flex flex-col gap-8">
                            
                            <div className="h-[280px] rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group shadow-xl">
                                <img 
                                    alt="Pure Saffron" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    src="/img/saffron_infusion.png" 
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                                    <div className="z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="font-cormorant font-bold text-xl text-[#D4AF37] mb-1">Pure Saffron</h4>
                                        <p className="font-poppins text-white/80 text-xs uppercase tracking-wider">The essence of royalty</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[280px] rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative group shadow-xl">
                                <img 
                                    alt="Charcoal Charred Wings" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    src="/img/chicken_wings.png" 
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                                    <div className="z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="font-cormorant font-bold text-xl text-[#D4AF37] mb-1">Charcoal Charred</h4>
                                        <p className="font-poppins text-white/80 text-xs uppercase tracking-wider">Smoky, tender perfection</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Double Layout */}
                        <div className="md:col-span-5 h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 relative group shadow-2xl">
                            <img 
                                alt="Restaurant Ambience" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                src="/img/restaurant_ambience.png" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="z-10">
                                    <h3 className="font-cormorant font-bold text-xl md:text-2xl text-[#D4AF37] mb-1">The Royal Dining Court</h3>
                                    <p className="font-poppins text-white/70 text-sm">An atmosphere of refined elegance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-7 h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 relative group shadow-2xl">
                            <img 
                                alt="Royal Dessert" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                src="/img/shahi_tukda.png" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="z-10">
                                    <h3 className="font-cormorant font-bold text-xl md:text-2xl text-[#D4AF37] mb-1">Shahi Tukda</h3>
                                    <p className="font-poppins text-white/70 text-sm">A sweet finale fit for royalty.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                {/* Footer Component */}
                <Footer />

            </div>
        </SmoothScroll>
    );
};

export default Gallery;

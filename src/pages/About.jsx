import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import MouseGlow from '../components/MouseGlow';
import SmoothScroll from '../components/SmoothScroll';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <SmoothScroll>
            <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins select-none">
                
                {/* Global Cinematic Effects */}
                <ParticleBackground />
                <MouseGlow />

                {/* Floating Navigation */}
                <Navbar />

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                    
                    {/* Section 1: Header/Heritage Intro */}
                    <section className="text-center mb-16 flex flex-col items-center">
                        <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
                        <h1 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
                            Our <span className="text-[#D4AF37] italic font-normal">Heritage</span>
                        </h1>
                        <h2 className="font-bengali text-[#D4AF37] text-lg mt-2 font-normal">
                            আমাদের ঐতিহ্য
                        </h2>
                        
                        <div className="max-w-2xl mx-auto mt-8 relative px-4">
                            <span className="material-symbols-outlined text-4xl text-[#D4AF37]/20 absolute -top-6 -left-2 md:-left-6 pointer-events-none select-none">
                                format_quote
                            </span>
                            <p className="font-poppins text-white/70 text-base md:text-lg leading-relaxed relative z-10">
                                Bringing the authentic royal taste of Biryani to the heart of Phulia and Santipur. Our journey began with a simple desire: to serve food that feels like a warm embrace. Every grain of rice tells a story of tradition, slow-cooked to perfection with handpicked spices.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Crafted with Love Banner */}
                    <section className="mb-24">
                        <div className="w-full h-[350px] md:h-[530px] rounded-3xl overflow-hidden border border-[#D4AF37]/20 relative group shadow-2xl">
                            <img 
                                alt="Crafted with Love - Story image of spices and royal biryani preparation" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                src="/new image/Cinematic_brand_storytelling_visual_for_202605232201.jpeg" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-left z-10">
                                <h2 className="font-cormorant font-bold text-3xl md:text-5xl text-white mb-2">Crafted with Love</h2>
                                <p className="font-bengali text-[#D4AF37] text-base">ভালোবাসা দিয়ে তৈরি</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: The Royal Promise Cards */}
                    <section className="mb-24 py-16 px-6 bg-gradient-to-br from-[#4B0000]/20 to-black border border-[#D4AF37]/10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="text-center mb-12 flex flex-col items-center">
                            <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-white">The Royal Promise</h2>
                            <h3 className="font-bengali text-[#D4AF37] text-sm mt-1">আমাদের রাজকীয় অঙ্গীকার</h3>
                            <div className="w-12 h-[1px] bg-[#D4AF37] mt-4" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-8 rounded-2xl border border-[#D4AF37]/10 flex flex-col md:flex-row items-start gap-4 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl">
                                <div className="w-12 h-12 shrink-0 bg-[#4B0000]/40 rounded-full flex items-center justify-center border border-[#D4AF37]/20 shadow-md">
                                    <span className="material-symbols-outlined text-[#D4AF37]" >eco</span>
                                </div>
                                <div>
                                    <h3 className="font-cormorant font-bold text-xl text-white mb-1">100% Fresh Ingredients</h3>
                                    <p className="font-poppins text-white/60 text-sm leading-relaxed">We source our meat and spices daily from trusted local markets. No compromises.</p>
                                    <p className="font-bengali text-xs text-[#D4AF37]/80 mt-2">শতভাগ তাজা উপাদান</p>
                                </div>
                            </div>

                            <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-8 rounded-2xl border border-[#D4AF37]/10 flex flex-col md:flex-row items-start gap-4 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl">
                                <div className="w-12 h-12 shrink-0 bg-[#4B0000]/40 rounded-full flex items-center justify-center border border-[#D4AF37]/20 shadow-md">
                                    <span className="material-symbols-outlined text-[#D4AF37]" >local_fire_department</span>
                                </div>
                                <div>
                                    <h3 className="font-cormorant font-bold text-xl text-white mb-1">Slow-Cooked Perfection</h3>
                                    <p className="font-poppins text-white/60 text-sm leading-relaxed">Prepared using traditional Dum Pukht methods over slow fire to lock in every ounce of flavor.</p>
                                    <p className="font-bengali text-xs text-[#D4AF37]/80 mt-2">ঐতিহ্যবাহী রান্না</p>
                                </div>
                            </div>

                            <div className="bg-[#0B0B0B]/60 backdrop-blur-md p-8 rounded-2xl border border-[#D4AF37]/10 flex flex-col md:flex-row items-start gap-4 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-xl">
                                <div className="w-12 h-12 shrink-0 bg-[#4B0000]/40 rounded-full flex items-center justify-center border border-[#D4AF37]/20 shadow-md">
                                    <span className="material-symbols-outlined text-[#D4AF37]" >verified</span>
                                </div>
                                <div>
                                    <h3 className="font-cormorant font-bold text-xl text-white mb-1">Hygiene Certified</h3>
                                    <p className="font-poppins text-white/60 text-sm leading-relaxed">Maintaining the highest standards of cleanliness in our royal kitchen.</p>
                                    <p className="font-bengali text-xs text-[#D4AF37]/80 mt-2">পরিচ্ছন্নতার নিশ্চয়তা</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Section 4: Local Favourite Banner */}
                    <section className="mb-8">
                        <div className="bg-gradient-to-br from-[#4B0000] via-[#2E1B12] to-black border border-[#D4AF37]/30 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
                            <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-[#4B0000]/10 rounded-full blur-3xl pointer-events-none" />
                            
                            <span className="material-symbols-outlined text-[#D4AF37] text-5xl mb-4 relative z-10 block">favorite</span>
                            
                            <h2 className="font-cormorant font-bold text-3xl md:text-5xl text-white mb-4 relative z-10">Local Favourite</h2>
                            
                            <p className="font-poppins text-white/70 text-sm md:text-base mb-6 max-w-xl mx-auto relative z-10 leading-relaxed">
                                Proudly serving the wonderful communities of Phulia and Santipur. Your love makes us who we are.
                            </p>
                            
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4B0000]/40 backdrop-blur-md rounded-full border border-[#D4AF37]/30 relative z-10 shadow-lg">
                                <span className="material-symbols-outlined text-[#D4AF37] text-sm">location_on</span>
                                <span className="font-poppins text-xs uppercase tracking-widest text-[#E8D8B8] font-bold">Phulia &amp; Santipur</span>
                            </div>
                        </div>
                    </section>

                </main>

                {/* Footer Component */}
                <Footer />

            </div>
        </SmoothScroll>
    );
};

export default About;

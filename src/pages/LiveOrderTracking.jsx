import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import MouseGlow from '../components/MouseGlow';
import SmoothScroll from '../components/SmoothScroll';
import { motion } from 'framer-motion';

const LiveOrderTracking = () => {
    return (
        <SmoothScroll>
            <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins select-none">
                
                {/* Global Cinematic Effects */}
                <ParticleBackground />
                <MouseGlow />

                {/* Floating Navigation */}
                <Navbar />

                <main className="relative z-10 max-w-7xl mx-auto w-full px-6 py-32 flex-grow min-h-screen">
                    
                    <div className="mb-12 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
                        <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-white mb-2">Track Your Royal Feast</h1>
                        <p className="font-poppins text-sm text-[#E8D8B8]/60">Order #RB-8472-91 • Placed at 19:45</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: Progress & Map */}
                        <div className="lg:col-span-8 flex flex-col gap-8">

                            {/* Progress bar card */}
                            <div className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl border border-[#D4AF37]/10 p-8 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-2xl">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <h2 className="font-cormorant font-bold text-2xl text-white mb-1">Preparing your order</h2>
                                        <p className="font-poppins text-sm text-[#D4AF37] font-semibold">Estimated Arrival: 20:30 - 20:45</p>
                                    </div>
                                </div>
                                
                                {/* Timeline */}
                                <div className="relative mt-12 mb-4">
                                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0"></div>
                                    <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-[#D4AF37] -translate-y-1/2 z-0 transition-all duration-1000"></div>

                                    <div className="relative z-10 flex justify-between items-center">

                                        <div className="flex flex-col items-center gap-2 w-24">
                                            <div className="w-10 h-10 rounded-full bg-[#4B0000] text-white flex items-center justify-center border-2 border-[#D4AF37] shadow-lg">
                                                <span className="material-symbols-outlined text-sm">receipt_long</span>
                                            </div>
                                            <span className="font-poppins text-[10px] text-white/50 text-center">Order Placed</span>
                                        </div>

                                        <div className="flex flex-col items-center gap-2 w-24">
                                            <div className="w-12 h-12 rounded-full bg-[#4B0000] text-[#D4AF37] flex items-center justify-center border-2 border-[#D4AF37] shadow-xl hover:-translate-y-1 transition-all duration-300">
                                                <span className="material-symbols-outlined text-base animate-pulse">skillet</span>
                                            </div>
                                            <span className="font-poppins text-xs text-[#D4AF37] font-bold text-center">Preparing</span>
                                        </div>

                                        <div className="flex flex-col items-center gap-2 w-24">
                                            <div className="w-10 h-10 rounded-full bg-[#0B0B0B] text-white/40 flex items-center justify-center border border-white/10">
                                                <span className="material-symbols-outlined text-sm">two_wheeler</span>
                                            </div>
                                            <span className="font-poppins text-[10px] text-white/40 text-center">Out for Delivery</span>
                                        </div>

                                        <div className="flex flex-col items-center gap-2 w-24">
                                            <div className="w-10 h-10 rounded-full bg-[#0B0B0B] text-white/40 flex items-center justify-center border border-white/10">
                                                <span className="material-symbols-outlined text-sm">done_all</span>
                                            </div>
                                            <span className="font-poppins text-[10px] text-white/40 text-center">Delivered</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Tracking Map View Card */}
                            <div className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl border border-[#D4AF37]/10 overflow-hidden relative h-80 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-2xl">
                                <img 
                                    alt="Map View" 
                                    className="w-full h-full object-cover transition-transform duration-1000" 
                                    src="/img/restaurant_map.png" 
                                />
                                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                                <div className="absolute bottom-4 left-4 right-4 bg-[#0B0B0B]/90 backdrop-blur border border-[#D4AF37]/20 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#4B0000]/60 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20">
                                            <span className="material-symbols-outlined text-base">storefront</span>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-cormorant font-bold text-lg text-white">Regal Biriyani Court</p>
                                            <p className="font-poppins text-xs text-white/60">Preparing your order</p>
                                        </div>
                                    </div>
                                    <a href="tel:8514054004" className="w-full sm:w-auto">
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }} 
                                            whileTap={{ scale: 0.95 }} 
                                            className="w-full px-4 py-2 bg-[#4B0000] border border-[#D4AF37]/55 text-[#D4AF37] hover:text-white rounded-lg font-poppins text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <span className="material-symbols-outlined text-xs">call</span> Call Restaurant
                                        </motion.button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            
                            <div className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl border border-[#D4AF37]/10 p-6 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-2xl text-left">
                                <h3 className="font-cormorant font-bold text-2xl text-white mb-6 border-b border-white/5 pb-4">Order Summary</h3>
                                <div className="flex flex-col gap-4 mb-6">

                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded bg-[#4B0000]/40 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center font-poppins text-xs font-bold">2x</div>
                                            <div>
                                                <p className="font-poppins text-sm text-white font-semibold">Awadhi Chicken Biryani</p>
                                                <p className="font-poppins text-white/50 text-xs">Extra Raita, Double Masala</p>
                                            </div>
                                        </div>
                                        <p className="font-poppins text-sm text-[#D4AF37] font-bold">₹700</p>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded bg-[#4B0000]/40 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center font-poppins text-xs font-bold">1x</div>
                                            <div>
                                                <p className="font-poppins text-sm text-white font-semibold">Nawabi Mutton Chaap</p>
                                            </div>
                                        </div>
                                        <p className="font-poppins text-sm text-[#D4AF37] font-bold">₹450</p>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded bg-[#4B0000]/40 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center font-poppins text-xs font-bold">1x</div>
                                            <div>
                                                <p className="font-poppins text-sm text-white font-semibold">Shahi Saffron Firni</p>
                                            </div>
                                        </div>
                                        <p className="font-poppins text-sm text-[#D4AF37] font-bold">₹200</p>
                                    </div>

                                </div>

                                <div className="border-t border-white/5 pt-4 flex flex-col gap-2.5">
                                    <div className="flex justify-between text-xs text-white/60 font-poppins">
                                        <span>Subtotal</span>
                                        <span>₹1350</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-white/60 font-poppins">
                                        <span>Taxes &amp; Fees</span>
                                        <span>₹145</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-white/60 font-poppins">
                                        <span>Delivery</span>
                                        <span className="text-green-500 font-semibold">FREE</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xl font-bold text-[#D4AF37] border-t border-white/5 mt-4 pt-4 font-cormorant">
                                        <span>Total</span>
                                        <span>₹1495</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl border border-[#D4AF37]/10 p-6 hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-2xl text-left">
                                <h4 className="font-cormorant font-bold text-lg text-[#D4AF37] mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">location_on</span> Delivery Address
                                </h4>
                                <p className="font-poppins text-xs text-white/70 pl-6 leading-relaxed">
                                    Apt 4B, The Royal Residency<br/>
                                    123 Heritage Avenue, North Block<br/>
                                    Landmark: Near Handloom Market, Phulia
                                </p>
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

export default LiveOrderTracking;

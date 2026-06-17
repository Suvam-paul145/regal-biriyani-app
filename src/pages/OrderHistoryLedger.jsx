import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import MouseGlow from '../components/MouseGlow';
import SmoothScroll from '../components/SmoothScroll';
import { motion } from 'framer-motion';

const OrderHistoryLedger = () => {
    return (
        <SmoothScroll>
            <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins select-none flex flex-col justify-between">
                
                {/* Global Cinematic Effects */}
                <ParticleBackground />
                <MouseGlow />

                {/* Floating Navigation */}
                <Navbar />

                <main className="relative z-10 max-w-7xl mx-auto w-full px-6 py-32 flex-grow min-h-screen">

                    {/* Header Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div className="text-left">
                            <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
                            <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-white mb-2">Order Ledger</h1>
                            <p className="font-poppins text-sm text-white/60">Review your culinary journey and past transactions.</p>
                        </div>
                        
                        {/* Dropdowns */}
                        <div className="flex flex-wrap gap-4 w-full md:w-auto">
                            <div className="relative flex-grow md:flex-grow-0">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37] text-base">calendar_month</span>
                                <select className="bg-[#0B0B0B]/80 border border-[#D4AF37]/20 text-[#E8D8B8] rounded-xl pl-10 pr-8 py-3.5 font-poppins text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none w-full md:w-48 appearance-none cursor-pointer">
                                    <option>Last 30 Days</option>
                                    <option>Last 3 Months</option>
                                    <option>Year to Date</option>
                                    <option>Custom Range</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-base">expand_more</span>
                            </div>

                            <div className="relative flex-grow md:flex-grow-0">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37] text-base">filter_list</span>
                                <select className="bg-[#0B0B0B]/80 border border-[#D4AF37]/20 text-[#E8D8B8] rounded-xl pl-10 pr-8 py-3.5 font-poppins text-xs focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none w-full md:w-48 appearance-none cursor-pointer">
                                    <option>All Statuses</option>
                                    <option>Delivered</option>
                                    <option>Processing</option>
                                    <option>Cancelled</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-base">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* Ledger Table Wrapper */}
                    <div className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl border border-[#D4AF37]/10 overflow-hidden shadow-2xl mb-12">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#4B0000]/40 border-b border-[#D4AF37]/15">
                                    <tr>
                                        <th className="py-4.5 px-6 font-poppins text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">Order ID &amp; Date</th>
                                        <th className="py-4.5 px-6 font-poppins text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">Items Summary</th>
                                        <th className="py-4.5 px-6 font-poppins text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">Total Amount</th>
                                        <th className="py-4.5 px-6 font-poppins text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">Status</th>
                                        <th className="py-4.5 px-6 font-poppins text-xs font-semibold uppercase tracking-wider text-[#D4AF37] text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    
                                    <tr className="hover:bg-[#4B0000]/10 transition-colors group cursor-pointer">
                                        <td className="py-5 px-6">
                                            <div className="font-poppins font-bold text-sm text-white mb-1">#RB-8492</div>
                                            <div className="font-poppins text-xs text-white/50 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-xs text-[#D4AF37]">schedule</span> Oct 24, 2023 • 19:30
                                            </div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="font-poppins text-sm text-white/80">Chicken Biryani Special (2), Nawabi Mutton Chaap</div>
                                            <div className="font-poppins text-xs text-white/40 mt-1">3 items</div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="font-cormorant font-bold text-xl text-[#D4AF37]">₹1,450</div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-poppins text-[10px] font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-xs">check_circle</span> Delivered
                                            </span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-[#D4AF37] font-poppins text-xs uppercase tracking-widest font-bold hover:text-white underline transition-colors cursor-pointer">
                                                Receipt
                                            </motion.button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-[#4B0000]/10 transition-colors group cursor-pointer">
                                        <td className="py-5 px-6">
                                            <div className="font-poppins font-bold text-sm text-white mb-1">#RB-8211</div>
                                            <div className="font-poppins text-xs text-white/50 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-xs text-[#D4AF37]">schedule</span> Sep 12, 2023 • 13:15
                                            </div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="font-poppins text-sm text-white/80">Regal Mutton Biryani (1), Royal Borhani, Shahi Saffron Firni</div>
                                            <div className="font-poppins text-xs text-white/40 mt-1">3 items</div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="font-cormorant font-bold text-xl text-[#D4AF37]">₹980</div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-poppins text-[10px] font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-xs">check_circle</span> Delivered
                                            </span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-[#D4AF37] font-poppins text-xs uppercase tracking-widest font-bold hover:text-white underline transition-colors cursor-pointer">
                                                Receipt
                                            </motion.button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-[#4B0000]/10 transition-colors group cursor-pointer">
                                        <td className="py-5 px-6">
                                            <div className="font-poppins font-bold text-sm text-white mb-1">#RB-7904</div>
                                            <div className="font-poppins text-xs text-white/50 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-xs text-[#D4AF37]">schedule</span> Aug 05, 2023 • 20:45
                                            </div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="font-poppins text-sm text-white/80">Awadhi Chicken Biryani (4), Nawabi Chicken Chaap (2)</div>
                                            <div className="font-poppins text-xs text-white/40 mt-1">6 items</div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="font-cormorant font-bold text-xl text-[#D4AF37]">₹2,800</div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-poppins text-[10px] font-bold uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-xs">cancel</span> Cancelled
                                            </span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-white/40 font-poppins text-xs uppercase tracking-widest font-bold hover:text-white transition-colors cursor-pointer">
                                                Details
                                            </motion.button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

                {/* Footer Component */}
                <Footer />

            </div>
        </SmoothScroll>
    );
};

export default OrderHistoryLedger;

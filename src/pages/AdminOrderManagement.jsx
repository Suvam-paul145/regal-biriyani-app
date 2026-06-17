import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdminOrderManagement = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins"
        >
            {/* Global Navigation */}
            <Navbar />

            <div className="flex min-h-screen pt-24">

                {/* Sidebar */}
                <aside className="hidden md:flex flex-col bg-[#0B0B0B] text-white h-full w-64 fixed left-0 top-24 border-r border-[#D4AF37]/15 z-40 py-8">
                    <div className="px-6 mb-8 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border border-[#D4AF37]/35 mb-4 overflow-hidden shadow-lg bg-black/40">
                            <span className="material-symbols-outlined text-[#D4AF37] text-4xl flex items-center justify-center h-full">shield_person</span>
                        </div>
                        <h2 className="font-cormorant font-bold text-xl text-white text-center">Regal Admin</h2>
                        <p className="font-poppins text-xs text-white/50 text-center mt-1">Kitchen &amp; Floor Control</p>
                    </div>
                    <nav className="flex-1 flex flex-col gap-2 px-2">
                        <Link className="text-white/70 hover:text-white hover:bg-[#4B0000]/40 px-4 py-3 flex items-center gap-3 rounded-lg font-poppins text-xs uppercase tracking-wider transition-all" to="/">
                            <span className="material-symbols-outlined text-sm text-[#D4AF37]">monitor_heart</span>
                            Real-time Monitor
                        </Link>
                        <Link className="bg-[#4B0000] text-[#D4AF37] border border-[#D4AF37]/30 rounded-lg px-4 py-3 flex items-center gap-3 font-poppins text-xs uppercase tracking-wider shadow-md" to="/menu">
                            <span className="material-symbols-outlined text-sm">package_2</span>
                            Order Processing
                        </Link>
                        <Link className="text-white/70 hover:text-white hover:bg-[#4B0000]/40 px-4 py-3 flex items-center gap-3 rounded-lg font-poppins text-xs uppercase tracking-wider transition-all" to="/">
                            <span className="material-symbols-outlined text-sm text-[#D4AF37]">history_edu</span>
                            Customer History
                        </Link>
                        <Link className="text-white/70 hover:text-white hover:bg-[#4B0000]/40 px-4 py-3 flex items-center gap-3 rounded-lg font-poppins text-xs uppercase tracking-wider transition-all" to="/">
                            <span className="material-symbols-outlined text-sm text-[#D4AF37]">inventory_2</span>
                            Inventory
                        </Link>
                        <Link className="text-white/70 hover:text-white hover:bg-[#4B0000]/40 px-4 py-3 flex items-center gap-3 rounded-lg font-poppins text-xs uppercase tracking-wider transition-all" to="/">
                            <span className="material-symbols-outlined text-sm text-[#D4AF37]">settings</span>
                            Settings
                        </Link>
                    </nav>
                    <div className="px-6 mt-8">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-[#4B0000] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-white font-poppins text-xs uppercase tracking-widest font-bold py-3 rounded-xl transition-all cursor-pointer">
                            Generate Report
                        </motion.button>
                    </div>
                    <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-4 px-2">
                        <Link className="text-white/50 hover:text-white px-4 py-2 flex items-center gap-3 rounded-lg font-poppins text-xs transition-all" to="/">
                            <span className="material-symbols-outlined text-base text-[#D4AF37]">help</span>
                            Help
                        </Link>
                        <Link className="text-white/50 hover:text-white px-4 py-2 flex items-center gap-3 rounded-lg font-poppins text-xs transition-all" to="/">
                            <span className="material-symbols-outlined text-base text-[#D4AF37]">logout</span>
                            Logout
                        </Link>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-grow md:ml-64 p-6 max-w-7xl mx-auto w-full">

                    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="text-left">
                            <h1 className="font-cormorant font-bold text-3xl md:text-4xl text-white">Live Orders</h1>
                            <p className="font-poppins text-sm text-white/50 mt-1">Managing evening service - 14 active orders</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-[#0B0B0B]/80 px-4 py-2 rounded-full border border-green-500/30 shadow-md">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="font-poppins text-xs text-green-400 font-semibold">Kitchen Online</span>
                            </div>
                        </div>
                    </header>

                    {/* Columns Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                        {/* Column 1: New Orders */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-red-500/30 pb-2.5 mb-2">
                                <h3 className="font-cormorant font-bold text-xl text-red-400 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">notifications_active</span>
                                    New Requests
                                </h3>
                                <span className="bg-red-500/25 border border-red-500/40 text-red-400 font-poppins text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                            </div>

                            <article className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl p-5 border border-[#D4AF37]/15 relative overflow-hidden group hover:border-[#D4AF37]/45 transition-all duration-300 shadow-xl text-left">
                                <div className="absolute top-0 right-0 w-[3px] h-full bg-red-500"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="font-poppins text-xs text-white/50">#ORD-9021</span>
                                        <h4 className="font-cormorant font-bold text-lg text-white mt-0.5">Alisha K.</h4>
                                    </div>
                                    <div className="flex items-center gap-1 text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded text-[10px] font-bold font-poppins uppercase">
                                        <span className="material-symbols-outlined text-xs">timer</span>
                                        <span>2m ago</span>
                                    </div>
                                </div>
                                <div className="py-3 border-y border-white/5 mb-4">
                                    <ul className="font-poppins text-xs text-white/70 flex flex-col gap-2">
                                        <li className="flex justify-between"><span>2x Regal Mutton Biryani</span> <span className="text-[#D4AF37]">₹900</span></li>
                                        <li className="flex justify-between"><span>1x Golden Fried Chicken</span> <span className="text-[#D4AF37]">₹350</span></li>
                                        <li className="flex justify-between text-white/40 text-[11px] italic"><span>Notes: Extra raita, mild spice</span></li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-cormorant font-bold text-xl text-[#D4AF37]">₹1,250</span>
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#4B0000] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-white font-poppins text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg transition-all cursor-pointer">
                                        Accept
                                    </motion.button>
                                </div>
                            </article>

                            <article className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl p-5 border border-[#D4AF37]/15 relative overflow-hidden group hover:border-[#D4AF37]/45 transition-all duration-300 shadow-xl text-left">
                                <div className="absolute top-0 right-0 w-[3px] h-full bg-red-500"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="font-poppins text-xs text-white/50">#ORD-9022</span>
                                        <h4 className="font-cormorant font-bold text-lg text-white mt-0.5">Rajiv M.</h4>
                                    </div>
                                    <div className="flex items-center gap-1 text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded text-[10px] font-bold font-poppins uppercase">
                                        <span className="material-symbols-outlined text-xs">timer</span>
                                        <span>5m ago</span>
                                    </div>
                                </div>
                                <div className="py-3 border-y border-white/5 mb-4">
                                    <ul className="font-poppins text-xs text-white/70 flex flex-col gap-2">
                                        <li className="flex justify-between"><span>1x Laccha Paratha</span> <span className="text-[#D4AF37]">₹60</span></li>
                                        <li className="flex justify-between"><span>1x Nawabi Chicken Chaap</span> <span className="text-[#D4AF37]">₹290</span></li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-cormorant font-bold text-xl text-[#D4AF37]">₹350</span>
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#4B0000] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-white font-poppins text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg transition-all cursor-pointer">
                                        Accept
                                    </motion.button>
                                </div>
                            </article>
                        </div>

                        {/* Column 2: In Progress */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2.5 mb-2">
                                <h3 className="font-cormorant font-bold text-xl text-[#D4AF37] flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">skillet</span>
                                    Cooking Dum
                                </h3>
                                <span className="bg-[#4B0000]/25 border border-[#D4AF37]/35 text-[#D4AF37] font-poppins text-[10px] font-bold px-2 py-0.5 rounded-full">5</span>
                            </div>

                            <article className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl p-5 border border-[#D4AF37]/15 relative overflow-hidden group hover:border-[#D4AF37]/45 transition-all duration-300 shadow-xl text-left">
                                <div className="absolute top-0 right-0 w-[3px] h-full bg-[#D4AF37]"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="font-poppins text-xs text-white/50">#ORD-9018</span>
                                        <h4 className="font-cormorant font-bold text-lg text-white mt-0.5">Sneha D.</h4>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#D4AF37] bg-[#4B0000]/30 border border-[#D4AF37]/20 px-2 py-0.5 rounded text-[10px] font-bold font-poppins uppercase">
                                        <span className="material-symbols-outlined text-xs">hourglass_top</span>
                                        <span>12m</span>
                                    </div>
                                </div>
                                <div className="py-3 border-y border-white/5 mb-4">
                                    <ul className="font-poppins text-xs text-white/70 flex flex-col gap-2">
                                        <li className="flex justify-between"><span>3x Awadhi Chicken Biryani</span></li>
                                        <li className="flex justify-between"><span>2x Paneer Momo</span></li>
                                        <li className="flex justify-between"><span>4x Laccha Paratha</span></li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center gap-2">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-white/10 text-white/60 hover:text-white font-poppins text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg transition-all cursor-pointer">
                                        Details
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#4B0000] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-white font-poppins text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg transition-all cursor-pointer">
                                        Mark Ready
                                    </motion.button>
                                </div>
                            </article>

                            <article className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl p-5 border border-[#D4AF37]/15 relative overflow-hidden group hover:border-[#D4AF37]/45 transition-all duration-300 shadow-xl text-left">
                                <div className="absolute top-0 right-0 w-[3px] h-full bg-[#D4AF37]"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="font-poppins text-xs text-white/50">#ORD-9019</span>
                                        <h4 className="font-cormorant font-bold text-lg text-white mt-0.5">Vikram S.</h4>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#D4AF37] bg-[#4B0000]/30 border border-[#D4AF37]/20 px-2 py-0.5 rounded text-[10px] font-bold font-poppins uppercase">
                                        <span className="material-symbols-outlined text-xs">hourglass_top</span>
                                        <span>18m</span>
                                    </div>
                                </div>
                                <div className="py-3 border-y border-white/5 mb-4">
                                    <ul className="font-poppins text-xs text-white/70 flex flex-col gap-2">
                                        <li className="flex justify-between"><span>1x Regal Mutton Biryani</span></li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center gap-2">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-white/10 text-white/60 hover:text-white font-poppins text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg transition-all cursor-pointer">
                                        Details
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#4B0000] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-white font-poppins text-[10px] uppercase tracking-wider px-4 py-2 rounded-lg transition-all cursor-pointer">
                                        Mark Ready
                                    </motion.button>
                                </div>
                            </article>
                        </div>

                        {/* Column 3: Ready for Pickup */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-green-500/30 pb-2.5 mb-2">
                                <h3 className="font-cormorant font-bold text-xl text-green-400 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">shopping_bag</span>
                                    Ready for Pickup
                                </h3>
                                <span className="bg-green-500/20 border border-green-500/35 text-green-400 font-poppins text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                            </div>

                            <article className="bg-[#0B0B0B]/60 backdrop-blur-md rounded-2xl p-5 border border-[#D4AF37]/15 relative overflow-hidden group hover:border-[#D4AF37]/45 transition-all duration-300 shadow-xl opacity-90 text-left">
                                <div className="absolute top-0 right-0 w-[3px] h-full bg-green-500"></div>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="font-poppins text-xs text-white/50">#ORD-9015</span>
                                        <h4 className="font-cormorant font-bold text-lg text-white mt-0.5">Delivery Partner</h4>
                                    </div>
                                    <div className="flex items-center gap-1 text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded text-[10px] font-bold font-poppins uppercase">
                                        <span className="material-symbols-outlined text-xs">done_all</span>
                                        <span>Waiting</span>
                                    </div>
                                </div>
                                <div className="py-3 border-y border-white/5 mb-4">
                                    <p className="font-poppins text-xs text-white/50 mb-1">Customer: Pooja N.</p>
                                    <p className="font-poppins text-xs text-white">2 Items packed</p>
                                </div>
                                <div className="flex justify-end items-center">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-[#D4AF37] font-poppins text-xs font-bold uppercase tracking-widest hover:text-white underline transition-colors cursor-pointer">
                                        Handed Over
                                    </motion.button>
                                </div>
                            </article>
                        </div>

                    </div>
                </main>
            </div>
        </motion.div>
    );
};

export default AdminOrderManagement;

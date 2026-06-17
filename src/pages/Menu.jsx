import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import MouseGlow from '../components/MouseGlow';
import SmoothScroll from '../components/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Menu = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('All');

    const menuCategories = [
        { id: 'All', en: 'All', bn: 'সমস্ত' },
        { id: 'Biryani', en: 'Biryani', bn: 'বিরিয়ানি' },
        { id: 'Starters', en: 'Starters', bn: 'স্টার্টার' },
        { id: 'Quick Bites', en: 'Quick Bites', bn: 'রোল ও মোমো' },
        { id: 'Drinks & Desserts', en: 'Drinks & Desserts', bn: 'মিষ্টি ও পানীয়' }
    ];

    const menuItems = [
        // Biryani
        {
            name: 'Regal Mutton Biryani',
            bn: 'রিগ্যাল মটন বিরিয়ানি',
            category: 'Biryani',
            desc: 'Signature long-grain basmati rice slow-cooked with tender, succulent pieces of mutton, fragrant saffron, and our secret blend of 21 regal spices. Served with raita and salan.',
            image: '/new image/only_keep_the_biriyani_and_202605232201.jpeg',
            isSpecial: true,
            tag: 'Legendary'
        },
        {
            name: 'Awadhi Chicken Biryani',
            bn: 'আওয়াধি চিকেন বিরিয়ানি',
            category: 'Biryani',
            desc: 'Classic Kolkata style biryani with a fragrant touch of kewra water, featuring a large, tender chicken piece and the quintessential golden-brown potato, cooked dum-style.',
            image: '/new image/chicken_biriyani_120_chicken_biriyani_202605232158.jpeg',
            isSpecial: false,
            tag: 'Classic'
        },
        {
            name: 'Chicken Biryani Special',
            bn: 'চিকেন বিরিয়ানি স্পেশাল',
            category: 'Biryani',
            desc: 'Double portion of long-grain basmati rice cooked with two pieces of succulent chicken, golden saffron, and double the potato and boiled egg.',
            image: '/new image/chicken_biriyani_120_chicken_biriyani_202605232158.jpeg',
            isSpecial: true,
            tag: 'Royal Special'
        },
        {
            name: 'Mutton Biryani Special',
            bn: 'মাটন বিরিয়ানি স্পেশাল',
            category: 'Biryani',
            desc: 'A grand feast of double basmati rice with two large pieces of tender wood-fired handi mutton, potato, egg, and extra saffron infusion.',
            image: '/new image/only_keep_the_biriyani_and_202605232201.jpeg',
            isSpecial: true,
            tag: 'Imperial Special'
        },

        // Starters
        {
            name: 'Nawabi Mutton Chaap',
            bn: 'নওয়াবি মটন চাপ',
            category: 'Starters',
            desc: 'Flat cuts of mutton ribs marinated overnight in a rich, thick, aromatic gravy of poppy seeds, cashew nuts, and royal spices. The perfect companion to our Biryani.',
            image: '/img/img3.jpg',
            isSpecial: true,
            tag: 'Nawabi Legend'
        },
        {
            name: 'Nawabi Chicken Chaap',
            bn: 'নওয়াবি চিকেন চাপ',
            category: 'Starters',
            desc: 'Slow simmered chicken leg cuts in a velvety, rich cashew nut and poppy seed paste gravy infused with saffron.',
            image: '/img/chicken_chaap.png',
            isSpecial: false,
            tag: 'Mughal Classic'
        },
        {
            name: 'Golden Fried Chicken',
            bn: 'গোল্ডেন ফ্রাইড চিকেন',
            category: 'Starters',
            desc: 'Crispy, crunchy on the outside, tender and juicy on the inside chicken bites marinated in our house spice blend.',
            image: '/img/fried_chicken.png',
            isSpecial: false,
            tag: 'Crispy Delight'
        },
        {
            name: 'Spicy Chicken Wings',
            bn: 'চিকেন উইংস',
            category: 'Starters',
            desc: 'Sizzling, charred tandoori chicken wings, glazed with a glistening red spice marinade and charred edges. Garnished with cilantro.',
            image: '/img/chicken_wings.png',
            isSpecial: false,
            tag: 'Spicy'
        },
        {
            name: 'Chilli Chicken Indo-Chinese',
            bn: 'চিলি চিকেন',
            category: 'Starters',
            desc: 'Juicy chicken cubes tossed in a glossy, dark red, semi-dry soy-chilli gravy with bell pepper chunks, onions, and spring onions.',
            image: '/img/chilli_chicken.png',
            isSpecial: false,
            tag: 'Indo-Chinese'
        },

        // Quick Bites
        {
            name: 'Classic Chicken Roll',
            bn: 'চিকেন রোল',
            category: 'Quick Bites',
            desc: 'Warm flaky paratha wrap filled with charred spiced chicken tikka pieces, rings of raw red onions, and green chillies.',
            image: '/img/chicken_roll.png',
            isSpecial: false,
            tag: 'Best Seller'
        },
        {
            name: 'Golden Egg Roll',
            bn: 'ডিম রোল',
            category: 'Quick Bites',
            desc: 'Golden-brown pan-fried paratha with a layer of fried egg inside, wrapped with crunchy sliced onions, cucumber, and lime juice.',
            image: '/img/egg_roll.png',
            isSpecial: false,
            tag: 'Classic'
        },
        {
            name: 'Double Egg Chicken Roll',
            bn: 'ডিম চিকেন রোল',
            category: 'Quick Bites',
            desc: 'Paratha wrapped with two layers of egg and filled with tender spiced chicken tikka pieces, onions, and tangy sauces.',
            image: '/img/chicken_roll.png',
            isSpecial: true,
            tag: 'Royal Wrap'
        },
        {
            name: 'Steamed Chicken Momo',
            bn: 'চিকেন মোমো',
            category: 'Quick Bites',
            desc: 'Delicate, translucent pleated dumplings stuffed with seasoned minced chicken, steamed in bamboo basket. Served with hot schezwan chutney.',
            image: '/img/chicken_momo.png',
            isSpecial: false,
            tag: 'Steamed'
        },
        {
            name: 'Steamed Paneer Momo',
            bn: 'পনির মোমো',
            category: 'Quick Bites',
            desc: 'Dumplings stuffed with spiced grated paneer and herbs, steamed to perfection. Served with spicy tomato dipping sauce.',
            image: '/img/chicken_momo.png',
            isSpecial: false,
            tag: 'Vegetarian'
        },
        {
            name: 'Crispy Fried Momo',
            bn: 'ফ্রাইড মোমো',
            category: 'Quick Bites',
            desc: 'Crispy golden-brown fried momos, served hot with a side dipping bowl of creamy spicy mayonnaise.',
            image: '/img/fried_momo.png',
            isSpecial: false,
            tag: 'Crispy'
        },
        {
            name: 'Laccha Paratha',
            bn: 'লাচ্ছা পরোটা',
            category: 'Quick Bites',
            desc: 'Flaky, multi-layered golden-brown crispy flatbread cooked on tawa with butter. Perfect companion for Mutton/Chicken Chaap.',
            image: '/img/laccha_paratha.png',
            isSpecial: false,
            tag: 'Fresh Baked'
        },

        // Drinks & Desserts
        {
            name: 'Shahi Saffron Firni',
            bn: 'শাহী জাফরান ফিরনি',
            category: 'Drinks & Desserts',
            desc: 'A rich, creamy rice pudding infused with premium saffron, cardamom, and garnished with chopped almonds and pistachios. Served chilled in clay pots.',
            image: '/img/img4.jpg',
            isSpecial: true,
            tag: 'Royal Dessert'
        },
        {
            name: 'Shahi Tukda',
            bn: 'শাহী টুকদা',
            category: 'Drinks & Desserts',
            desc: 'Golden pan-fried bread pieces soaked in rich, thick saffron rabri, garnished with silver foil and slivered nuts.',
            image: '/img/shahi_tukda.png',
            isSpecial: true,
            tag: 'Shahi Dessert'
        },
        {
            name: 'Royal Borhani',
            bn: 'বোরহানি',
            category: 'Drinks & Desserts',
            desc: 'Traditional spiced mint yogurt drink served chilled in a clay pot, garnished with fresh mint leaves. The ultimate post-biryani digestif.',
            image: '/img/borhani.png',
            isSpecial: false,
            tag: 'Traditional'
        }
    ];

    const filteredItems = activeTab === 'All' 
        ? menuItems 
        : menuItems.filter(item => item.category === activeTab);

    return (
        <SmoothScroll>
            <div className="bg-[#0B0B0B] text-white min-h-screen relative overflow-hidden font-poppins select-none">
                
                {/* Global Cinematic Effects */}
                <ParticleBackground />
                <MouseGlow />

                {/* Floating Navigation */}
                <Navbar />

                <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">

                    {/* Title */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
                        <h1 className="font-cormorant font-bold text-4xl md:text-6xl text-white">
                            Our Regal <span className="text-[#D4AF37] italic font-normal">Menu</span>
                        </h1>
                        <h2 className="font-bengali text-[#D4AF37] text-lg mt-2 font-normal">
                            আমাদের রিগ্যাল মেনু
                        </h2>
                        <p className="font-poppins text-white/60 text-sm md:text-base leading-relaxed max-w-xl mt-4">
                            Discover our heritage recipes, crafted with premium ingredients and slow-cooked to perfection. Contact us to place your order.
                        </p>
                    </div>

                    {/* Category Tab Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16 overflow-x-auto pb-4 max-w-4xl mx-auto hide-scrollbar">
                        {menuCategories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-poppins border whitespace-nowrap"
                                style={{
                                    backgroundColor: activeTab === cat.id ? '#4B0000' : 'rgba(255,255,255,0.03)',
                                    color: activeTab === cat.id ? '#D4AF37' : '#E8D8B8',
                                    borderColor: activeTab === cat.id ? '#D4AF37' : 'rgba(212, 175, 55, 0.15)',
                                    boxShadow: activeTab === cat.id ? '0 0 15px rgba(75, 0, 0, 0.5)' : 'none'
                                }}
                            >
                                {cat.en} / {cat.bn}
                            </motion.button>
                        ))}
                    </div>

                    {/* Grid of Dishes */}
                    <motion.div 
                        layout 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="bg-[#0B0B0B]/60 backdrop-blur-md border border-[#D4AF37]/10 rounded-2xl overflow-hidden flex flex-col group hover:border-[#D4AF37]/40 transition-colors duration-500 shadow-2xl relative"
                                >
                                    {/* Tag */}
                                    {item.tag && (
                                        <div className="absolute top-4 left-4 bg-[#4B0000] border border-[#D4AF37]/60 text-white font-poppins text-[9px] uppercase tracking-widest px-3 py-1 rounded-full z-10 shadow-lg">
                                            {item.tag}
                                        </div>
                                    )}

                                    {/* Image container */}
                                    <div className="h-56 relative w-full bg-black/40 overflow-hidden">
                                        <img 
                                            alt={item.name} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                            src={item.image} 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                                    </div>

                                    {/* Card content */}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-cormorant font-bold text-2xl text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                                                        {item.name}
                                                    </h3>
                                                    <h4 className="font-bengali text-[#D4AF37] text-sm mt-1">
                                                        {item.bn}
                                                    </h4>
                                                </div>
                                            </div>
                                            <p className="font-poppins text-white/60 text-sm leading-relaxed mt-2 mb-6">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                                            <span className="font-poppins text-[10px] uppercase tracking-widest text-[#D4AF37] bg-[#4B0000]/30 px-3 py-1.5 rounded-md border border-[#D4AF37]/10">
                                                {t('contactPrice') || 'Contact for Price'}
                                            </span>
                                            <a 
                                                href={`https://wa.me/918514054004?text=I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <motion.button 
                                                    whileHover={{ scale: 1.05 }} 
                                                    whileTap={{ scale: 0.95 }} 
                                                    className="flex items-center justify-center gap-2 bg-[#4B0000] border border-[#D4AF37]/50 text-[#D4AF37] hover:text-white px-5 py-2.5 rounded-xl font-poppins text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                                                >
                                                    <svg fill="currentColor" height="14" viewBox="0 0 16 16" width="14" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                                    </svg>
                                                    Order Now
                                                </motion.button>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Bottom Banner */}
                    <div className="bg-gradient-to-br from-[#4B0000]/60 to-black border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="text-center md:text-left z-10">
                            <h3 className="font-cormorant font-bold text-3xl text-white mb-2">Planning a Grand Celebration?</h3>
                            <p className="font-poppins text-white/60 text-sm max-w-xl leading-relaxed">
                                We cater bulk orders for weddings, family feasts, and corporate gatherings. Treat your guests to an authentic royal dining experience.
                            </p>
                        </div>
                        <div className="z-10 flex gap-4 w-full md:w-auto">
                            <a href="tel:8514054004" className="w-full md:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-[#4B0000] border border-[#D4AF37] text-[#D4AF37] hover:text-white px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold font-poppins transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-sm">call</span>
                                    <span>Call Royal Court</span>
                                </motion.button>
                            </a>
                        </div>
                    </div>

                </main>

                {/* Footer Component */}
                <Footer />

            </div>
        </SmoothScroll>
    );
};

export default Menu;

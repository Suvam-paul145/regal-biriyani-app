const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

// Fix Hero Layout (Stack and Center on Mobile)
content = content.replace(
    /className="flex flex-col sm:flex-row gap-4"/,
    'className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"'
);

content = content.replace(
    /<p className="font-body-lg text-body-lg text-text-muted mb-8 max-w-md">/,
    '<p className="font-body-lg text-body-lg text-text-muted mb-8 max-w-md mx-auto md:mx-0">'
);

// We need to inject the "Royal Family Pack" section before the footer
const offersSection = `
        <section className="py-12 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
            <div className="bg-gradient-to-br from-brand-maroon to-primary text-white rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')] mix-blend-overlay"></div>
                <div className="relative z-10 w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/50 text-brand-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="material-symbols-outlined text-[16px]">bolt</span> Weekend Exclusive
                    </div>
                    <h2 className="font-headline-lg text-3xl md:text-5xl font-bold mb-4 leading-tight">The Royal Family Pack</h2>
                    <p className="font-body-md text-base md:text-lg opacity-90 mb-8 max-w-md">
                        Make your Saturday grand. Get 4 Mutton Biryanis, 2 Chicken Chaap, and complimentary Firni. Perfect for a royal feast at home.
                    </p>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-brand-gold text-text-dark px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-brand-gold/40 transition-all text-lg">
                        Pre-order for Saturday
                    </motion.button>
                </div>
                <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
                        <img src="/img/img2.jpg" alt="Royal Family Pack" className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-brand-gold/30" />
                        <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-brand-gold text-text-dark w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-xl rotate-12">
                            <span className="text-xl md:text-2xl">-15%</span>
                            <span className="text-xs uppercase">Off</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer`;

if (!content.includes('Weekend Exclusive')) {
    content = content.replace(/<footer/, offersSection);
}

// Make sure buttons span full width on mobile in Hero
content = content.replace(
    /<motion\.button whileHover={{ scale: 1\.05 }} whileTap={{ scale: 0\.95 }} className="bg-gradient-to-r from-brand-maroon to-primary text-white px-6 py-3 rounded-xl/g,
    '<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-gradient-to-r from-brand-maroon to-primary text-white px-6 py-3 rounded-xl'
);
content = content.replace(
    /<motion\.button whileHover={{ scale: 1\.05 }} whileTap={{ scale: 0\.95 }} className="bg-transparent border border-brand-gold text-brand-gold px-8 py-3 rounded-lg font-label-lg text-label-lg/g,
    '<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto bg-transparent border border-brand-gold text-brand-gold px-8 py-3 rounded-lg font-label-lg text-label-lg'
);


fs.writeFileSync(homePath, content);
console.log('Mobile updates applied.');

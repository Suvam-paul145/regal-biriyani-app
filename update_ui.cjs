const fs = require('fs');
const path = require('path');

const dir = './src/pages';
fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.jsx')) return;
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Make buttons premium
    content = content.replace(/className="[^"]*bg-primary-container text-on-primary[^"]*"/g, 'className="bg-gradient-to-r from-brand-maroon to-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-brand-maroon/40 transition-all flex items-center justify-center gap-2"');
    
    // Outline buttons
    content = content.replace(/className="[^"]*bg-surface-white border border-border-soft text-text-muted hover:text-primary[^"]*"/g, 'className="px-6 py-2 bg-white border border-brand-gold/30 text-text-muted hover:text-brand-maroon hover:border-brand-maroon rounded-full font-medium transition-all shadow-sm"');

    // Fix whatsapp button
    content = content.replace(/className="[^"]*bg-\[#25D366\] text-white[^"]*"/g, 'className="w-full md:w-auto bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-[#25D366]/40 transition-all flex items-center justify-center gap-2"');

    // Language Context & Translations for Home.jsx
    if (file === 'Home.jsx') {
        if (!content.includes('useLanguage')) {
            content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useLanguage } from '../LanguageContext';");
            content = content.replace("const Home = () => {", "const Home = () => {\n  const { t, toggleLanguage, lang } = useLanguage();");
        }
        
        content = content.replace(/>Our Story</g, ">{t('ourStory')}<");
        content = content.replace(/>Signature Menu</g, ">{t('signatureMenu')}<");
        content = content.replace(/>Offers</g, ">{t('offers')}<");
        content = content.replace(/>Location</g, ">{t('location')}<");
        content = content.replace(/>\s*Order Now\s*<\/motion.button>/g, "> {t('orderNow')}</motion.button>");
        
        content = content.replace(/<motion\.button whileHover={{ scale: 1\.05 }} whileTap={{ scale: 0\.95 }} className="text-primary hover:text-secondary-container font-label-lg text-label-lg hidden md:block">\s*EN \| <span className="font-bengali font-semibold">বাংলা<\/span>\s*<\/motion\.button>/g, "<motion.button onClick={toggleLanguage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className=\"text-primary hover:text-secondary-container font-label-lg text-label-lg hidden md:block\">{lang === 'en' ? <span>EN | <span className='font-bengali font-semibold'>বাংলা</span></span> : <span><span className='font-bengali font-semibold'>বাংলা</span> | EN</span>}</motion.button>");
        
        content = content.replace(/Royal Taste\. Rich Aroma\. Unforgettable Flavour\.</g, "{t('heroSubtitle')}");
        content = content.replace(/>\s*View Menu\s*<span/g, "> {t('viewMenu')} <span");
        
        content = content.replace(/>Freshly Prepared</g, ">{t('freshlyPrepared')}<");
        content = content.replace(/>Local Favourite</g, ">{t('localFavourite')}<");
        content = content.replace(/>Visit Us</g, ">{t('visitUs')}<");
        content = content.replace(/>Opening Hours</g, ">{t('openingHours')}<");
        content = content.replace(/>\s*Order via WhatsApp\s*<\/motion.button>/g, "> {t('orderWhatsApp')}</motion.button>");
        
        content = content.replace(/>Why Regal Biryanii is Famous in Phulia</g, ">{t('whyFamous')}<");
        content = content.replace(/>Experience the legacy of authentic spices and slow-cooked perfection that has made us the beloved choice of our town.</g, ">{t('whyFamousSub')}<");
        content = content.replace(/>Rich Aroma</g, ">{t('richAroma')}<");
        content = content.replace(/>Our secret blend of spices ensures every grain is infused with a captivating scent.</g, ">{t('richAromaDesc')}<");
        content = content.replace(/>Cooked fresh daily in small batches to maintain the highest quality and texture.</g, ">{t('freshlyPreparedDesc')}<");
        content = content.replace(/>Royal Taste</g, ">{t('royalTaste')}<");
        content = content.replace(/>A regal recipe passed down, delivering a rich, authentic culinary experience.</g, ">{t('royalTasteDesc')}<");
        content = content.replace(/>Loved by Locals</g, ">{t('lovedLocals')}<");
        content = content.replace(/>Proudly serving the Phulia community, becoming a staple for celebrations.</g, ">{t('lovedLocalsDesc')}<");
        
        content = content.replace(/>Contact for Price</g, ">{t('contactPrice')}<");
        content = content.replace(/>Classic Chicken Biryani</g, ">{t('classicChicken')}<");
        content = content.replace(/>Royal Mutton Biryani</g, ">{t('royalMutton')}<");
        
        content = content.replace(/>All</g, ">{t('all')}<");
        content = content.replace(/>Biryani</g, ">{t('biryani')}<");
        content = content.replace(/>Chicken</g, ">{t('chicken')}<");
        content = content.replace(/>Mutton</g, ">{t('mutton')}<");
        
        content = content.replace(/>Privacy Policy</g, ">{t('privacy')}<");
        content = content.replace(/>Terms of Service</g, ">{t('terms')}<");
        content = content.replace(/>Refund Policy</g, ">{t('refund')}<");
        content = content.replace(/>Contact Us</g, ">{t('contact')}<");
        content = content.replace(/>Sitemap</g, ">{t('sitemap')}<");
    }

    fs.writeFileSync(path.join(dir, file), content);
});
console.log('UI Updated');

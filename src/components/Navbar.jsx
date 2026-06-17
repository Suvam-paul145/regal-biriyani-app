import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const { t, toggleLanguage, lang } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('ourStory') || 'Our Story', path: '/about' },
    { name: t('signatureMenu') || 'Signature Menu', path: '/menu' },
    { name: 'Home', path: '/' },
    { name: t('contact') || 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-[#D4AF37]/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-[#D4AF37] text-3xl transition-transform duration-700 group-hover:rotate-180">
            restaurant
          </span>
          <span className="font-cormorant font-bold text-2xl tracking-widest text-[#D4AF37] group-hover:text-white transition-colors duration-500">
            REGAL BIRIYANI
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className="relative py-2 text-sm uppercase tracking-widest font-poppins transition-colors duration-500"
                style={{ color: isActive ? '#D4AF37' : '#E8D8B8' }}
              >
                <span className="hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Toggle */}
          <motion.button 
            onClick={toggleLanguage} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="text-xs uppercase tracking-widest text-[#E8D8B8] hover:text-[#D4AF37] border border-[#D4AF37]/20 px-3 py-1.5 rounded bg-transparent transition-colors duration-300 font-poppins"
          >
            {lang === 'en' ? 'EN | BN' : 'বাংলা | EN'}
          </motion.button>

          {/* CTA Order Button */}
          <Link to="/menu">
            <motion.button 
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' }} 
              whileTap={{ scale: 0.97 }} 
              className="bg-[#4B0000] text-white border border-[#D4AF37] px-6 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold font-poppins flex items-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
              {t('orderNow') || 'Order Now'}
            </motion.button>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="text-xs text-[#E8D8B8] border border-[#D4AF37]/20 px-2 py-1 rounded font-poppins"
          >
            {lang === 'en' ? 'EN' : 'বাংলা'}
          </button>

          {/* Hamburger */}
          <button 
            className="text-[#D4AF37] focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#0B0B0B] border-t border-[#D4AF37]/10"
          >
            <div className="flex flex-col py-6 px-8 gap-4 font-poppins">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg uppercase tracking-wider text-[#E8D8B8] hover:text-[#D4AF37] transition-colors py-2 border-b border-[#D4AF37]/5"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="mt-4">
                <button className="w-full bg-[#4B0000] text-white border border-[#D4AF37] py-3 rounded-lg text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">shopping_bag</span>
                  {t('orderNow') || 'Order Now'}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

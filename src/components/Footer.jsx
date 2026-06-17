import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D4AF37]/10 text-[#E8D8B8] py-16 px-6 font-poppins relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Information */}
        <div className="flex flex-col gap-4">
          <div className="font-cormorant font-bold text-3xl tracking-widest text-[#D4AF37]">
            REGAL BIRIYANI
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Experience the magic of authentic biryani, lovingly crafted with the finest handpicked spices and heritage Mughal recipes.
          </p>
          <div className="text-xs text-[#D4AF37]/80 mt-2">
            © 2026 Regal Biryanii Phulia. All rights reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Explore
          </h4>
          <div className="flex flex-col gap-2.5 text-sm text-white/60">
            <Link className="hover:text-[#D4AF37] transition-colors" to="/menu">{t('signatureMenu') || 'Signature Menu'}</Link>
            <Link className="hover:text-[#D4AF37] transition-colors" to="/about">{t('ourStory') || 'Our Story'}</Link>
            <Link className="hover:text-[#D4AF37] transition-colors" to="/gallery">Visual Gallery</Link>
            <Link className="hover:text-[#D4AF37] transition-colors" to="/contact">{t('contact') || 'Contact Us'}</Link>
          </div>
        </div>

        {/* Administration Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Operations
          </h4>
          <div className="flex flex-col gap-2.5 text-sm text-white/60">
            <Link className="hover:text-[#D4AF37] transition-colors" to="/admin/orders">{t('adminOrders') || 'Admin Dashboard'}</Link>
            <Link className="hover:text-[#D4AF37] transition-colors" to="/tracking">{t('liveTracking') || 'Live Order Tracking'}</Link>
            <Link className="hover:text-[#D4AF37] transition-colors" to="/admin/ledger">{t('orderLedger') || 'Order Ledgers'}</Link>
          </div>
        </div>

        {/* Branch & Hours */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
            Royal Court
          </h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Phulia Bus Stand, Near Handloom Market, Nadia, West Bengal 741402
          </p>
          <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            <span>11:00 AM - 10:30 PM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="font-semibold">8514054004</span>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <div className="flex gap-6">
          <Link className="hover:text-white" to="/">{t('privacy') || 'Privacy Policy'}</Link>
          <Link className="hover:text-white" to="/">{t('terms') || 'Terms of Service'}</Link>
          <Link className="hover:text-white" to="/">{t('refund') || 'Refund Policy'}</Link>
        </div>
        <div>
          Crafted for Royalty in Phulia & Santipur.
        </div>
      </div>
    </footer>
  );
}

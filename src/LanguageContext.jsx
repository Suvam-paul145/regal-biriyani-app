import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Nav
    ourStory: "Our Story", signatureMenu: "Signature Menu", offers: "Offers", location: "Location", orderNow: "Order Now",
    // Home
    heroSubtitle: "Royal Taste. Rich Aroma. Unforgettable Flavour.",
    viewMenu: "View Menu", freshlyPrepared: "Freshly Prepared", localFavourite: "Local Favourite", visitUs: "Visit Us",
    openingHours: "Opening Hours", orderWhatsApp: "Order via WhatsApp",
    whyFamous: "Why Regal Biryanii is Famous in Phulia", whyFamousSub: "Experience the legacy of authentic spices and slow-cooked perfection.",
    richAroma: "Rich Aroma", richAromaDesc: "Our secret blend of spices ensures every grain is infused with a captivating scent.",
    freshlyPreparedDesc: "Cooked fresh daily in small batches to maintain the highest quality and texture.",
    royalTaste: "Royal Taste", royalTasteDesc: "A regal recipe passed down, delivering a rich, authentic culinary experience.",
    lovedLocals: "Loved by Locals", lovedLocalsDesc: "Proudly serving the Phulia community.",
    contactPrice: "Contact for Price", classicChicken: "Classic Chicken Biryani", royalMutton: "Royal Mutton Biryani",
    all: "All", biryani: "Biryani", chicken: "Chicken", mutton: "Mutton",
    // Global
    privacy: "Privacy Policy", terms: "Terms of Service", refund: "Refund Policy", contact: "Contact Us", sitemap: "Sitemap",
    rights: "© 2024 Regal Biryanii Phulia. All rights reserved. Crafted for Royalty.",
    // Extra
    adminOrders: "Admin Orders", liveTracking: "Live Tracking", orderLedger: "Order Ledger"
  },
  bn: {
    // Nav
    ourStory: "আমাদের গল্প", signatureMenu: "সিগনেচার মেনু", offers: "অফার", location: "অবস্থান", orderNow: "অর্ডার করুন",
    // Home
    heroSubtitle: "রাজকীয় স্বাদ। সমৃদ্ধ সুবাস। অবিস্মরণীয় স্বাদ।",
    viewMenu: "মেনু দেখুন", freshlyPrepared: "সদ্য প্রস্তুত", localFavourite: "স্থানীয়দের প্রিয়", visitUs: "আমাদের ঠিকানা",
    openingHours: "খোলার সময়", orderWhatsApp: "হোয়াটসঅ্যাপে অর্ডার করুন",
    whyFamous: "ফুলিয়ায় রিগ্যাল বিরিয়ানি কেন বিখ্যাত", whyFamousSub: "খাঁটি মশলা এবং ধীর গতিতে রান্নার ঐতিহ্যের অভিজ্ঞতা নিন।",
    richAroma: "সমৃদ্ধ সুবাস", richAromaDesc: "আমাদের নিজস্ব মশলার মিশ্রণ নিশ্চিত করে প্রতিটি দানা মনোমুগ্ধকর সুবাসে আচ্ছন্ন।",
    freshlyPreparedDesc: "সর্বোচ্চ মান এবং স্বাদ বজায় রাখতে প্রতিদিন তাজা রান্না করা হয়।",
    royalTaste: "রাজকীয় স্বাদ", royalTasteDesc: "একটি রাজকীয় রেসিপি যা উত্তরাধিকার সূত্রে প্রাপ্ত, খাঁটি রান্নার অভিজ্ঞতা প্রদান করে।",
    lovedLocals: "স্থানীয়দের প্রিয়", lovedLocalsDesc: "ফুলিয়া সম্প্রদায়কে গর্বের সাথে পরিবেশন করে।",
    contactPrice: "দামের জন্য যোগাযোগ করুন", classicChicken: "ক্লাসিক চিকেন বিরিয়ানি", royalMutton: "রয়্যাল মাটন বিরিয়ানি",
    all: "সব", biryani: "বিরিয়ানি", chicken: "চিকেন", mutton: "মাটন",
    // Global
    privacy: "গোপনীয়তা নীতি", terms: "পরিষেবার শর্তাবলী", refund: "রিফান্ড নীতি", contact: "যোগাযোগ করুন", sitemap: "সাইটম্যাপ",
    rights: "© ২০২৪ রিগ্যাল বিরিয়ানি ফুলিয়া। সর্বস্বত্ব সংরক্ষিত। রাজকীয়তার জন্য তৈরি।",
    // Extra
    adminOrders: "অ্যাডমিন অর্ডার", liveTracking: "লাইভ ট্র্যাকিং", orderLedger: "অর্ডার লেজার"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] || key;
  
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'bn' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

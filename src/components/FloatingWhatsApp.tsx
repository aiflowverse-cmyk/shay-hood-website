import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FloatingWhatsApp = () => {
  const { language } = useLanguage();
  const message = language === 'ar' 
    ? 'مرحباً شاي هود، أود الاستفسار عن...' 
    : 'Hello Shay Hood, I\'d like to ask about...';
  
  const whatsappUrl = `https://wa.me/966553836607?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

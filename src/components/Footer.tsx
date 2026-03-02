import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <footer className="bg-brown-900 text-sand-100 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              {/* Real logo cropped to circle with gold ring */}
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gold-500 ring-offset-1 ring-offset-brown-900 shrink-0 bg-white">
                <img
                  src="/logo.jpg"
                  alt="شاي هود لوغو"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              <span className="font-arabic font-bold text-2xl tracking-tight text-sand-50">
                شاي هود
              </span>
            </Link>
            <p className="text-sand-200 mb-6 leading-relaxed">
              {t('story.teaser').substring(0, 100)}...
            </p>
            {/* ✅ SKILL: SVG icons only — no text/letter placeholders. aria-labels on all icon-only links */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <MessageCircle size={18} />
              </a>
              {/* ✅ SKILL: Proper SVG for Snapchat */}
              <a href="#" aria-label="Snapchat" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.166 3c.033 0 .06.004.092.005C13.74 3.057 15.25 3.9 16.08 5.285c.422.71.57 1.528.57 2.36 0 .51-.047 1.017-.14 1.516.08.034.165.052.252.052.317 0 .62-.15.836-.41.153-.185.36-.29.574-.29.22 0 .426.09.574.247.167.178.245.42.21.666-.07.472-.43.852-.897 1.015-.133.047-.27.07-.41.07-.147 0-.294-.025-.432-.073-.02.27-.06.537-.12.8.66.085 1.35.3 1.934.68.593.388.974.958.974 1.58 0 .27-.08.54-.24.773-.5.73-1.42.84-2.3.83-.16-.007-.33-.015-.498-.015-.44 0-.893.06-1.33.192-.19.057-.386.09-.58.09-.32 0-.636-.083-.898-.243-.56-.342-1.05-.518-1.577-.518s-1.017.176-1.577.518c-.262.16-.578.243-.898.243-.194 0-.39-.033-.58-.09-.437-.132-.89-.192-1.33-.192-.17 0-.338.008-.498.015-.88.01-1.8-.1-2.3-.83-.16-.233-.24-.503-.24-.773 0-.622.38-1.192.974-1.58.584-.38 1.274-.595 1.934-.68-.06-.263-.1-.53-.12-.8-.138.048-.285.073-.432.073-.14 0-.277-.023-.41-.07-.467-.163-.827-.543-.897-1.015-.035-.246.043-.488.21-.666.148-.157.354-.247.574-.247.214 0 .421.105.574.29.216.26.52.41.836.41.087 0 .172-.018.252-.052-.093-.5-.14-1.006-.14-1.516 0-.832.148-1.65.57-2.36C8.75 3.9 10.26 3.057 11.742 3.005c.032-.001.06-.005.091-.005z" />
                </svg>
              </a>
              {/* ✅ SKILL: Proper SVG for TikTok */}
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.55V6.78a4.85 4.85 0 01-1.06-.09z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-sand-50">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/menu" className="text-sand-200 hover:text-gold-400 transition-colors">{t('nav.menu')}</Link></li>
              <li><Link to="/branches" className="text-sand-200 hover:text-gold-400 transition-colors">{t('nav.branches')}</Link></li>
              <li><Link to="/about" className="text-sand-200 hover:text-gold-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/wholesale" className="text-sand-200 hover:text-gold-400 transition-colors">{t('nav.wholesale')}</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl mb-6 text-sand-50">{t('branches.b1.name')}</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-sand-200">
                  <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
                  <a href="https://www.google.com/maps/search/?api=1&query=شاي+هود&query_place_id=ChIJo__vXwD9Lj4R3xVwBZXVFaY" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors">
                    {language === 'ar' ? 'طريق الثمامة، الرياض' : 'Al Thoumamah Rd, Riyadh'}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sand-200">
                  <Phone size={20} className="text-gold-500 shrink-0" />
                  <a href="tel:+966553836607" className="hover:text-gold-400 transition-colors" dir="ltr">+966 55 383 6607</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-sand-50">{t('branches.b2.name')}</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-sand-200">
                  <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
                  <a href="https://www.google.com/maps/search/?api=1&query=شاي+هود&query_place_id=ChIJh5wgagD_Lj4RNWFUzGOnXyc" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors">
                    {language === 'ar' ? 'شارع علي الفزاري، الرياض' : 'Ali Al Fazari St, Riyadh'}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sand-200">
                  <Phone size={20} className="text-gold-500 shrink-0" />
                  <a href="tel:+966500228505" className="hover:text-gold-400 transition-colors" dir="ltr">+966 50 022 8505</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sand-300 text-sm">
            {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4 text-sm text-sand-300">
            <span>{language === 'ar' ? 'صنع بحب في السعودية' : 'Made with love in Saudi Arabia'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

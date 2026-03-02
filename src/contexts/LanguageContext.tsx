import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.menu': { ar: 'منيونا', en: 'Menu' },
  'nav.branches': { ar: 'فروعنا', en: 'Branches' },
  'nav.order': { ar: 'اطلب الآن', en: 'Order Now' },
  'nav.wholesale': { ar: 'مبيعات الجملة', en: 'Wholesale' },
  'nav.about': { ar: 'قصتنا', en: 'Our Story' },

  // Hero
  'hero.headline': { ar: 'شاي أصيل، لحظات حقيقية', en: 'Authentic Tea, Real Moments' },
  'hero.subheadline': { ar: 'فرعان في الرياض — التومامة وعلي الفزاري', en: 'Two Riyadh Locations — Al Thoumamah & Ali Al Fazari' },
  'hero.cta.menu': { ar: 'تصفح المنيو', en: 'View Menu' },
  'hero.cta.order': { ar: 'اطلب توصيل', en: 'Order Delivery' },

  // Why Us
  'why.fresh': { ar: 'شاي طازج يومياً', en: 'Fresh Tea Daily' },
  'why.locations': { ar: 'فرعان بالرياض', en: 'Two Riyadh Locations' },
  'why.rating': { ar: '4.6 نجمة من عملائنا', en: '4.6 Stars from Our Guests' },

  // Featured Menu
  'featured.title': { ar: 'الأكثر مبيعاً', en: 'Featured Menu' },
  'featured.viewAll': { ar: 'عرض كل المنيو', en: 'View Full Menu' },

  // Story Teaser
  'story.title': { ar: 'جذورنا', en: 'Our Roots' },
  'story.teaser': {
    ar: 'اسم "هود" يحمل في طياته إرثاً عربياً عميقاً. نحن أكثر من مجرد مقهى، نحن مكان يلتقي فيه الجيران ليصبحوا عائلة. نقدم لكم كوب الشاي المثالي كطقس يومي يعكس دفء الضيافة السعودية.',
    en: 'The name "Hood" carries deep Arabian heritage. We are more than just a cafe; we are a place where neighbors become family. We serve the perfect cup of tea as a daily ritual reflecting the warmth of Saudi hospitality.'
  },
  'story.btn': { ar: 'اقرأ قصتنا', en: 'Read Our Story' },

  // Branches
  'branches.title': { ar: 'فروعنا', en: 'Find Us' },
  'branches.b1.name': { ar: 'فرع التومامة', en: 'Al Thoumamah Branch' },
  'branches.b2.name': { ar: 'فرع علي الفزاري', en: 'Ali Al Fazari Branch' },
  'branches.hours.weekdays': { ar: 'السبت - الأربعاء: ٦ ص - ١٢ ص', en: 'Sat - Wed: 6 AM - 12 AM' },
  'branches.hours.weekends': { ar: 'الخميس - الجمعة: ٦ ص - ٢ ص', en: 'Thu - Fri: 6 AM - 2 AM' },
  'branches.directions': { ar: 'الاتجاهات', en: 'Get Directions' },

  // Reviews
  'reviews.title': { ar: 'ماذا يقول ضيوفنا', en: 'Customer Reviews' },
  'reviews.more': { ar: 'اقرأ المزيد على جوجل', en: 'Read more reviews on Google' },

  // Instagram
  'social.title': { ar: 'شاركنا لحظاتك', en: 'Share Your Moments' },
  'social.follow': { ar: 'تابعنا على انستجرام @شايهود', en: 'Follow @ShayHood on Instagram' },

  // Loyalty
  'loyalty.title': { ar: 'كل ١٠ كاسات، الكاس الحادية عشر مجانية', en: 'Every 10 cups, your 11th is on us' },
  'loyalty.btn': { ar: 'سجل عبر الواتساب', en: 'Join via WhatsApp' },

  // Footer
  'footer.rights': { ar: '© 2026 شاي هود — الرياض', en: '© 2026 Shay Hood — Riyadh' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

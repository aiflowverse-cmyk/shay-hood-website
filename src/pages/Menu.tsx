import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { clsx } from 'clsx';

type Category = 'all' | 'hot' | 'iced' | 'coffee' | 'extras';

export const Menu = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', ar: 'الكل', en: 'All' },
    { id: 'hot', ar: 'شاي ساخن', en: 'Hot Tea' },
    { id: 'iced', ar: 'شاي مثلج', en: 'Iced Tea' },
    { id: 'coffee', ar: 'قهوة', en: 'Coffee' },
    { id: 'extras', ar: 'إضافات', en: 'Extras' },
  ];

  const menuItems = [
    {
      id: 1,
      category: 'hot',
      arName: 'شاي هود الخاص',
      enName: 'Shay Hood Signature',
      arDesc: 'مزيجنا الخاص من الشاي الأسود مع الزعفران والنعناع',
      enDesc: 'Our signature black tea blend with saffron and mint',
      price: 12,
      image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'hot',
      arName: 'شاي كرك',
      enName: 'Karak Tea',
      arDesc: 'شاي كرك غني بالهيل والزعفران',
      enDesc: 'Rich Karak tea with cardamom and saffron',
      price: 14,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      category: 'hot',
      arName: 'شاي ملقم',
      enName: 'Brewed Black Tea',
      arDesc: 'شاي أسود ثقيل محضر بالطريقة التقليدية',
      enDesc: 'Strong black tea brewed the traditional way',
      price: 10,
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      category: 'iced',
      arName: 'شاي خوخ مثلج',
      enName: 'Iced Peach Tea',
      arDesc: 'شاي مثلج منعش بنكهة الخوخ الطبيعي',
      enDesc: 'Refreshing iced tea with natural peach flavor',
      price: 16,
      image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      category: 'coffee',
      arName: 'قهوة عربية',
      enName: 'Arabic Coffee',
      arDesc: 'دلة قهوة عربية أصيلة مع الهيل والزعفران',
      enDesc: 'Authentic Arabic coffee dallah with cardamom and saffron',
      price: 25,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      category: 'coffee',
      arName: 'قهوة تركية',
      enName: 'Turkish Coffee',
      arDesc: 'قهوة تركية غنية ومحمصة بعناية',
      enDesc: 'Rich and carefully roasted Turkish coffee',
      price: 15,
      image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 7,
      category: 'extras',
      arName: 'كيكة التمر',
      enName: 'Date Cake',
      arDesc: 'كيكة التمر الدافئة مع صوص الكراميل',
      enDesc: 'Warm date cake with caramel sauce',
      price: 22,
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredMenu = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'المنيو | شاي هود' : 'Menu | Shay Hood'}</title>
        <meta name="description" content={language === 'ar' ? 'تصفح قائمة شاي هود. شاي ساخن، شاي مثلج، قهوة عربية وحلويات.' : 'Browse Shay Hood menu. Hot tea, iced tea, Arabic coffee, and desserts.'} />
      </Helmet>

      {/* ✅ SKILL: pt-24 prevents content hiding behind fixed navbar */}
      <div className="bg-sand-50 min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">
              {language === 'ar' ? 'قائمة الطلبات' : 'Our Menu'}
            </h1>
            <p className="text-brown-700 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'نقدم لكم تشكيلة مختارة بعناية من أجود أنواع الشاي والقهوة، محضرة بشغف لترضي ذائقتكم.'
                : 'We offer a carefully selected range of the finest teas and coffees, prepared with passion to satisfy your taste.'}
            </p>
          </div>

          {/* Category Filter — ✅ SKILL: cursor-pointer on all interactive buttons */}
          <div className="flex overflow-x-auto no-scrollbar gap-3 mb-10 pb-2 justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={clsx(
                  'whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors cursor-pointer',
                  activeCategory === cat.id
                    ? 'bg-brown-900 text-white shadow-md'
                    : 'bg-white text-brown-800 border border-sand-200 hover:border-gold-500'
                )}
              >
                {language === 'ar' ? cat.ar : cat.en}
              </button>
            ))}
          </div>

          {/* Menu Grid — 2 cols on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-sand-200/50 flex flex-col cursor-pointer hover:shadow-md transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={language === 'ar' ? `${item.arName} — ${item.arDesc}` : `${item.enName} — ${item.enDesc}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1 md:mb-3 flex-wrap gap-1">
                    <h3 className="text-sm md:text-xl font-bold text-brown-900 leading-snug">
                      {language === 'ar' ? item.arName : item.enName}
                    </h3>
                    <span className="text-gold-600 font-bold text-xs md:text-base whitespace-nowrap">
                      {item.price} {language === 'ar' ? 'ر.س' : 'SAR'}
                    </span>
                  </div>
                  <p className="text-brown-700 text-xs md:text-sm hidden sm:block flex-grow">
                    {language === 'ar' ? item.arDesc : item.enDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Platforms — ✅ SKILL: cursor-pointer on buttons */}
          <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 text-center border border-sand-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4">
              {language === 'ar' ? 'اطلب الآن عبر تطبيقات التوصيل' : 'Order Now via Delivery Apps'}
            </h2>
            <p className="text-brown-700 mb-8 max-w-xl mx-auto">
              {language === 'ar'
                ? 'استمتع بمشروباتك المفضلة أينما كنت. نحن متواجدون على تطبيقات التوصيل الرائدة.'
                : 'Enjoy your favorite drinks wherever you are. We are available on leading delivery apps.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#FFCC00] text-brown-900 px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer">
                HungerStation
              </button>
              <button className="bg-[#E33535] text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer">
                Jahez
              </button>
              <button className="bg-[#000000] text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer">
                Ninja
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

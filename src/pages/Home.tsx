import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Coffee, MapPin, Star, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'شاي هود | الرئيسية' : 'Shay Hood | Home'}</title>
        <meta name="description" content={language === 'ar' ? 'شاي أصيل، لحظات حقيقية. فرعان في الرياض.' : 'Authentic tea, real moments. Two branches in Riyadh.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ SKILL: Reserve space with explicit dimensions to prevent content jump */}
          <img 
            src="https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&q=80&w=2070" 
            alt="يد تصب الشاي العربي في كوب زجاجي — شاي هود" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-brown-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-sand-50 via-transparent to-transparent"></div>
        </div>
        
        {/* ✅ SKILL: mt-20 accounts for fixed navbar height so content is never hidden */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-sand-50 mb-6 drop-shadow-lg leading-tight">
            {t('hero.headline')}
          </h1>
          <p className="text-xl md:text-2xl text-sand-200 mb-10 font-medium drop-shadow-md">
            {t('hero.subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* ✅ SKILL: cursor-pointer explicitly on CTA links */}
            <Link to="/menu" className="w-full sm:w-auto bg-gold-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-600 transition-colors shadow-lg cursor-pointer">
              {t('hero.cta.menu')}
            </Link>
            <Link to="/menu" className="w-full sm:w-auto bg-sand-50 text-brown-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-sand-100 transition-colors shadow-lg cursor-pointer">
              {t('hero.cta.order')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-sand-50 relative -mt-10 z-20 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-sand-200/50">
              <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center text-gold-500 mb-4">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-bold text-brown-900">{t('why.fresh')}</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-sand-200/50">
              <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center text-gold-500 mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-brown-900">{t('why.locations')}</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-sand-200/50">
              <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center text-gold-500 mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-brown-900">{t('why.rating')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-sand-100">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-serif text-brown-900 mb-2">{t('featured.title')}</h2>
              <div className="w-20 h-1 bg-gold-500 rounded-full"></div>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-2 text-brown-700 hover:text-gold-500 font-medium transition-colors">
              {t('featured.viewAll')}
              {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Item 1 */}
            {/* ✅ SKILL: cursor-pointer on interactive cards */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-200/50 group hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* ✅ SKILL: Descriptive alt text + lazy loading */}
                <img src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800" alt={language === 'ar' ? 'شاي هود الخاص — شاي أسود بالزعفران والنعناع' : 'Shay Hood Signature tea with saffron and mint'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-brown-900">{language === 'ar' ? 'شاي هود الخاص' : 'Shay Hood Signature'}</h3>
                  <span className="text-gold-600 font-bold">12 SAR</span>
                </div>
                <p className="text-brown-700 text-sm">{language === 'ar' ? 'مزيجنا الخاص من الشاي الأسود مع الزعفران والنعناع' : 'Our signature black tea blend with saffron and mint'}</p>
              </div>
            </div>
            {/* Featured Item 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-200/50 group hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800" alt={language === 'ar' ? 'شاي كرك بالهيل والزعفران' : 'Karak Tea with cardamom and saffron'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-brown-900">{language === 'ar' ? 'شاي كرك' : 'Karak Tea'}</h3>
                  <span className="text-gold-600 font-bold">14 SAR</span>
                </div>
                <p className="text-brown-700 text-sm">{language === 'ar' ? 'شاي كرك غني بالهيل والزعفران' : 'Rich Karak tea with cardamom and saffron'}</p>
              </div>
            </div>
            {/* Featured Item 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-200/50 group hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800" alt={language === 'ar' ? 'قهوة عربية أصيلة دلة بالهيل' : 'Authentic Arabic Coffee dallah with cardamom'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-brown-900">{language === 'ar' ? 'قهوة عربية' : 'Arabic Coffee'}</h3>
                  <span className="text-gold-600 font-bold">25 SAR</span>
                </div>
                <p className="text-brown-700 text-sm">{language === 'ar' ? 'دلة قهوة عربية أصيلة مع الهيل والزعفران' : 'Authentic Arabic coffee dallah with cardamom and saffron'}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center gap-2 text-gold-600 font-bold">
              {t('featured.viewAll')}
              {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="py-24 bg-brown-900 text-sand-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown-800/50 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gold-400">{t('story.title')}</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-10 text-sand-100/90 font-light">
              {t('story.teaser')}
            </p>
            <Link to="/about" className="inline-block border-2 border-gold-500 text-gold-400 px-8 py-3 rounded-full font-bold hover:bg-gold-500 hover:text-white transition-colors">
              {t('story.btn')}
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brown-900 mb-4">{t('reviews.title')}</h2>
            <div className="flex items-center justify-center gap-2 text-xl font-bold text-brown-800">
              <Star className="text-gold-500 fill-gold-500" size={24} />
              <span>4.65</span>
              <span className="text-brown-700 font-normal text-base mx-2">|</span>
              <span className="text-brown-700 font-normal text-base">138 {language === 'ar' ? 'تقييم على جوجل' : 'Google Reviews'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand-200/50">
              <div className="flex text-gold-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold-500" />)}
              </div>
              <p className="text-brown-800 mb-6 leading-relaxed">
                {language === 'ar' 
                  ? '"أفضل شاي كرك في الرياض بلا منازع. المكان هادئ ومريح وتعامل الموظفين راقي جداً."'
                  : '"The best Karak tea in Riyadh without a doubt. The place is quiet and comfortable, and the staff are very classy."'}
              </p>
              <p className="font-bold text-brown-900">- Abdullah M.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand-200/50">
              <div className="flex text-gold-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold-500" />)}
              </div>
              <p className="text-brown-800 mb-6 leading-relaxed">
                {language === 'ar' 
                  ? '"شاي هود هو مكاني المفضل كل مساء. الشاي الملقم عندهم يذكرني بشاي الأولين."'
                  : '"Shay Hood is my favorite place every evening. Their brewed tea reminds me of the good old days."'}
              </p>
              <p className="font-bold text-brown-900">- Sara A.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand-200/50 hidden lg:block">
              <div className="flex text-gold-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold-500" />)}
              </div>
              <p className="text-brown-800 mb-6 leading-relaxed">
                {language === 'ar' 
                  ? '"القهوة العربية ممتازة جداً وتأتي مع تمر طازج. فرع التومامة ديكوره يفتح النفس."'
                  : '"The Arabic coffee is excellent and comes with fresh dates. The decor of Al Thoumamah branch is refreshing."'}
              </p>
              <p className="font-bold text-brown-900">- Khalid S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty CTA */}
      <section className="py-16 bg-gold-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <Coffee size={48} className="mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {t('loyalty.title')}
            </h2>
            <a 
              href="https://wa.me/966553836607?text=أود%20الانضمام%20لبرنامج%20الولاء" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gold-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-sand-50 transition-colors shadow-lg"
            >
              <MessageCircle size={24} />
              {t('loyalty.btn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

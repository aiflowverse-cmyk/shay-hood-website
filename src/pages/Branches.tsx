import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export const Branches = () => {
  const { t, language } = useLanguage();

  const branches = [
    {
      id: 1,
      nameAr: 'فرع التومامة',
      nameEn: 'Al Thoumamah Branch',
      addressAr: 'طريق الثمامة، الرياض، المملكة العربية السعودية',
      addressEn: 'Al Thoumamah Rd, Riyadh, Saudi Arabia',
      phone: '+966 55 383 6607',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=شاي+هود&query_place_id=ChIJo__vXwD9Lj4R3xVwBZXVFaY',
      rating: 4.5,
      reviews: 60,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 2,
      nameAr: 'فرع علي الفزاري',
      nameEn: 'Ali Al Fazari Branch',
      addressAr: '3575 شارع علي الفزاري، الرياض',
      addressEn: '3575 Ali Al Fazari, Riyadh',
      phone: '+966 50 022 8505',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=شاي+هود&query_place_id=ChIJh5wgagD_Lj4RNWFUzGOnXyc',
      rating: 4.8,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'فروعنا | شاي هود' : 'Branches | Shay Hood'}</title>
        <meta name="description" content={language === 'ar' ? 'فروع شاي هود في الرياض. التومامة وعلي الفزاري.' : 'Shay Hood branches in Riyadh. Al Thoumamah and Ali Al Fazari.'} />
      </Helmet>

      <div className="bg-sand-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">
              {t('branches.title')}
            </h1>
            <p className="text-brown-700 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نسعد باستقبالكم في فروعنا في الرياض. اختر الفرع الأقرب إليك.' 
                : 'We are happy to welcome you at our branches in Riyadh. Choose the branch nearest to you.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sand-200/50 flex flex-col">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={branch.image} 
                    alt={language === 'ar' ? branch.nameAr : branch.nameEn} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-brown-900 flex items-center gap-1">
                    ⭐ {branch.rating}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-serif text-brown-900 mb-6">
                    {language === 'ar' ? branch.nameAr : branch.nameEn}
                  </h2>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-start gap-3 text-brown-700">
                      <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                      <span>{language === 'ar' ? branch.addressAr : branch.addressEn}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brown-700">
                      <Phone className="text-gold-500 shrink-0" size={20} />
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-gold-600" dir="ltr">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-brown-700">
                      <Clock className="text-gold-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p>{t('branches.hours.weekdays')}</p>
                        <p>{t('branches.hours.weekends')}</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={branch.mapUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-brown-900 text-sand-50 py-3 rounded-xl font-medium hover:bg-brown-800 transition-colors"
                  >
                    <ExternalLink size={18} />
                    {t('branches.directions')}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

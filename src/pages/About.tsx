import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

export const About = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'قصتنا | شاي هود' : 'Our Story | Shay Hood'}</title>
        <meta name="description" content={language === 'ar' ? 'تعرف على قصة شاي هود وجذورنا العميقة في التراث العربي.' : 'Learn about the story of Shay Hood and our deep roots in Arabian heritage.'} />
      </Helmet>

      <div className="bg-sand-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">
              {t('story.title')}
            </h1>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand-200/50 mb-12">
            <div className="prose prose-lg max-w-none text-brown-800 leading-relaxed">
              {language === 'ar' ? (
                <>
                  <p className="text-xl font-medium mb-6 text-brown-900">
                    اسم "هود" يحمل في طياته إرثاً عربياً عميقاً، مستلهماً من نبي الله هود عليه السلام، ليعكس الحكمة والجذور العميقة في أرضنا.
                  </p>
                  <p>
                    بدأت رحلة "شاي هود" من شغفنا بتقديم كوب الشاي المثالي، ليس كمجرد مشروب، بل كطقس يومي يجمع الأحبة والأصدقاء. نحن نؤمن أن الشاي هو لغة الضيافة الأولى في ثقافتنا، ولذلك حرصنا على أن يكون كل كوب نقدمه يحمل معه دفء الاستقبال وأصالة المذاق.
                  </p>
                  <p>
                    في فروعنا في الرياض، سواء في الثمامة أو علي الفزاري، نسعى دائماً لخلق بيئة دافئة ومرحبة. نحن لسنا مجرد مقهى، بل نحن مساحة يلتقي فيها الجيران ليصبحوا أصدقاء، والأصدقاء ليصبحوا عائلة.
                  </p>
                  <p>
                    نختار أوراق الشاي بعناية فائقة، ونحضرها بالطرق التقليدية التي تبرز النكهة الأصلية، مع لمساتنا الخاصة التي تجعل من "شاي هود" تجربة لا تُنسى.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xl font-medium mb-6 text-brown-900">
                    The name "Hood" carries deep Arabian heritage, inspired by Prophet Hud, reflecting wisdom and deep roots in our land.
                  </p>
                  <p>
                    The journey of "Shay Hood" began with our passion for serving the perfect cup of tea, not just as a beverage, but as a daily ritual that brings loved ones and friends together. We believe that tea is the primary language of hospitality in our culture, which is why we ensure that every cup we serve carries the warmth of reception and the authenticity of taste.
                  </p>
                  <p>
                    In our Riyadh branches, whether in Al Thoumamah or Ali Al Fazari, we always strive to create a warm and welcoming environment. We are not just a cafe; we are a space where neighbors meet to become friends, and friends become family.
                  </p>
                  <p>
                    We select our tea leaves with utmost care and prepare them using traditional methods that highlight the original flavor, with our special touches that make "Shay Hood" an unforgettable experience.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=1000" 
                alt="Tea preparation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595908129746-5741f5202868?auto=format&fit=crop&q=80&w=1000" 
                alt="Arabic Coffee" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

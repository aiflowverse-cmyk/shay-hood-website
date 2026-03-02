import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Send } from 'lucide-react';

export const Wholesale = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'مبيعات الجملة | شاي هود' : 'Wholesale | Shay Hood'}</title>
        <meta name="description" content={language === 'ar' ? 'اطلب شاي هود بالجملة للمناسبات والشركات.' : 'Order Shay Hood wholesale for events and corporate.'} />
      </Helmet>

      <div className="bg-sand-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-brown-900 mb-4">
              {language === 'ar' ? 'مبيعات الجملة والمناسبات' : 'Wholesale & Events'}
            </h1>
            <p className="text-brown-700">
              {language === 'ar' 
                ? 'نقدم خدمات توريد الشاي والقهوة للشركات والمناسبات الخاصة بأسعار تنافسية وجودة عالية.' 
                : 'We offer tea and coffee supply services for corporate and private events with competitive prices and high quality.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand-200/50">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brown-900 mb-2">
                  {language === 'ar' ? 'تم إرسال طلبك بنجاح' : 'Request Sent Successfully'}
                </h3>
                <p className="text-brown-700 mb-8">
                  {language === 'ar' ? 'سنتواصل معك في أقرب وقت ممكن.' : 'We will contact you as soon as possible.'}
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-brown-900 text-sand-50 px-8 py-3 rounded-xl font-medium hover:bg-brown-800 transition-colors"
                >
                  {language === 'ar' ? 'إرسال طلب آخر' : 'Send Another Request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brown-900 mb-2">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-900 mb-2">
                      {language === 'ar' ? 'اسم الشركة / الجهة' : 'Company Name'}
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brown-900 mb-2">
                      {language === 'ar' ? 'رقم الجوال' : 'Phone Number'}
                    </label>
                    <input 
                      type="tel" 
                      required
                      dir="ltr"
                      className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-left"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-900 mb-2">
                      {language === 'ar' ? 'الكمية المتوقعة (كوب)' : 'Expected Quantity (Cups)'}
                    </label>
                    <input 
                      type="number" 
                      required
                      className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brown-900 mb-2">
                    {language === 'ar' ? 'تفاصيل إضافية' : 'Additional Details'}
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full bg-sand-50 border border-sand-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brown-900 text-sand-50 py-4 rounded-xl font-bold text-lg hover:bg-brown-800 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-sand-50 border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    language === 'ar' ? 'إرسال الطلب' : 'Submit Request'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

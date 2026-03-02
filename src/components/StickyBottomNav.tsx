import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Coffee, MapPin, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clsx } from 'clsx';

export const StickyBottomNav = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'الرئيسية', enLabel: 'Home', path: '/' },
    { icon: Coffee, label: 'المنيو', enLabel: 'Menu', path: '/menu' },
    { icon: ShoppingBag, label: 'اطلب', enLabel: 'Order', path: '/menu' },
    { icon: MapPin, label: 'فروعنا', enLabel: 'Branches', path: '/branches' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-sand-50 border-t border-sand-200 z-40 pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path + item.label}
              to={item.path}
              className={clsx(
                'flex flex-col items-center justify-center w-full h-full gap-1 transition-colors',
                isActive ? 'text-gold-500' : 'text-brown-700 hover:text-brown-900'
              )}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

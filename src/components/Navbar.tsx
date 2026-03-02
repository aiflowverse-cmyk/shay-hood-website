import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { clsx } from 'clsx';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.branches'), path: '/branches' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.wholesale'), path: '/wholesale' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-sand-100/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo — real brand mark cropped to circle */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gold-500 ring-offset-1 shrink-0 bg-white">
              <img
                src="/logo.jpg"
                alt="شاي هود لوغو"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
            <span className="font-arabic font-bold text-2xl tracking-tight text-brown-900">
              شاي هود
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-brown-800 hover:text-gold-500 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* ✅ SKILL: aria-label on icon-only interactive element */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-brown-800 hover:text-gold-500 font-medium transition-colors cursor-pointer"
              aria-label={language === 'ar' ? 'Switch to English' : 'تغيير إلى العربية'}
            >
              <Globe size={18} />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <Link
              to="/menu"
              className="bg-brown-900 text-sand-50 px-5 py-2 rounded-full font-medium hover:bg-brown-800 transition-colors cursor-pointer"
            >
              {t('nav.order')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          {/* ✅ SKILL: aria-label + aria-expanded on icon-only buttons */}
          <button
            className="md:hidden text-brown-900 p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sand-100 border-t border-sand-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-brown-900 font-medium text-lg py-2 border-b border-sand-200/50"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-brown-900 font-medium py-2"
            >
              <Globe size={20} />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            <Link
              to="/menu"
              className="bg-brown-900 text-sand-50 px-6 py-2 rounded-full font-medium"
            >
              {t('nav.order')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

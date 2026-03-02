import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { StickyBottomNav } from './StickyBottomNav';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 font-arabic">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyBottomNav />
    </div>
  );
};

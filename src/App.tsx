/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Branches } from './pages/Branches';
import { About } from './pages/About';
import { Wholesale } from './pages/Wholesale';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="branches" element={<Branches />} />
              <Route path="about" element={<About />} />
              <Route path="wholesale" element={<Wholesale />} />
            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

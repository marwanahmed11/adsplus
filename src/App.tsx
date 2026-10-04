import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LightsProvider, useLights } from './context/LightsContext';
import { EasterEggProvider } from './context/EasterEggContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IntroOverlay } from './components/IntroOverlay';
import { LightsOverlay } from './components/LightsOverlay';
import { EasterEggRain } from './components/EasterEggRain';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { useScrambleEffect } from './hooks/useScramble';
import { useMagneticEffect } from './hooks/useMagnetic';
import { useTiltEffect } from './hooks/useTilt';
import { useSpotlightEffect } from './hooks/useSpotlight';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AppContent: React.FC = () => {
  const { lightsState } = useLights();

  // Attach global interactions
  useScrambleEffect();
  useMagneticEffect();
  useTiltEffect();
  useSpotlightEffect();

  return (
    <div
      className="site"
      style={{
        position: 'relative',
        background: '#000000',
        color: '#f2f0ec',
        fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
        minHeight: '100vh',
        overflowX: 'clip',
      }}
    >
      <div className="grain" />
      <IntroOverlay />
      <LightsOverlay />
      <EasterEggRain />

      <div className={`lights ${lightsState}`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about.html" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services.html" element={<ServicesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients.html" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.html" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LightsProvider>
      <EasterEggProvider>
        <ScrollToTop />
        <AppContent />
      </EasterEggProvider>
    </LightsProvider>
  );
};

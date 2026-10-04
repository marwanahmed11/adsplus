import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Navbar({ onOpenProjectBrief }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#method' },
    { label: 'Work', href: '#work' },
    { label: 'Clients', href: '#clients' },
    { label: 'Industries', href: '#industries' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`navbar-fixed flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled ? 'navbar-scrolled py-4' : 'bg-transparent py-6'
        }`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '1rem clamp(1.5rem, 4vw, 4rem)' : '1.75rem clamp(1.5rem, 4vw, 4rem)'
        }}
      >
        {/* Brand Logo Left */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 text-white no-underline group"
          data-cursor="HOME"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <img
            src="/assets/logo-light.png"
            alt="Ads Plus+ Logo"
            className="h-8 md:h-9 object-contain"
            style={{ height: '34px', width: 'auto' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline-flex';
            }}
          />
          <span
            style={{
              display: 'none',
              fontFamily: "'SK Concretica', 'Syne', sans-serif",
              fontSize: '1.75rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff'
            }}
          >
            ads plus<span style={{ color: '#ed1c24' }}>+</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-8"
          style={{ display: 'none' }}
          id="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-widest text-[#bab6ad] hover:text-white transition-colors duration-200 relative group"
              style={{
                fontFamily: "var(--font-primary)",
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                color: '#bab6ad',
                textDecoration: 'none',
                padding: '0.5rem 0'
              }}
            >
              {link.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '1px',
                  backgroundColor: '#ed1c24',
                  transition: 'width 0.25s ease'
                }}
                className="group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenProjectBrief}
            className="btn-primary"
            data-cursor="BRIEF"
            style={{
              padding: '0.85rem 1.6rem',
              fontSize: '0.8125rem'
            }}
          >
            <span>Start a Project</span>
            <span className="btn-plus">+</span>
          </button>

          {/* Mobile Menu Button: MENU + */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-menu-trigger"
            aria-label="Open Navigation Menu"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              padding: '0.75rem 1.25rem',
              fontFamily: 'var(--font-primary)',
              fontWeight: 700,
              fontSize: '0.8125rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span>Menu</span>
            <span style={{ color: '#ed1c24', fontWeight: 800 }}>+</span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile / Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 5, 5, 0.98)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem clamp(1.5rem, 5vw, 4rem)',
            backdropFilter: 'blur(20px)',
            animation: 'modalFadeIn 0.3s ease forwards'
          }}
        >
          {/* Top Bar inside Menu */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/assets/logo-light.png" alt="Ads Plus+" style={{ height: '32px' }} />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Links list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: 'auto 0' }}>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: '#ffffff',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  lineHeight: 1.1
                }}
              >
                <span style={{ fontSize: '1rem', color: '#ed1c24', fontFamily: 'var(--font-mono)' }}>
                  0{idx + 1}
                </span>
                <span>{link.label}</span>
                <span style={{ color: '#ed1c24', opacity: 0.8 }}>+</span>
              </a>
            ))}
          </div>

          {/* Bottom Info inside Drawer */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.85rem',
              color: '#bab6ad'
            }}
          >
            <div>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>CAIRO, EGYPT</span> — EGYPT + GCC + INTL
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a
                href="https://www.linkedin.com/company/ads-plus-agency"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#bab6ad', textDecoration: 'none' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/adsplus_agency"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#bab6ad', textDecoration: 'none' }}
              >
                Instagram ↗
              </a>
              <a
                href="tel:+201021657065"
                style={{ color: '#ed1c24', textDecoration: 'none', fontWeight: 700 }}
              >
                +20 102 165 7065
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Style for displaying desktop nav above 1100px */}
      <style>{`
        @media (min-width: 1120px) {
          #desktop-nav {
            display: flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

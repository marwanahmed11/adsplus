import React from 'react';
import { BRAND_INFO } from '../data/content';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';

interface FooterProps {
  onOpenProjectBrief: () => void;
}

interface FooterLinkItem {
  label: string;
  href: string;
}

export default function Footer({ onOpenProjectBrief }: FooterProps): React.JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: FooterLinkItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Approach', href: '#method' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Clients', href: '#clients' },
    { label: 'Industries', href: '#industries' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem) 2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1.5fr) minmax(200px, 1fr) minmax(240px, 1fr)',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            marginBottom: '5rem'
          }}
          className="footer-grid-layout"
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <img
                src="/assets/logo-light.png"
                alt="Ads Plus+"
                style={{ height: '36px', width: 'auto' }}
              />
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#bab6ad',
                maxWidth: '380px',
                marginBottom: '2rem'
              }}
            >
              Specialized strategic marketing consultancy and creative agency. Built around a consulting-led model connecting strategy, creative, performance, and execution.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={onOpenProjectBrief}
                className="btn-primary"
                data-cursor="BRIEF"
                style={{ padding: '0.85rem 1.6rem', fontSize: '0.8125rem' }}
              >
                <span>Start A Project</span>
                <span className="btn-plus">+</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: '#837f77',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem'
              }}
            >
              NAVIGATION +
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {navLinks.map((item: FooterLinkItem) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ed1c24')}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ffffff')}
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: '#837f77',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem'
              }}
            >
              CONNECT +
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#837f77', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>OFFICE</div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>Cairo, Egypt</div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#837f77', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>DIRECT LINE</div>
                <a href="tel:+201021657065" style={{ color: '#ed1c24', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                  +20 102 165 7065
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#837f77', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>CHANNELS</div>
                <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.5rem' }}>
                  <a
                    href={BRAND_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#bab6ad', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ed1c24')}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#bab6ad')}
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#bab6ad', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#ed1c24')}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#bab6ad')}
                  >
                    <InstagramIcon size={16} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              data-cursor="TOP"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.75rem' }}
            >
              <span>Back To Top</span>
              <ArrowUp size={14} style={{ color: '#ed1c24' }} />
            </button>
          </div>
        </div>

        {/* Large Watermark Typography */}
        <div style={{ overflow: 'hidden', padding: '1rem 0' }}>
          <div className="footer-watermark">
            BUILT TO SELL<span style={{ color: '#ed1c24', opacity: 0.25 }}>+</span>
          </div>
        </div>

        {/* Bottom Metadata & Legal Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#666666',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          <div>
            CAIRO / EGYPT <span style={{ color: '#ed1c24' }}>+</span> GCC <span style={{ color: '#ed1c24' }}>+</span> INTERNATIONAL
          </div>

          <div>
            © 2026 ADS PLUS+ · ALL RIGHTS RESERVED · STRATEGIC MARKETING CONSULTANCY
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .footer-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

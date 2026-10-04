import React from 'react';
import { Link } from 'react-router-dom';
import { useCairoClock } from '../hooks/useCairoClock';

export const Footer: React.FC = () => {
  const { time, isOpen, statusText } = useCairoClock();

  return (
    <footer style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid #161616' }}>
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          paddingLeft: 'clamp(20px, 4vw, 64px)',
          paddingRight: 'clamp(20px, 4vw, 64px)',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px',
          paddingTop: '72px',
          paddingBottom: '40px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1 1 280px' }}>
          <img
            src="/assets/logo-light.png"
            alt="Ads Plus+"
            style={{ height: '30px', width: 'auto', alignSelf: 'flex-start' }}
          />
          <p style={{ margin: 0, color: '#8f8b84', fontSize: '15px', lineHeight: 1.6, maxWidth: '32ch' }}>
            Strategic marketing consultancy. Cairo, Egypt. Working across Egypt, the Gulf and international markets since 2018.
          </p>
        </div>

        <nav
          aria-label="Footer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flex: '0 1 160px',
            fontSize: '15px',
          }}
        >
          <Link to="/about" style={{ textDecoration: 'none' }}>
            About
          </Link>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            Services
          </Link>
          <Link to="/clients" style={{ textDecoration: 'none' }}>
            Clients
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            Contact
          </Link>
        </nav>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flex: '0 1 260px',
            fontSize: '15px',
          }}
        >
          <a
            href="https://www.instagram.com/adsplus_agency"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/search/results/all/?keywords=ads%20plus%20agency"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          <a href="tel:+201021657065" style={{ textDecoration: 'none' }}>
            +20 102 165 7065
          </a>
        </div>
      </div>

      <div
        className="marq slow"
        aria-hidden="true"
        style={{ padding: '28px 0', borderTop: '1px solid #161616', borderBottom: '1px solid #161616' }}
      >
        <div className="track">
          <span
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(90px, 15vw, 240px)',
              lineHeight: 1.05,
            }}
            className="outline"
          >
            BUILT TO SELL
          </span>
          <span
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(90px, 15vw, 240px)',
              lineHeight: 1.05,
              color: '#ec1c24',
            }}
          >
            +
          </span>
          <span
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(90px, 15vw, 240px)',
              lineHeight: 1.05,
            }}
            className="outline"
          >
            BUILT TO SELL
          </span>
          <span
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(90px, 15vw, 240px)',
              lineHeight: 1.05,
              color: '#ec1c24',
            }}
          >
            +
          </span>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          paddingLeft: 'clamp(20px, 4vw, 64px)',
          paddingRight: 'clamp(20px, 4vw, 64px)',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '12px',
          paddingTop: '22px',
          paddingBottom: '28px',
          fontSize: '13px',
          color: '#5f5c58',
        }}
      >
        <span>© Ads Plus+</span>
        <span>
          <span className={`cdot ${isOpen ? 'open' : ''}`} aria-hidden="true" />
          Cairo <span data-clock-time>{time}</span> · <span data-clock-text>{statusText}</span>
        </span>
      </div>
    </footer>
  );
};

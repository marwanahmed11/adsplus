import React from 'react';

interface FinalCTAProps {
  onOpenProjectBrief: () => void;
}

export default function FinalCTA({ onOpenProjectBrief }: FinalCTAProps): React.JSX.Element {
  const scrollToContact = (): void => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="final-cta"
      className="cta-banner-red"
      style={{
        backgroundColor: '#ed1c24',
        color: '#ffffff',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Pattern Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '500px',
          height: '500px',
          opacity: 0.12,
          pointerEvents: 'none'
        }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <path d="M 140,20 L 260,20 L 260,140 L 380,140 L 380,260 L 260,260 L 260,380 L 140,380 L 140,260 L 20,260 L 20,140 L 140,140 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.8125rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#ffffff',
              opacity: 0.85,
              marginBottom: '2rem'
            }}
          >
            + THE NEXT COMMERCIAL STEP
          </div>

          {/* Huge Headlines */}
          <h2
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 900,
              fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            HAVE A BUSINESS<br />
            CHALLENGE?
          </h2>

          <h3
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4.5vw, 4.2rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              textTransform: 'uppercase',
              color: '#000000',
              marginTop: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            LET'S TURN IT INTO<br />
            A MARKETING DIRECTION{' '}
            <span style={{ color: '#ffffff' }}>+</span>
          </h3>

          {/* Flip Button */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
            <button
              onClick={onOpenProjectBrief}
              className="btn-cta-flip"
              data-cursor="CONNECT"
            >
              <span>Start A Conversation</span>
              <span className="cta-plus" style={{ fontSize: '1.25rem', fontWeight: 800 }}>↗</span>
            </button>

            <button
              onClick={scrollToContact}
              data-cursor="DIRECT"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                color: '#ffffff',
                padding: '1.3rem 2.2rem',
                fontFamily: 'var(--font-primary)',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Send Detailed Brief ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

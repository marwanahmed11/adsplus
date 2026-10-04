import React from 'react';

export default function MissionVision(): React.JSX.Element {
  return (
    <section
      id="mission-vision"
      style={{
        backgroundColor: '#050505',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Massive Editorial Headline */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
            <span className="accent">+</span>
            <span>PURPOSE & HORIZON</span>
          </div>

          <h2
            className="editorial-h2"
            style={{
              lineHeight: 0.95,
              maxWidth: '1200px'
            }}
          >
            SMARTER DECISIONS.<br />
            <span style={{ color: '#ffffff' }}>STRONGER BRANDS.</span>
          </h2>
        </div>

        {/* Two Editorial Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '3.5rem'
          }}
        >
          {/* Mission */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#837f77'
                }}
              >
                OUR MISSION
              </span>
              <span style={{ color: '#ed1c24', fontWeight: 800, fontSize: '1.25rem' }}>+</span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)',
                lineHeight: 1.55,
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}
            >
              Help businesses make smarter marketing decisions through strategic consulting, market intelligence, and clear, actionable direction — turning complex challenges into focused strategies that drive sustainable growth.
            </p>

            <div style={{ color: '#837f77', fontSize: '0.9rem', lineHeight: 1.6 }}>
              We eliminate subjective guesswork, grounding every campaign in verified market facts and business reality.
            </div>
          </div>

          {/* Vision */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#837f77'
                }}
              >
                OUR VISION
              </span>
              <span style={{ color: '#ed1c24', fontWeight: 800, fontSize: '1.25rem' }}>+</span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)',
                lineHeight: 1.55,
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}
            >
              Become the most trusted strategic marketing partner for ambitious businesses across Egypt, the Gulf, and international markets — shaping better decisions, stronger brands, and long-term growth through consulting-led marketing.
            </p>

            <div style={{ color: '#837f77', fontSize: '0.9rem', lineHeight: 1.6 }}>
              A standard of marketing excellence recognized across Cairo, Riyadh, Dubai, and global financial corridors.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

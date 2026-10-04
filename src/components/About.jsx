import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenAboutModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#050505',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Editorial Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          backgroundImage: 'radial-gradient(ellipse at center, rgba(237, 28, 36, 0.05) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div
        className="container-wide"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Column (40%) */}
        <div>
          <div className="editorial-eyebrow" style={{ marginBottom: '1.75rem' }}>
            <span className="accent">01 +</span>
            <span>ABOUT ADS PLUS+</span>
          </div>

          <h2
            className="editorial-h2"
            style={{
              lineHeight: 0.95,
              marginBottom: '2rem'
            }}
          >
            BUSINESS FIRST.{' '}
            <span style={{ color: '#bab6ad', display: 'block', fontWeight: 800 }}>
              MARKETING SECOND.
            </span>
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '2rem'
            }}
          >
            {[
              'Established in Cairo in 2018',
              'Strategic marketing consultancy model',
              'Operating across Egypt, GCC & International',
              'Direct connection between marketing and EBITDA'
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  color: '#bab6ad',
                  fontFamily: 'var(--font-primary)'
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ed1c24',
                    borderRadius: '50%'
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={onOpenAboutModal}
              className="btn-secondary"
              data-cursor="ABOUT"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.25)',
                padding: '1.1rem 2rem'
              }}
            >
              <span>More About Us</span>
              <span style={{ color: '#ed1c24', fontWeight: 800 }}>+</span>
            </button>
          </div>
        </div>

        {/* Right Column (60%): Editorial Card & Authentic Profile Imagery */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: '#0a0a0a',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Authentic Brand Editorial Video & Image */}
            <div style={{ height: '360px', overflow: 'hidden', position: 'relative' }}>
              <video
                src="/videos/adsplus-office-screens.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isHovered ? 'grayscale(0%) brightness(0.95)' : 'grayscale(50%) brightness(0.8)',
                  transition: 'filter 0.6s ease'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }}
              />
              <img
                src="/assets/editorial-p2.jpg"
                alt="Ads Plus Strategic Team"
                style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #0a0a0a 10%, rgba(10,10,10,0.3) 60%, rgba(0,0,0,0.6) 100%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.14em',
                  color: '#ffffff',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  padding: '0.4rem 0.8rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  textTransform: 'uppercase'
                }}
              >
                Cairo Studio / 2018
              </div>
            </div>

            {/* Core Narrative Copy */}
            <div style={{ padding: '2.5rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: '#ffffff',
                  marginBottom: '1.5rem'
                }}
              >
                Ads Plus+ is a specialized marketing consultancy and creative agency with hands-on experience across Egypt, the Gulf, alongside work across international markets.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#bab6ad',
                  marginBottom: '1.5rem'
                }}
              >
                Established in Cairo in 2018, we bring strategy, creative direction, performance, and execution together through one connected team.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#bab6ad'
                }}
              >
                Our marketing decisions are shaped by the <strong style={{ color: '#ffffff' }}>objective</strong>, the <strong style={{ color: '#ffffff' }}>market</strong>, and the <strong style={{ color: '#ed1c24' }}>decision</strong> the business needs its audience to make.
              </p>

              {/* Bottom Metrics Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginTop: '2.25rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-primary)' }}>
                    2018<span style={{ color: '#ed1c24' }}>+</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#837f77', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Founded in Cairo
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-primary)' }}>
                    3<span style={{ color: '#ed1c24' }}>+</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#837f77', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Continents Served
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-primary)' }}>
                    100<span style={{ color: '#ed1c24' }}>%</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#837f77', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Consulting-Led
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

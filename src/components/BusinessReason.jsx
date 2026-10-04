import React, { useState, useEffect, useRef } from 'react';

export default function BusinessReason() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [highlightBusiness, setHighlightBusiness] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Highlight BUSINESS after a brief beat
          setTimeout(() => setHighlightBusiness(true), 400);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="business-reason"
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Accent Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(237, 28, 36, 0.3), rgba(255, 255, 255, 0.02) 60%, transparent)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow Label */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="editorial-eyebrow">
            <span className="accent">+</span>
            <span>THE BUSINESS REASON</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)', margin: '0 0.5rem' }}>|</span>
            <span style={{ color: '#bab6ad' }}>CORE THESIS</span>
          </div>
        </div>

        {/* Huge Headline */}
        <h2
          className="editorial-h2"
          style={{
            maxWidth: '1280px',
            color: '#ffffff',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          MARKETING SHOULD HAVE A{' '}
          <span
            style={{
              color: highlightBusiness ? '#ed1c24' : '#ffffff',
              transition: 'color 0.8s ease, text-shadow 0.8s ease',
              textShadow: highlightBusiness ? '0 0 35px rgba(237, 28, 36, 0.45)' : 'none'
            }}
          >
            BUSINESS
          </span>{' '}
          REASON BEHIND IT.
        </h2>

        {/* Narrative Connection */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.85rem)',
                fontWeight: 600,
                lineHeight: 1.45,
                color: '#bab6ad',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(25px)',
                transition: 'all 0.8s ease 0.2s'
              }}
            >
              <strong style={{ color: '#ffffff', fontWeight: 800 }}>BUILT TO SELL+</strong> is the connection between the{' '}
              <span style={{ color: '#ffffff' }}>business objective</span>, the{' '}
              <span style={{ color: '#ffffff' }}>market around it</span>, and the{' '}
              <span style={{ color: '#ffffff' }}>marketing direction</span> built from there.
            </p>
          </div>

          {/* Three Strategic Pillars */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(25px)',
              transition: 'all 0.8s ease 0.35s'
            }}
          >
            {[
              { label: 'MORE CLARITY.', desc: 'Eliminate vanity metrics. Focus solely on unit economics and real buyers.' },
              { label: 'MORE DIRECTION.', desc: 'Clear strategic positioning before a single creative asset is designed.' },
              { label: 'MORE CONNECTION.', desc: 'Bridging boardroom commercial targets directly to execution in market.' }
            ].map((pillar, idx) => (
              <div
                key={pillar.label}
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderLeft: '2px solid #ed1c24',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(237, 28, 36, 0.05)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ color: '#ed1c24' }}>+</span>
                  <span>{pillar.label}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#837f77', marginTop: '0.35rem' }}>
                  {pillar.desc}
                </div>
              </div>
            ))}

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                letterSpacing: '0.14em',
                color: '#bab6ad',
                textTransform: 'uppercase',
                marginTop: '0.5rem'
              }}
            >
              BETWEEN MARKETING AND BUSINESS.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { MARKETS_DATA, MarketItem } from '../data/content';
import { Globe, MapPin, Compass, LucideIcon } from 'lucide-react';

export default function Markets(): React.JSX.Element {
  const icons: LucideIcon[] = [MapPin, Compass, Globe];

  return (
    <section
      id="markets"
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Header Block */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
            <span className="accent">+</span>
            <span>GEOGRAPHIC SCOPE</span>
          </div>

          <h2 className="editorial-h2">
            LOCAL EXPERTISE.<br />
            <span style={{ color: '#ffffff' }}>REGIONAL PERSPECTIVE.</span>
          </h2>
        </div>

        {/* 3 Cinematic Panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {MARKETS_DATA.map((mkt: MarketItem, idx: number) => {
            const Icon = icons[idx];

            return (
              <div
                key={mkt.region}
                data-cursor={mkt.region}
                style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: 'clamp(2.5rem, 4vw, 3.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '440px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.borderColor = 'rgba(237, 28, 36, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Background Watermark Region */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 900,
                    fontSize: '4.5rem',
                    color: 'rgba(255, 255, 255, 0.03)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}
                >
                  0{idx + 1}
                </div>

                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ed1c24',
                      marginBottom: '2rem'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 900,
                      fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {mkt.region}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: '#ed1c24',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {mkt.title}
                  </div>

                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: '#bab6ad',
                      marginBottom: '2rem'
                    }}
                  >
                    {mkt.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#837f77', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                    OPERATIONAL FOCUS
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {mkt.focus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

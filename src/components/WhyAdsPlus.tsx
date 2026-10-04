import React from 'react';
import { WHY_ADS_PLUS, WhyAdsPlusItem } from '../data/content';

interface WhyAdsPlusProps {
  onOpenProjectBrief: () => void;
}

export default function WhyAdsPlus({ onOpenProjectBrief }: WhyAdsPlusProps): React.JSX.Element {
  return (
    <section
      id="why"
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Header Block */}
        <div style={{ maxWidth: '1000px', marginBottom: '4.5rem' }}>
          <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
            <span className="accent">+</span>
            <span>THE STRATEGIC ADVANTAGE</span>
          </div>

          <h2 className="editorial-h2" style={{ lineHeight: 0.95 }}>
            MARKETING FOR<br />
            BUSINESSES WHERE<br />
            <span style={{ color: '#ffffff' }}>THE DECISION MATTERS.</span>
          </h2>

          <p
            className="editorial-lead"
            style={{ marginTop: '2rem', maxWidth: '720px' }}
          >
            Clients work with Ads Plus+ when strategy needs to stay connected to execution, and execution needs to stay accountable to the business objective.
          </p>
        </div>

        {/* 4 Large Strategic Benefit Blocks */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {WHY_ADS_PLUS.map((block: WhyAdsPlusItem, idx: number) => (
            <div
              key={idx}
              data-cursor="ADVANTAGE"
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, transform 0.3s ease, background-color 0.3s ease'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = 'rgba(237, 28, 36, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(237, 28, 36, 0.03)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.backgroundColor = '#0a0a0a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Index & Plus */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: '#837f77',
                      letterSpacing: '0.14em'
                    }}
                  >
                    0{idx + 1}
                  </span>

                  <span
                    style={{
                      color: '#ed1c24',
                      fontSize: '1.25rem',
                      fontWeight: 800
                    }}
                  >
                    +
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 900,
                    fontSize: '1.25rem',
                    letterSpacing: '0.02em',
                    lineHeight: 1.3,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem'
                  }}
                >
                  {block.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#bab6ad'
                  }}
                >
                  {block.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div
                style={{
                  marginTop: '2.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                ADS PLUS PILLAR 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

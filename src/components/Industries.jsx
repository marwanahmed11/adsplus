import React, { useState } from 'react';
import { INDUSTRIES_LIST } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Industries({ onOpenProjectBrief }) {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES_LIST[0]);

  return (
    <section
      id="industries"
      style={{
        backgroundColor: '#050505',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Header Block */}
        <div style={{ maxWidth: '900px', marginBottom: '4.5rem' }}>
          <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
            <span className="accent">+</span>
            <span>CROSS-SECTOR MASTERY</span>
          </div>

          <h2 className="editorial-h2">
            EXPERIENCE ACROSS<br />
            <span style={{ color: '#ffffff' }}>MARKETS THAT MOVE.</span>
          </h2>

          <p className="editorial-lead" style={{ marginTop: '1.5rem', maxWidth: '720px' }}>
            Our strategy model adapts to the specific economic velocity, purchase journey length, and margin dynamics of diverse industries.
          </p>
        </div>

        {/* Interactive Industry Cloud & Highlight Panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 3fr) minmax(280px, 2fr)',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'start'
          }}
          className="industries-layout"
        >
          {/* Industry Typography Cloud */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
              alignItems: 'center'
            }}
          >
            {INDUSTRIES_LIST.map((ind) => {
              const isSelected = selectedIndustry.name === ind.name;

              return (
                <button
                  key={ind.name}
                  onClick={() => setSelectedIndustry(ind)}
                  data-cursor="SECTOR"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0.4rem 0.6rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: ind.featured ? 900 : 700,
                    fontSize: ind.featured
                      ? 'clamp(2.2rem, 4.5vw, 4.2rem)'
                      : 'clamp(1.1rem, 2.2vw, 1.85rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: isSelected ? '#ffffff' : ind.featured ? '#dcdad5' : '#888888',
                    transition: 'all 0.25s ease',
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    gap: '0.35rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.color = ind.featured ? '#dcdad5' : '#888888';
                  }}
                >
                  <span>{ind.name}</span>
                  <span style={{ color: '#ed1c24', fontSize: '0.7em', fontWeight: 800 }}>+</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Intelligence Card */}
          <div
            style={{
              position: 'sticky',
              top: '120px',
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              animation: 'modalFadeIn 0.3s ease'
            }}
          >
            <div className="editorial-eyebrow" style={{ marginBottom: '1.25rem' }}>
              <span className="accent">+</span>
              <span>SECTOR INTELLIGENCE</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: '2rem',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                lineHeight: 1.1
              }}
            >
              {selectedIndustry.name}
            </h3>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#bab6ad',
                marginBottom: '2rem'
              }}
            >
              {selectedIndustry.desc}
            </p>

            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#837f77', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                STRATEGIC FOCUS
              </div>
              <div style={{ color: '#ffffff', fontSize: '0.95rem' }}>
                {selectedIndustry.featured
                  ? 'High consideration, currency hedging, luxury lifestyle positioning, and GCC cross-border investor demand generation.'
                  : 'Fast-cycle performance attribution, emotional brand differentiation, and scalable digital customer acquisition funnels.'}
              </div>
            </div>

            <button
              onClick={onOpenProjectBrief}
              className="btn-primary"
              data-cursor="BRIEF"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Build A Strategy For {selectedIndustry.name}</span>
              <span className="btn-plus">+</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .industries-layout {
            grid-template-columns: 1fr !important;
          }
          .industries-layout > div:last-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}

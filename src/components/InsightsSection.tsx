import React from 'react';
import { INSIGHTS_DATA, InsightItem } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface InsightsSectionProps {
  onSelectInsight: (article: InsightItem) => void;
}

export default function InsightsSection({ onSelectInsight }: InsightsSectionProps): React.JSX.Element {
  return (
    <section
      id="insights"
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Header Block */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
              <span className="accent">+</span>
              <span>STRATEGIC INTELLIGENCE</span>
            </div>

            <h2 className="editorial-h2">
              THOUGHTS &<br />
              <span style={{ color: '#ffffff' }}>MARKET INSIGHTS.</span>
            </h2>
          </div>

          <div style={{ maxWidth: '420px' }}>
            <p className="editorial-body">
              Perspectives on real estate economics, performance media attribution, and the intersection of board-level strategy with creative execution.
            </p>
          </div>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {INSIGHTS_DATA.map((article: InsightItem) => (
            <article
              key={article.id}
              onClick={() => onSelectInsight(article)}
              data-cursor="READ"
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, transform 0.3s ease'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.borderColor = 'rgba(237, 28, 36, 0.5)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Meta Top */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.75rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#ed1c24',
                      padding: '0.25rem 0.6rem',
                      backgroundColor: 'rgba(237, 28, 36, 0.08)',
                      border: '1px solid rgba(237, 28, 36, 0.25)'
                    }}
                  >
                    {article.tag}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#666666'
                    }}
                  >
                    {article.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    lineHeight: 1.35,
                    color: '#ffffff',
                    marginBottom: '1.25rem'
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    color: '#bab6ad',
                    marginBottom: '2rem'
                  }}
                >
                  {article.summary}
                </p>
              </div>

              {/* Read Action */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#ffffff'
                  }}
                >
                  Read Strategy Paper
                </span>

                <ArrowUpRight size={16} style={{ color: '#ed1c24' }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

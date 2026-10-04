import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onSelectCaseStudy: (project: CaseStudy) => void;
}

export default function SelectedWork({ onSelectCaseStudy }: SelectedWorkProps): React.JSX.Element {
  const [filter, setFilter] = useState<string>('ALL');

  const filteredWork = filter === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item: CaseStudy) => item.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section
      id="work"
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Header & Filter Controls */}
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
              <span className="accent">04 +</span>
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>

            <h2 className="editorial-h2">
              STRATEGY<br />
              <span style={{ color: '#ffffff' }}>IN MOTION.</span>
            </h2>
          </div>

          {/* Category Pill Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {['ALL', 'Real Estate', 'Luxury', 'Fitness', 'FinTech'].map((cat) => {
              const isActive = (cat === 'ALL' && filter === 'ALL') ||
                (cat === 'Real Estate' && filter === 'Real Estate') ||
                (cat === 'Luxury' && filter.includes('Luxury')) ||
                (cat === 'Fitness' && filter.includes('Fitness')) ||
                (cat === 'FinTech' && filter.includes('FinTech'));

              return (
                <button
                  key={cat}
                  onClick={() => {
                    if (cat === 'ALL') setFilter('ALL');
                    else if (cat === 'Luxury') setFilter('Luxury Masterplans & Hospitality');
                    else if (cat === 'Fitness') setFilter('Fitness & Wellness');
                    else if (cat === 'FinTech') setFilter('FinTech & Global Supply Chain');
                    else setFilter(cat);
                  }}
                  data-cursor="FILTER"
                  style={{
                    backgroundColor: isActive ? '#ed1c24' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#ffffff' : '#bab6ad',
                    border: isActive ? '1px solid #ed1c24' : '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '0.55rem 1.15rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Flagship Editorial Project Tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'clamp(2rem, 3.5vw, 3.5rem)'
          }}
        >
          {filteredWork.map((project: CaseStudy) => (
            <div
              key={project.id}
              className="work-tile"
              onClick={() => onSelectCaseStudy(project)}
              data-cursor="CASE STUDY"
              style={{
                cursor: 'pointer',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Large Project Image Container */}
              <div
                style={{
                  position: 'relative',
                  height: 'clamp(280px, 35vw, 420px)',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0a'
                }}
              >
                <img
                  src={project.heroImage}
                  alt={project.client}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(35%) brightness(0.85)'
                  }}
                />

                {/* Gradient Shadow Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 60%, rgba(0,0,0,0.4) 100%)'
                  }}
                />

                {/* Top Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      padding: '0.35rem 0.75rem',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    {project.category}
                  </span>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Bottom Key Metric Floating Strip */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}
                >
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div
                      key={mIdx}
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.4rem 0.8rem',
                        borderLeft: '2px solid #ed1c24'
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 800, color: '#ffffff', fontSize: '0.9rem' }}>
                        {m.value}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#837f77', marginLeft: '0.4rem', textTransform: 'uppercase' }}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial Description Content */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                  backgroundColor: '#0a0a0a'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      letterSpacing: '-0.02em',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      marginBottom: '0.65rem'
                    }}
                  >
                    {project.client}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: '#bab6ad',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.summary}
                  </p>
                </div>

                {/* Services Tags & CTA */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.services.map((s: string, sIdx: number) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.75rem',
                          color: '#837f77',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {s}{sIdx < project.services.length - 1 ? ' /' : ''}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '1.25rem'
                    }}
                  >
                    <span>View Case Study</span>
                    <span style={{ color: '#ed1c24', fontWeight: 800 }}>+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

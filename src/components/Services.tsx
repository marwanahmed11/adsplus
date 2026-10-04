import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenProjectBrief: () => void;
}

export default function Services({ onSelectService, onOpenProjectBrief }: ServicesProps): React.JSX.Element {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string): void => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      style={{
        backgroundColor: '#000000',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Header Block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
              <span className="accent">02 +</span>
              <span>CAPABILITIES & DISCIPLINE</span>
            </div>
            <h2 className="editorial-h2">
              BUILT TO MOVE<br />
              <span style={{ color: '#ffffff' }}>BRANDS FORWARD.</span>
            </h2>
          </div>

          <div style={{ maxWidth: '420px' }}>
            <p className="editorial-body">
              Seven connected disciplines working under one unified commercial strategy. We eliminate disconnected agency silos to align every asset with your balance sheet.
            </p>
          </div>
        </div>

        {/* 7 Interactive Full-Width Service Rows */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
          {SERVICES_DATA.map((srv: ServiceItem) => {
            const isHovered = activeHoverId === srv.id;
            const isExpanded = expandedId === srv.id;

            return (
              <div
                key={srv.id}
                className="service-row"
                onMouseEnter={() => setActiveHoverId(srv.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => toggleExpand(srv.id)}
                data-cursor="EXPAND"
                style={{
                  padding: '2.5rem 1.5rem',
                  backgroundColor: isHovered || isExpanded ? 'rgba(237, 28, 36, 0.04)' : 'transparent',
                  paddingLeft: isHovered || isExpanded ? '2rem' : '1rem',
                  borderColor: isHovered || isExpanded ? 'rgba(237, 28, 36, 0.4)' : 'rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Main Row Bar */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(60px, 90px) minmax(280px, 2fr) minmax(240px, 3fr) 60px',
                    alignItems: 'center',
                    gap: '1.5rem',
                    width: '100%'
                  }}
                  className="service-row-grid"
                >
                  {/* Number 01+ */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: isHovered || isExpanded ? '#ed1c24' : '#837f77',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {srv.id}<span style={{ color: '#ed1c24' }}>+</span>
                  </div>

                  {/* Title */}
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 900,
                      fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      color: isHovered || isExpanded ? '#ffffff' : '#bab6ad',
                      transition: 'color 0.3s ease, transform 0.3s ease',
                      transform: isHovered ? 'translateX(10px)' : 'none'
                    }}
                  >
                    {srv.title}
                  </div>

                  {/* Subtitle / Scope */}
                  <div
                    style={{
                      fontSize: '0.95rem',
                      color: isHovered || isExpanded ? '#bab6ad' : '#666666',
                      transition: 'color 0.3s ease',
                      fontFamily: 'var(--font-primary)'
                    }}
                  >
                    {srv.shortDesc}
                  </div>

                  {/* Action Icon */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: isHovered || isExpanded ? '1px solid #ed1c24' : '1px solid rgba(255, 255, 255, 0.2)',
                        backgroundColor: isHovered || isExpanded ? 'rgba(237, 28, 36, 0.1)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isHovered || isExpanded ? '#ed1c24' : '#bab6ad',
                        transform: isExpanded ? 'rotate(90deg)' : isHovered ? 'rotate(45deg)' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Expanding Drawer Content */}
                {isExpanded && (
                  <div
                    style={{
                      marginTop: '2.5rem',
                      paddingTop: '2rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '3rem',
                      animation: 'modalSlideUp 0.3s ease forwards'
                    }}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                  >
                    {/* Deep Rationale */}
                    <div>
                      <div className="editorial-eyebrow" style={{ marginBottom: '1rem' }}>
                        <span className="accent">+</span>
                        <span>COMMERCIAL THESIS</span>
                      </div>
                      <p
                        style={{
                          fontSize: '1.05rem',
                          lineHeight: 1.7,
                          color: '#bab6ad',
                          marginBottom: '1.5rem'
                        }}
                      >
                        {srv.fullDesc}
                      </p>
                      <div
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          border: '1px solid rgba(237, 28, 36, 0.3)',
                          backgroundColor: 'rgba(237, 28, 36, 0.05)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8125rem',
                          color: '#ed1c24'
                        }}
                      >
                        BENCHMARK: {srv.metric}
                      </div>
                    </div>

                    {/* Key Deliverables List */}
                    <div>
                      <div className="editorial-eyebrow" style={{ marginBottom: '1rem' }}>
                        <span className="accent">+</span>
                        <span>DELIVERABLES & SCOPE</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
                        {srv.deliverables.map((item: string, idx: number) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                              fontSize: '0.9rem',
                              color: '#ffffff'
                            }}
                          >
                            <span style={{ color: '#ed1c24', fontWeight: 800 }}>+</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Detail Modal Trigger & Quick Inquiry */}
                      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => onSelectService(srv)}
                          className="btn-primary"
                          data-cursor="DETAILS"
                          style={{ padding: '0.85rem 1.6rem', fontSize: '0.8125rem' }}
                        >
                          <span>Explore Full Scope</span>
                          <span className="btn-plus">+</span>
                        </button>
                        <button
                          onClick={onOpenProjectBrief}
                          className="btn-secondary"
                          data-cursor="BRIEF"
                          style={{ padding: '0.85rem 1.6rem', fontSize: '0.8125rem' }}
                        >
                          <span>Inquire About This Service</span>
                          <ArrowRight size={14} style={{ color: '#ed1c24' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-row-grid {
            grid-template-columns: 40px 1fr 40px !important;
          }
          .service-row-grid > div:nth-child(3) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

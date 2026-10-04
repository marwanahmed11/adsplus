import React, { useState } from 'react';
import { METHOD_STAGES, MethodStage } from '../data/content';

interface MethodProps {
  onOpenProjectBrief: () => void;
}

export default function Method({ onOpenProjectBrief }: MethodProps): React.JSX.Element {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section
      id="method"
      style={{
        backgroundColor: '#050505',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        {/* Header Block */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
            <span className="accent">03 +</span>
            <span>OUR APPROACH & METHODOLOGY</span>
          </div>

          <h2 className="editorial-h2">
            FROM OPPORTUNITY<br />
            <span style={{ color: '#ffffff' }}>TO EXECUTION.</span>
          </h2>

          <p
            className="editorial-lead"
            style={{ marginTop: '1.5rem', maxWidth: '750px' }}
          >
            We take a consulting-led approach that connects business understanding, strategic thinking, and effective execution.
          </p>
        </div>

        {/* Method Grid: Left Sticky Timeline + Right Panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 320px) 1fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start'
          }}
          className="method-grid-container"
        >
          {/* Left Timeline Selector (Sticky) */}
          <div
            style={{
              position: 'sticky',
              top: '120px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}
          >
            <div style={{ position: 'relative', paddingLeft: '3.5rem' }}>
              {/* Vertical Glowing Line */}
              <div
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '10px',
                  bottom: '20px',
                  width: '2px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${((activeStage + 1) / METHOD_STAGES.length) * 100}%`,
                    backgroundColor: '#ed1c24',
                    boxShadow: '0 0 12px #ed1c24',
                    transition: 'height 0.4s ease'
                  }}
                />
              </div>

              {/* Stage Step Indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                {METHOD_STAGES.map((stg: MethodStage, idx: number) => {
                  const isActive = activeStage === idx;
                  return (
                    <button
                      key={stg.number}
                      onClick={() => setActiveStage(idx)}
                      data-cursor={`0${idx + 1}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        padding: 0,
                        position: 'relative'
                      }}
                    >
                      {/* Node Circle */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '-3.5rem',
                          top: '4px',
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? '#ed1c24' : '#141414',
                          border: isActive ? '3px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          boxShadow: isActive ? '0 0 20px rgba(237, 28, 36, 0.6)' : 'none'
                        }}
                      />

                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          color: isActive ? '#ed1c24' : '#837f77',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase'
                        }}
                      >
                        STAGE {stg.number}
                      </div>

                      <div
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 900,
                          fontSize: '1.5rem',
                          color: isActive ? '#ffffff' : '#555555',
                          textTransform: 'uppercase',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {stg.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              style={{
                padding: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ fontSize: '0.8125rem', color: '#837f77', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                CONSULTING MODEL
              </div>
              <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                Every campaign is audited against business unit economics.
              </div>
            </div>
          </div>

          {/* Right Stage Display Panels */}
          <div style={{ minHeight: '520px' }}>
            {METHOD_STAGES.map((stg: MethodStage, idx: number) => {
              if (idx !== activeStage) return null;

              return (
                <div
                  key={stg.number}
                  style={{
                    backgroundColor: '#0a0a0a',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: 'clamp(2rem, 5vw, 4rem)',
                    animation: 'modalFadeIn 0.35s ease forwards'
                  }}
                >
                  {/* Eyebrow inside stage */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '2rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingBottom: '1.5rem'
                    }}
                  >
                    <div className="editorial-eyebrow">
                      <span className="accent">{stg.number} +</span>
                      <span>{stg.subtitle}</span>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 900,
                        fontSize: '2.5rem',
                        color: 'rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {stg.number}
                    </div>
                  </div>

                  <h3
                    className="editorial-h3"
                    style={{ color: '#ffffff', marginBottom: '1.5rem' }}
                  >
                    {stg.title} — {stg.subtitle}
                  </h3>

                  <p
                    style={{
                      fontSize: '1.15rem',
                      lineHeight: 1.65,
                      color: '#bab6ad',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {stg.description}
                  </p>

                  {/* Checklist of what we assess/build */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        color: '#837f77',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        marginBottom: '1rem'
                      }}
                    >
                      DIAGNOSTIC & OPERATIONAL FOCUS:
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1rem'
                      }}
                    >
                      {stg.auditPoints.map((point: string, pIdx: number) => (
                        <div
                          key={pIdx}
                          style={{
                            padding: '1rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.02)',
                            borderLeft: '2px solid #ed1c24',
                            color: '#ffffff',
                            fontSize: '0.925rem'
                          }}
                        >
                          <span style={{ color: '#ed1c24', marginRight: '0.5rem', fontWeight: 800 }}>+</span>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Philosophy Banner */}
                  <div
                    style={{
                      padding: '1.75rem 2rem',
                      backgroundColor: 'rgba(237, 28, 36, 0.06)',
                      border: '1px solid rgba(237, 28, 36, 0.25)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1.5rem'
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#ed1c24', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                        ADS PLUS PRINCIPLE
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 800,
                          fontSize: '1.35rem',
                          color: '#ffffff',
                          marginTop: '0.25rem'
                        }}
                      >
                        {stg.philosophy}
                      </div>
                    </div>

                    <button
                      onClick={onOpenProjectBrief}
                      className="btn-primary"
                      data-cursor="BRIEF"
                      style={{ padding: '0.85rem 1.6rem', fontSize: '0.8125rem' }}
                    >
                      <span>Apply To Your Business</span>
                      <span className="btn-plus">+</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .method-grid-container {
            grid-template-columns: 1fr !important;
          }
          .method-grid-container > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}

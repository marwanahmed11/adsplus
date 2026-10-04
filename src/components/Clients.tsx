import React, { useState } from 'react';
import { CLIENT_LOGOS, ClientLogo } from '../data/content';

export default function Clients(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredLogos: ClientLogo[] = activeFilter === 'ALL'
    ? CLIENT_LOGOS
    : CLIENT_LOGOS.filter((c: ClientLogo) => c.industry.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section
      id="clients"
      style={{
        backgroundColor: '#050505',
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
              <span className="accent">05 +</span>
              <span>CLIENT ROSTER & PARTNERS</span>
            </div>

            <h2 className="editorial-h2">
              AMBITIOUS<br />
              <span style={{ color: '#ffffff' }}>BUSINESSES.</span>
            </h2>
          </div>

          <div style={{ maxWidth: '440px' }}>
            <p className="editorial-body">
              From landmark developers reshaping national coastlines to international tech platforms, we serve ambitious brands where every marketing decision has material commercial consequences.
            </p>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {filteredLogos.map((client: ClientLogo) => (
            <div
              key={client.name}
              className="client-logo-card"
              data-cursor="CLIENT"
              style={{
                backgroundColor: '#0a0a0a',
                height: '140px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                position: 'relative',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }}
            >
              <img
                src={`/clients/${client.file}`}
                alt={client.name}
                style={{
                  maxHeight: '52px',
                  maxWidth: '85%',
                  objectFit: 'contain',
                  filter: 'grayscale(100%) brightness(1)',
                  opacity: 0.7,
                  transition: 'all 0.3s ease'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  color: '#666666',
                  textTransform: 'uppercase',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                className="client-hover-caption"
              >
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Proof Note */}
        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-mono)',
            color: '#837f77'
          }}
        >
          <div>
            17+ TIER-1 REAL ESTATE, ENTERPRISE & TECH CLIENTS FROM PROFILE
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#ed1c24' }}>+</span>
            <span>STRATEGY CONNECTED TO EXECUTION</span>
          </div>
        </div>
      </div>

      <style>{`
        .client-logo-card:hover .client-hover-caption {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

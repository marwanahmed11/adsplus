import React from 'react';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrief: () => void;
}

export default function AboutModal({ isOpen, onClose, onOpenBrief }: AboutModalProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          maxWidth: '900px',
          padding: 'clamp(2rem, 5vw, 4rem)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="accent">01 +</span>
              <span>THE ADS PLUS+ STORY</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#ffffff',
                textTransform: 'uppercase',
                lineHeight: 1
              }}
            >
              BUSINESS FIRST.<br />
              <span style={{ color: '#ed1c24' }}>MARKETING SECOND.</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#bab6ad', fontSize: '1.05rem', lineHeight: 1.75 }}>
          <p style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 600 }}>
            Ads Plus+ was founded in Cairo in 2018 to bridge the dangerous gap between corporate strategy and creative execution.
          </p>

          <p>
            Too often, enterprises hire management consultants who produce abstract slide decks with zero execution capability, or traditional advertising agencies that produce flashy creative disconnected from the company's EBITDA, sales cycles, or buyer unit economics.
          </p>

          <p>
            Ads Plus+ unites both under one roof: strategic marketing consultancy, market intelligence, creative direction, media production, and high-velocity performance marketing.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              margin: '1.5rem 0'
            }}
          >
            {[
              { title: 'CONSULTING RIGOR', desc: 'Every campaign starts with business audits, pricing elasticity, and competitor mapping.' },
              { title: 'CINEMATIC CREATIVE', desc: 'In-house commercial production, architectural film, and high-fashion visual standards.' },
              { title: 'ACCOUNTABLE MEDIA', desc: 'Real-time performance attribution, lead scoring, and measurable sales conversion.' }
            ].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ color: '#ed1c24', fontWeight: 800, fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  0{idx + 1} + {pillar.title}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#bab6ad' }}>
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>

          <p>
            Headquartered in Cairo with active client engagements across Egypt, Saudi Arabia, the UAE, and international corridors, we serve ambitious brands where the commercial decision matters most.
          </p>
        </div>

        <div
          style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenBrief();
            }}
            className="btn-primary"
          >
            <span>Partner With Ads Plus+</span>
            <span className="btn-plus">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

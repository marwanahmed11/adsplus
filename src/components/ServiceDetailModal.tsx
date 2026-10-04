import React from 'react';
import { X, Check } from 'lucide-react';
import { ServiceItem } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBrief: () => void;
}

export default function ServiceDetailModal({ service, onClose, onOpenBrief }: ServiceDetailModalProps): React.JSX.Element | null {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          maxWidth: '850px',
          padding: 'clamp(2rem, 5vw, 4rem)'
        }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="accent">{service.id} +</span>
              <span>CAPABILITY SPECIFICATION</span>
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
              {service.title}
            </h2>

            <p style={{ color: '#ed1c24', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.75rem' }}>
              {service.tagline}
            </p>
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

        {/* Content Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Full Rationale */}
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <span className="accent">+</span>
              <span>STRATEGIC FOUNDATION</span>
            </div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#bab6ad' }}>
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="accent">+</span>
              <span>FULL DELIVERABLES & ARTIFACTS</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '0.85rem'
              }}
            >
              {service.deliverables.map((item: string, idx: number) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderLeft: '2px solid #ed1c24',
                    color: '#ffffff',
                    fontSize: '0.925rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem'
                  }}
                >
                  <Check size={16} style={{ color: '#ed1c24', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitability & Metric */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(237, 28, 36, 0.05)',
              border: '1px solid rgba(237, 28, 36, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{ fontSize: '0.85rem', color: '#bab6ad' }}>
              <strong style={{ color: '#ffffff' }}>Ideal Profile:</strong> {service.idealFor}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: '#ed1c24' }}>
              COMMERCIAL BENCHMARK: {service.metric}
            </div>
          </div>

          {/* Action */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <button onClick={onClose} className="btn-secondary">
              Close Overview
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBrief();
              }}
              className="btn-primary"
              data-cursor="INQUIRE"
            >
              <span>Inquire For Your Business</span>
              <span className="btn-plus">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

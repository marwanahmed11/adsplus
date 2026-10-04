import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';

export default function CaseStudyModal({ project, onClose, onOpenBrief }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          maxWidth: '1000px',
          padding: 0,
          overflow: 'hidden'
        }}
      >
        {/* Modal Header Image */}
        <div style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
          <img
            src={project.heroImage}
            alt={project.client}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0a0a0a 10%, rgba(10,10,10,0.4) 60%, rgba(0,0,0,0.6) 100%)'
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
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

          {/* Header Title inside banner */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: 'clamp(1.5rem, 4vw, 3rem)',
              right: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
            <div className="editorial-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <span className="accent">+</span>
              <span>{project.category} · {project.location}</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                color: '#ffffff',
                textTransform: 'uppercase',
                lineHeight: 1
              }}
            >
              {project.client}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
          {/* Key Impact Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              marginBottom: '3rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 900,
                    fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
                    color: '#ffffff',
                    lineHeight: 1
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#837f77',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: '0.35rem'
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* 6 Structured Business Story Chapters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* The Business */}
            <div>
              <div className="editorial-eyebrow" style={{ marginBottom: '0.65rem' }}>
                <span className="accent">+</span>
                <span>01 · THE BUSINESS</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#d0cdc7' }}>
                {project.theBusiness}
              </p>
            </div>

            {/* The Challenge */}
            <div>
              <div className="editorial-eyebrow" style={{ marginBottom: '0.65rem' }}>
                <span className="accent">+</span>
                <span>02 · THE CHALLENGE</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#d0cdc7' }}>
                {project.theChallenge}
              </p>
            </div>

            {/* The Opportunity */}
            <div>
              <div className="editorial-eyebrow" style={{ marginBottom: '0.65rem' }}>
                <span className="accent">+</span>
                <span>03 · THE OPPORTUNITY</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#d0cdc7' }}>
                {project.theOpportunity}
              </p>
            </div>

            {/* The Strategy */}
            <div>
              <div className="editorial-eyebrow" style={{ marginBottom: '0.65rem' }}>
                <span className="accent">+</span>
                <span>04 · THE STRATEGY</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#d0cdc7' }}>
                {project.theStrategy}
              </p>
            </div>

            {/* The Execution */}
            <div>
              <div className="editorial-eyebrow" style={{ marginBottom: '0.65rem' }}>
                <span className="accent">+</span>
                <span>05 · THE EXECUTION</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#d0cdc7' }}>
                {project.theExecution}
              </p>
            </div>

            {/* The Impact */}
            <div>
              <div className="editorial-eyebrow" style={{ marginBottom: '0.65rem' }}>
                <span className="accent">+</span>
                <span>06 · THE IMPACT</span>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#ffffff', fontWeight: 600 }}>
                {project.theImpact}
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div
            style={{
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', color: '#837f77' }}>
                Services Deployed:{' '}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                {project.services.join(' · ')}
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBrief();
              }}
              className="btn-primary"
              data-cursor="DISCUSS"
            >
              <span>Build Strategy In This Sector</span>
              <span className="btn-plus">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

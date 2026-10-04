import React from 'react';
import { X, Clock } from 'lucide-react';

export default function InsightModal({ article, onClose, onOpenBrief }) {
  if (!article) return null;

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="accent">+</span>
              <span>{article.tag} · {article.date} · {article.readTime}</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                color: '#ffffff',
                lineHeight: 1.15
              }}
            >
              {article.title}
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#bab6ad', fontSize: '1.1rem', lineHeight: 1.8 }}>
          <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.25rem', borderLeft: '3px solid #ed1c24', paddingLeft: '1.25rem' }}>
            {article.summary}
          </p>

          <p>
            {article.content}
          </p>

          <p>
            At Ads Plus+, our engagements always initiate with market diagnostics. By analyzing competitive white spaces and aligning creative messaging with the exact unit economics required to win, we transform marketing from a cost center into a predictable revenue driver.
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
            Close Article
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenBrief();
            }}
            className="btn-primary"
          >
            <span>Apply This Strategy</span>
            <span className="btn-plus">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

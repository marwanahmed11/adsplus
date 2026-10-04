import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/content';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BriefFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  market: string;
  budget: string;
  brief: string;
}

export default function ProjectBriefModal({ isOpen, onClose }: ProjectBriefModalProps): React.JSX.Element | null {
  const [formData, setFormData] = useState<BriefFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Marketing Consultancy',
    market: 'Egypt',
    budget: '$25k - $60k',
    brief: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          maxWidth: '780px',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.9)'
        }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <span className="accent">+</span>
              <span>START A STRATEGIC INQUIRY</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                color: '#ffffff',
                textTransform: 'uppercase',
                lineHeight: 1
              }}
            >
              START A PROJECT<span style={{ color: '#ed1c24' }}>+</span>
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

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(237, 28, 36, 0.1)',
                border: '2px solid #ed1c24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#ed1c24'
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: '1.8rem',
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              INQUIRY TRANSMITTED
            </h3>

            <p style={{ color: '#bab6ad', fontSize: '1rem', maxWidth: '420px', margin: '0 auto 2rem' }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. Our senior strategy partners will review your objective and reach out via {formData.phone || formData.email} within 24 hours.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary"
            >
              Done +
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="editorial-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  COMPANY / ENTITY *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="editorial-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="editorial-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  PHONE NUMBER / WHATSAPP *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+20 100 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="editorial-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  SERVICE AREA
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="editorial-select"
                >
                  {SERVICES_DATA.map((s: ServiceItem) => (
                    <option key={s.id} value={s.title}>
                      {s.id}+ {s.title}
                    </option>
                  ))}
                  <option value="360 Retainer">360 Strategic Marketing Retainer</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  MARKET REGION
                </label>
                <select
                  name="market"
                  value={formData.market}
                  onChange={handleChange}
                  className="editorial-select"
                >
                  <option value="Egypt">Egypt (Domestic Market)</option>
                  <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                  <option value="UAE">United Arab Emirates (UAE)</option>
                  <option value="GCC Regional">Other Gulf / GCC</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                PRIMARY COMMERCIAL OBJECTIVE *
              </label>
              <textarea
                rows={3}
                name="brief"
                required
                placeholder="What objective or challenge is your business looking to solve?"
                value={formData.brief}
                onChange={handleChange}
                className="editorial-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '1.15rem' }}
            >
              {submitting ? 'TRANSMITTING...' : 'SUBMIT PROJECT BRIEF +'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

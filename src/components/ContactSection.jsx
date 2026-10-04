import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';
import { BRAND_INFO, SERVICES_DATA } from '../data/content';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    market: 'Egypt',
    service: 'Marketing Consultancy',
    budget: '$10k - $25k',
    challenge: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  // Direct WhatsApp Link with pre-filled intro
  const whatsappUrl = `https://wa.me/201021657065?text=${encodeURIComponent(
    `Hello Ads Plus+ Team. I would like to discuss a strategic marketing inquiry for my company.`
  )}`;

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#050505',
        padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 5rem)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) minmax(340px, 1.4fr)',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start'
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Direct Info & Editorial Brand Credentials */}
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '1.5rem' }}>
              <span className="accent">+</span>
              <span>COMMERCIAL INQUIRY</span>
            </div>

            <h2 className="editorial-h2" style={{ lineHeight: 0.95, marginBottom: '1.5rem' }}>
              LET'S BUILD<br />
              <span style={{ color: '#ffffff' }}>WHAT SELLS.</span>
            </h2>

            <p className="editorial-lead" style={{ marginBottom: '3rem', color: '#bab6ad' }}>
              Tell us where your business is today and where you want it to go. We reply with initial strategic perspectives within 24 hours.
            </p>

            {/* Direct Official Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Phone / WhatsApp */}
              <div
                style={{
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#0a0a0a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      backgroundColor: 'rgba(237, 28, 36, 0.1)',
                      border: '1px solid #ed1c24',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ed1c24'
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase' }}>
                      PHONE / DIRECT LINE
                    </div>
                    <a
                      href="tel:+201021657065"
                      style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}
                    >
                      +20 102 165 7065
                    </a>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="WHATSAPP"
                  style={{
                    backgroundColor: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: '#25D366',
                    padding: '0.5rem 0.9rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}
                >
                  WhatsApp ↗
                </a>
              </div>

              {/* Office Location */}
              <div
                style={{
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#0a0a0a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase' }}>
                    HEADQUARTERS
                  </div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem' }}>
                    Cairo, Egypt
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}
              >
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LINKEDIN"
                  style={{
                    padding: '1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: '#0a0a0a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ed1c24')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                >
                  <LinkedinIcon size={18} style={{ color: '#ed1c24' }} />
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#837f77' }}>LINKEDIN</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>ads plus agency</div>
                  </div>
                </a>

                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="INSTAGRAM"
                  style={{
                    padding: '1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: '#0a0a0a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ed1c24')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                >
                  <InstagramIcon size={18} style={{ color: '#ed1c24' }} />
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#837f77' }}>INSTAGRAM</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>adsplus_agency</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Intake Form */}
          <div
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              position: 'relative'
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '4rem 1rem',
                  animation: 'modalFadeIn 0.4s ease forwards'
                }}
              >
                <div
                  style={{
                    width: '68px',
                    height: '68px',
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
                  <CheckCircle2 size={36} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 900,
                    fontSize: '2rem',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    marginBottom: '1rem'
                  }}
                >
                  BRIEF RECEIVED.
                </h3>

                <p style={{ color: '#bab6ad', fontSize: '1.05rem', maxWidth: '440px', margin: '0 auto 2rem' }}>
                  Thank you, <strong style={{ color: '#ffffff' }}>{formData.name}</strong>. A senior strategy partner will review your inquiry and schedule an initial diagnostic call within 24 hours.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Inquiry +
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Karim Mansour"
                      value={formData.name}
                      onChange={handleChange}
                      className="editorial-input"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      COMPANY / VENTURE *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Apex Developments"
                      value={formData.company}
                      onChange={handleChange}
                      className="editorial-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="karim@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="editorial-input"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      PHONE / WHATSAPP *
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  {/* Market / Country */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      MARKET FOCUS
                    </label>
                    <select
                      name="market"
                      value={formData.market}
                      onChange={handleChange}
                      className="editorial-select"
                    >
                      <option value="Egypt">Egypt (Cairo, New Capital, Coast)</option>
                      <option value="Saudi Arabia">Saudi Arabia (Riyadh, Jeddah)</option>
                      <option value="UAE">UAE (Dubai, Abu Dhabi)</option>
                      <option value="GCC & Regional">Other GCC Markets</option>
                      <option value="International">International / Global</option>
                    </select>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      PRIMARY SERVICE NEEDED
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="editorial-select"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.id}+ {s.title}
                        </option>
                      ))}
                      <option value="Comprehensive Retainer">Full Strategy + 360 Execution Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Project Budget Tier */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    PROJECT BUDGET TIER
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="editorial-select"
                  >
                    <option value="$10k - $25k">$10,000 – $25,000 (Targeted Campaign / Production)</option>
                    <option value="$25k - $60k">$25,000 – $60,000 (Launch Architecture / Media)</option>
                    <option value="$60k - $150k">$60,000 – $150,000 (Comprehensive Omnichannel)</option>
                    <option value="$150k+">$150,000+ (Enterprise Masterplan Retainer)</option>
                  </select>
                </div>

                {/* Tell us about the challenge */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#837f77', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    TELL US ABOUT THE BUSINESS CHALLENGE *
                  </label>
                  <textarea
                    rows={4}
                    name="challenge"
                    required
                    placeholder="Where is the business today, what is the target commercial outcome, and what friction are you facing in market?"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="editorial-textarea"
                  />
                </div>

                {/* CTA Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  data-cursor="SUBMIT"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '1.25rem',
                    fontSize: '0.95rem'
                  }}
                >
                  {submitting ? (
                    <span>TRANSMITTING BRIEF...</span>
                  ) : (
                    <>
                      <span>SEND BRIEF</span>
                      <span className="btn-plus">+</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';
import { MarketsMap } from '../components/MarketsMap';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Marketing consultancy',
    msg: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      {/* Contact Section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-78px',
          paddingTop: '78px',
        }}
      >
        <div className="beam" style={{ left: '20%' }} />
        <div
          className="pts"
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        >
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            paddingLeft: 'clamp(20px, 4vw, 64px)',
            paddingRight: 'clamp(20px, 4vw, 64px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(40px, 6vw, 110px)',
            paddingTop: 'clamp(80px, 9vw, 140px)',
            paddingBottom: 'clamp(96px, 10vw, 160px)',
          }}
        >
          <div
            style={{
              flex: '1.2 1 480px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            <p
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '15px',
                color: '#ec1c24',
                margin: 0,
              }}
            >
              Contact
            </p>
            <h1
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(72px, 11vw, 180px)',
                lineHeight: 0.82,
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              Let's
              <br />
              talk<span style={{ color: '#ec1c24' }}>+</span>
            </h1>
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.65,
                color: '#cfcbc5',
                margin: 0,
                maxWidth: '44ch',
              }}
            >
              Tell us about the business, the objective and the decision that needs to happen.
            </p>

            <form
              aria-label="Project enquiry"
              className="card"
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginTop: '12px',
                padding: 'clamp(24px, 3vw, 40px)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    flex: '1 1 260px',
                  }}
                >
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: '#8f8b84',
                    }}
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      minHeight: '56px',
                      padding: '0 18px',
                      background: '#070707',
                      color: '#f2f0ec',
                      border: '1px solid #222',
                      borderRadius: '12px',
                      fontSize: '16px',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    flex: '1 1 260px',
                  }}
                >
                  <label
                    htmlFor="company"
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: '#8f8b84',
                    }}
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      minHeight: '56px',
                      padding: '0 18px',
                      background: '#070707',
                      color: '#f2f0ec',
                      border: '1px solid #222',
                      borderRadius: '12px',
                      fontSize: '16px',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    flex: '1 1 260px',
                  }}
                >
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: '#8f8b84',
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      minHeight: '56px',
                      padding: '0 18px',
                      background: '#070707',
                      color: '#f2f0ec',
                      border: '1px solid #222',
                      borderRadius: '12px',
                      fontSize: '16px',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    flex: '1 1 260px',
                  }}
                >
                  <label
                    htmlFor="phone"
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: '#8f8b84',
                    }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      minHeight: '56px',
                      padding: '0 18px',
                      background: '#070707',
                      color: '#f2f0ec',
                      border: '1px solid #222',
                      borderRadius: '12px',
                      fontSize: '16px',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label
                  htmlFor="service"
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '14px',
                    color: '#8f8b84',
                  }}
                >
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    minHeight: '56px',
                    padding: '0 16px',
                    background: '#070707',
                    color: '#f2f0ec',
                    border: '1px solid #222',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                  }}
                >
                  <option>Marketing consultancy</option>
                  <option>Performance marketing</option>
                  <option>Campaign management</option>
                  <option>Media production</option>
                  <option>Social media management</option>
                  <option>Events &amp; activations</option>
                  <option>PR &amp; communications</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label
                  htmlFor="msg"
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontSize: '14px',
                    color: '#8f8b84',
                  }}
                >
                  Project details
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={5}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  style={{
                    padding: '16px 18px',
                    background: '#070707',
                    color: '#f2f0ec',
                    border: '1px solid #222',
                    borderRadius: '12px',
                    fontSize: '16px',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                data-magnetic
                className="btn btn-red"
                style={{
                  border: 0,
                  fontSize: '16px',
                  alignSelf: 'flex-start',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Send message <span>+</span>
              </button>

              {submitted && (
                <p style={{ margin: '8px 0 0', color: '#ec1c24', fontWeight: 700, fontStyle: 'italic' }}>
                  Thank you! Your message has been received. We will get back to you shortly.
                </p>
              )}
            </form>
          </div>

          <div
            style={{
              flex: '1 1 360px',
              display: 'flex',
              flexDirection: 'column',
              gap: '36px',
            }}
          >
            <div
              className="frame"
              style={{
                aspectRatio: '1012 / 1414',
                maxHeight: '580px',
                width: '100%',
              }}
            >
              <video
                className="vid"
                src="/assets/adsplus-phone-desk.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Man on a red phone at a desk in a field, the monitor shows the Ads Plus+ logo"
              />
              <div className="shade" />
              <span className="cm c1" />
              <span className="cm c2" />
              <span className="cm c3" />
              <span className="cm c4" />
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  padding: '20px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '14px',
                  }}
                >
                  Phone
                </span>
                <span style={{ fontSize: '18px', color: '#f2f0ec' }}>
                  <a href="tel:+201021657065" style={{ textDecoration: 'none' }}>
                    +20 102 165 7065
                  </a>
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  padding: '20px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '14px',
                  }}
                >
                  Email
                </span>
                <span style={{ fontSize: '18px', color: '#f2f0ec' }}>
                  <a href="mailto:contact@adsplus.agency" style={{ textDecoration: 'none' }}>
                    contact@adsplus.agency
                  </a>
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  padding: '20px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '14px',
                  }}
                >
                  Website
                </span>
                <span style={{ fontSize: '18px', color: '#f2f0ec' }}>
                  <a
                    href="https://adsplus.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    adsplus.agency
                  </a>
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  padding: '20px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '14px',
                  }}
                >
                  Instagram
                </span>
                <span style={{ fontSize: '18px', color: '#f2f0ec' }}>
                  <a
                    href="https://www.instagram.com/adsplus_agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    adsplus_agency
                  </a>
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  padding: '20px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '14px',
                  }}
                >
                  LinkedIn
                </span>
                <span style={{ fontSize: '18px', color: '#f2f0ec' }}>
                  <a
                    href="https://www.linkedin.com/search/results/all/?keywords=ads%20plus%20agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    ads plus agency
                  </a>
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                  padding: '20px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '14px',
                  }}
                >
                  Office
                </span>
                <span style={{ fontSize: '18px', color: '#f2f0ec' }}>
                  <span>Cairo, Egypt</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <MarketsMap sectionId="mk-contact" title="Markets we serve" />
    </main>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesMarquee } from '../components/ServicesMarquee';
import { SERVICES_DATA } from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-78px',
          paddingTop: '78px',
          backgroundColor: '#000',
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <video
            className="vid"
            src="/assets/anim-team.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectPosition: '50% 28%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, #000 100%), linear-gradient(90deg, #000 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.05) 100%)',
            }}
          />
        </div>
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
            minHeight: 'clamp(520px, 46vw, 720px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '26px',
            paddingBottom: '80px',
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
            Services
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
            Our
            <br />
            services<span style={{ color: '#ec1c24' }}>.</span>
          </h1>
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.65,
              color: '#cfcbc5',
              margin: 0,
              maxWidth: '46ch',
            }}
          >
            Built to move brands forward — from the first audit to the last optimized ad, under one connected brief.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <ServicesMarquee />

      {/* Services Grid */}
      <section style={{ borderTop: '1px solid #161616' }}>
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            paddingLeft: 'clamp(20px, 4vw, 64px)',
            paddingRight: 'clamp(20px, 4vw, 64px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            paddingTop: 'clamp(96px, 10vw, 160px)',
            paddingBottom: 'clamp(96px, 10vw, 160px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {SERVICES_DATA.map((svc, idx) => (
              <Link
                key={idx}
                to="/contact"
                data-scramble
                className={`card scard ${svc.isFeatured ? 'feat' : ''}`}
                style={{
                  padding: svc.isFeatured
                    ? '44px 44px 36px'
                    : '32px 30px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '26px',
                  minHeight: svc.isFeatured ? '380px' : '360px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: '#f2f0ec',
                }}
              >
                <span aria-hidden="true" className="wm">
                  +
                </span>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    position: 'relative',
                  }}
                >
                  <div className="tile">
                    <span className="shine" aria-hidden="true" />
                    {svc.renderIcon()}
                  </div>
                  <span
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      color: '#ec1c24',
                      fontSize: '14px',
                    }}
                  >
                    {svc.number}
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    position: 'relative',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 900,
                      fontStyle: 'italic',
                      letterSpacing: '-0.03em',
                      fontSize: svc.isFeatured ? '50px' : '30px',
                      lineHeight: 0.96,
                      margin: 0,
                      color: '#f2f0ec',
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: '#a7a39c',
                      fontSize: svc.isFeatured ? '17px' : '15.5px',
                      lineHeight: 1.6,
                      maxWidth: '42ch',
                    }}
                  >
                    {svc.description}
                  </p>
                  <span
                    className="cta"
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '15px',
                      color: '#f2f0ec',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginTop: '10px',
                    }}
                  >
                    Start a project
                    <span className="arr" aria-hidden="true">
                      +
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section
        aria-labelledby="how"
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <video
            className="vid"
            src="/assets/anim-approach.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectPosition: '50% 50%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, #000 0%, rgba(0,0,0,0.78) 30%, rgba(0,0,0,0.78) 70%, #000 100%)',
            }}
          />
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
            paddingTop: 'clamp(96px, 10vw, 160px)',
            paddingBottom: 'clamp(96px, 10vw, 160px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(40px, 6vw, 110px)',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '1 1 420px' }}>
            <div style={{ aspectRatio: '1 / 1', width: '100%', maxHeight: '640px' }}>
              <video
                className="vid"
                src="/assets/3d-stairs.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Floating 3D stairs lighting up red step by step"
                style={{ objectFit: 'contain', mixBlendMode: 'screen' }}
              />
            </div>
          </div>
          <div
            style={{
              flex: '1.1 1 460px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
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
              How we work
            </p>
            <h2
              data-scramble
              id="how"
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(48px, 6.6vw, 104px)',
                lineHeight: 0.9,
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              From opportunity to execution.
            </h2>
            <ol style={{ listStyle: 'none', margin: '12px 0 0', padding: 0 }}>
              <li
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '28px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '15px',
                  }}
                >
                  01+ Understand
                </span>
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    fontSize: '30px',
                    lineHeight: 1,
                    color: '#f2f0ec',
                  }}
                >
                  Business &amp; market diagnostics
                </span>
                <span
                  style={{
                    color: '#8f8b84',
                    fontSize: '16px',
                    lineHeight: 1.65,
                    maxWidth: '50ch',
                  }}
                >
                  We assess the business, market, competitors, audience, positioning, existing marketing efforts and key gaps to uncover opportunities and challenges.
                </span>
              </li>
              <li
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '28px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '15px',
                  }}
                >
                  02+ Define
                </span>
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    fontSize: '30px',
                    lineHeight: 1,
                    color: '#f2f0ec',
                  }}
                >
                  Strategic direction &amp; creative framing
                </span>
                <span
                  style={{
                    color: '#8f8b84',
                    fontSize: '16px',
                    lineHeight: 1.65,
                    maxWidth: '50ch',
                  }}
                >
                  We translate insights into clear strategic direction — positioning, messaging, campaign thinking, creative direction and priorities.
                </span>
              </li>
              <li
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '28px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '15px',
                  }}
                >
                  03+ Execute
                </span>
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    fontSize: '30px',
                    lineHeight: 1,
                    color: '#f2f0ec',
                  }}
                >
                  Performance &amp; continuous improvement
                </span>
                <span
                  style={{
                    color: '#8f8b84',
                    fontSize: '16px',
                    lineHeight: 1.65,
                    maxWidth: '50ch',
                  }}
                >
                  We turn strategy into action through the right channels, focused execution, tracking, measurement and continuous optimization.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* One connected direction */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #161616',
        }}
      >
        <div className="beam" style={{ left: '48%' }} />
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            paddingLeft: 'clamp(20px, 4vw, 64px)',
            paddingRight: 'clamp(20px, 4vw, 64px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            paddingTop: 'clamp(96px, 10vw, 160px)',
            paddingBottom: 'clamp(96px, 10vw, 160px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(40px, 6vw, 110px)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              flex: '1.2 1 440px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
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
              One connected direction
            </p>
            <h2
              data-scramble
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(48px, 6.6vw, 104px)',
                lineHeight: 0.9,
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              One team.
              <br />
              One brief.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#cfcbc5',
                margin: 0,
                maxWidth: '50ch',
              }}
            >
              Strategy, creative, media, production and execution working from the same brief, so what we plan is what gets built — and what gets built is measured.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 360px',
              height: 'clamp(320px, 34vw, 500px)',
              position: 'relative',
            }}
          >
            <div className="stage3d">
              <video
                className="vid"
                src="/assets/3d-glass-plus.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Rotating red glass plus on a dark floor"
                style={{ objectFit: 'contain', mixBlendMode: 'screen' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #161616',
        }}
      >
        <div className="beam" style={{ left: '50%', opacity: 0.7 }} />
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            paddingLeft: 'clamp(20px, 4vw, 64px)',
            paddingRight: 'clamp(20px, 4vw, 64px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            paddingTop: 'clamp(96px, 10vw, 160px)',
            paddingBottom: 'clamp(96px, 10vw, 160px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '28px',
          }}
        >
          <h2
            data-scramble
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(52px, 8vw, 132px)',
              lineHeight: 0.88,
              margin: 0,
              color: '#f2f0ec',
              maxWidth: '14ch',
            }}
          >
            Not sure which service you need<span style={{ color: '#ec1c24' }}>+</span>
          </h2>
          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: '#8f8b84',
              margin: 0,
              maxWidth: '46ch',
            }}
          >
            Start with a consultancy session. We diagnose the business and the market first, then recommend the right mix.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <Link
              to="/contact"
              data-magnetic
              className="btn btn-red"
              style={{ fontSize: '16px' }}
            >
              Start a project
            </Link>
            <a
              href="tel:+201021657065"
              data-magnetic
              className="btn btn-line"
              style={{ fontSize: '16px' }}
            >
              +20 102 165 7065
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

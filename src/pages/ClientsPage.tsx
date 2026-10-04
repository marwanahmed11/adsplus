import React from 'react';
import { Link } from 'react-router-dom';
import { StatsSection } from '../components/StatsSection';
import { ClientWall } from '../components/ClientWall';
import { INDUSTRIES_DATA } from '../data/clients';

export const ClientsPage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-78px',
          paddingTop: '78px',
        }}
      >
        <div className="beam" style={{ left: '46%' }} />
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
            minHeight: 'clamp(460px, 40vw, 620px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '26px',
            paddingBottom: '72px',
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
            Clients
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
            clients<span style={{ color: '#ec1c24' }}>.</span>
          </h1>
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.65,
              color: '#cfcbc5',
              margin: 0,
              maxWidth: '48ch',
            }}
          >
            Leading developers and brands across Egypt and the Gulf, in a high-consideration category where positioning, demand and timing matter.
          </p>
        </div>
      </section>

      {/* Client Wall Grid */}
      <section>
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            paddingLeft: 'clamp(20px, 4vw, 64px)',
            paddingRight: 'clamp(20px, 4vw, 64px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            paddingBottom: 'clamp(96px, 10vw, 160px)',
          }}
        >
          <ClientWall />
        </div>
      </section>

      {/* Stats Numbers */}
      <StatsSection />

      {/* Industries */}
      <section aria-labelledby="ind" style={{ borderTop: '1px solid #161616' }}>
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
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              flex: '1 1 360px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
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
              Industries
            </p>
            <h2
              data-scramble
              id="ind"
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
              Expertise across industries.
            </h2>
            <div
              className="frame"
              style={{
                aspectRatio: '984 / 1364',
                maxHeight: '560px',
                width: '100%',
              }}
            >
              <video
                className="vid"
                src="/assets/adsplus-office-screens.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Office of cubicles where red screens switch on with counting numbers"
              />
              <div className="shade" />
              <span className="cm c1" />
              <span className="cm c2" />
              <span className="cm c3" />
              <span className="cm c4" />
            </div>
          </div>

          <ul
            style={{
              flex: '1.4 1 480px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '0 36px',
              alignContent: 'start',
            }}
          >
            {INDUSTRIES_DATA.map((ind, i) => (
              <li
                key={i}
                className="industry"
                style={{
                  fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.03em',
                  fontSize: 'clamp(26px, 2.6vw, 40px)',
                  lineHeight: 1.1,
                  color: '#f2f0ec',
                  padding: '18px 0',
                  borderTop: '1px solid #161616',
                }}
              >
                {ind}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Ads Plus+ */}
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
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(40px, 6vw, 110px)',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '1 1 400px' }}>
            <div
              className="frame"
              style={{
                aspectRatio: '780 / 1010',
                maxHeight: '720px',
                width: '100%',
              }}
            >
              <video
                className="vid"
                src="/assets/adsplus-red-door.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="People circle the doors and enter the red Ads Plus+ door"
              />
              <div className="shade" />
              <span className="cm c1" />
              <span className="cm c2" />
              <span className="cm c3" />
              <span className="cm c4" />
            </div>
          </div>
          <div
            style={{
              flex: '1.2 1 460px',
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
              Why Ads Plus+
            </p>
            <h2
              data-scramble
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(44px, 5.6vw, 88px)',
                lineHeight: 0.9,
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              Marketing for businesses where the decision matters.
            </h2>
            <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0 }}>
              <li
                style={{
                  padding: '24px 0',
                  borderTop: '1px solid #161616',
                  display: 'flex',
                  gap: '18px',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    color: '#ec1c24',
                    fontSize: '28px',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '21px',
                      color: '#f2f0ec',
                    }}
                  >
                    Strategy before execution
                  </span>
                  <span style={{ color: '#8f8b84', fontSize: '16px', lineHeight: 1.6 }}>
                    Business-first thinking before channels, content or campaigns.
                  </span>
                </span>
              </li>
              <li
                style={{
                  padding: '24px 0',
                  borderTop: '1px solid #161616',
                  display: 'flex',
                  gap: '18px',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    color: '#ec1c24',
                    fontSize: '28px',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '21px',
                      color: '#f2f0ec',
                    }}
                  >
                    Real estate expertise
                  </span>
                  <span style={{ color: '#8f8b84', fontSize: '16px', lineHeight: 1.6 }}>
                    Experience in a high-consideration category where positioning, demand and timing matter.
                  </span>
                </span>
              </li>
              <li
                style={{
                  padding: '24px 0',
                  borderTop: '1px solid #161616',
                  display: 'flex',
                  gap: '18px',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    color: '#ec1c24',
                    fontSize: '28px',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '21px',
                      color: '#f2f0ec',
                    }}
                  >
                    One connected direction
                  </span>
                  <span style={{ color: '#8f8b84', fontSize: '16px', lineHeight: 1.6 }}>
                    Strategy, creative, media, production and execution working from the same brief.
                  </span>
                </span>
              </li>
              <li
                style={{
                  padding: '24px 0',
                  borderTop: '1px solid #161616',
                  display: 'flex',
                  gap: '18px',
                }}
              >
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    color: '#ec1c24',
                    fontSize: '28px',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      fontSize: '21px',
                      color: '#f2f0ec',
                    }}
                  >
                    Continuous optimization
                  </span>
                  <span style={{ color: '#8f8b84', fontSize: '16px', lineHeight: 1.6 }}>
                    Performance data and market learning shape the next decision.
                  </span>
                </span>
              </li>
            </ul>
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
            Your brand, next on this list<span style={{ color: '#ec1c24' }}>+</span>
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
            Tell us where the business needs to go. We'll build the marketing direction to get it there.
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

import React from 'react';
import { Link } from 'react-router-dom';
import { StatsSection } from '../components/StatsSection';
import { MarketsMap } from '../components/MarketsMap';

export const AboutPage: React.FC = () => {
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
            src="/assets/anim-room.mp4"
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
            About Ads Plus+
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
            Who we
            <br />
            are<span style={{ color: '#ec1c24' }}>.</span>
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
            A specialized marketing consultancy and creative agency, established in Cairo in 2018, with hands-on experience across Egypt, the Gulf and international markets.
          </p>
        </div>
      </section>

      {/* Numbers */}
      <StatsSection />

      {/* One connected team */}
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
            flexDirection: 'column',
            gap: '48px',
          }}
        >
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
            One connected team,
            <br />
            one business objective.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            <article
              className="card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.03em',
                  fontSize: '40px',
                  color: '#ec1c24',
                  lineHeight: 1,
                }}
              >
                +
              </span>
              <h3
                style={{
                  fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.03em',
                  fontSize: '30px',
                  lineHeight: 1,
                  margin: 0,
                  color: '#f2f0ec',
                }}
              >
                A consultancy model
              </h3>
              <p style={{ margin: 0, color: '#8f8b84', fontSize: '16px', lineHeight: 1.65 }}>
                Built around strategic marketing consultancy, so every direction starts from the business, not the channel.
              </p>
            </article>

            <article
              className="card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.03em',
                  fontSize: '40px',
                  color: '#ec1c24',
                  lineHeight: 1,
                }}
              >
                +
              </span>
              <h3
                style={{
                  fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.03em',
                  fontSize: '30px',
                  lineHeight: 1,
                  margin: 0,
                  color: '#f2f0ec',
                }}
              >
                Strategy + creative + execution
              </h3>
              <p style={{ margin: 0, color: '#8f8b84', fontSize: '16px', lineHeight: 1.65 }}>
                Business understanding, creative direction, performance and delivery in one connected team.
              </p>
            </article>

            <article
              className="card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.03em',
                  fontSize: '40px',
                  color: '#ec1c24',
                  lineHeight: 1,
                }}
              >
                +
              </span>
              <h3
                style={{
                  fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                  fontWeight: 900,
                  fontStyle: 'italic',
                  letterSpacing: '-0.03em',
                  fontSize: '30px',
                  lineHeight: 1,
                  margin: 0,
                  color: '#f2f0ec',
                }}
              >
                Business-driven marketing
              </h3>
              <p style={{ margin: 0, color: '#8f8b84', fontSize: '16px', lineHeight: 1.65 }}>
                Marketing directions shaped by the objective, the market and the decision that needs to happen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Mission */}
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
          <div style={{ flex: '1 1 440px' }}>
            <div
              className="frame"
              style={{
                aspectRatio: '1524 / 1081',
                maxHeight: '720px',
                width: '100%',
              }}
            >
              <video
                className="vid"
                src="/assets/anim-mission.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Blurred red glass plus in the dark"
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
              flex: '1 1 420px',
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
              Mission
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
              Smarter marketing decisions.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#cfcbc5',
                margin: 0,
                maxWidth: '46ch',
              }}
            >
              Our mission is to help businesses make smarter marketing decisions through strategic consulting, market intelligence and clear, actionable direction — turning complex challenges into focused strategies that drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
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
            flexWrap: 'wrap-reverse',
            gap: 'clamp(40px, 6vw, 110px)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              flex: '1 1 420px',
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
              Vision
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
              A trusted strategic partner.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#cfcbc5',
                margin: 0,
                maxWidth: '46ch',
              }}
            >
              Our vision is to become a trusted strategic marketing partner for ambitious businesses across Egypt, the Gulf and international markets — shaping better decisions, stronger brands and long-term growth through consulting-led marketing.
            </p>
          </div>
          <div style={{ flex: '1 1 440px' }}>
            <div
              className="frame"
              style={{
                aspectRatio: '1051 / 749',
                maxHeight: '720px',
                width: '100%',
              }}
            >
              <video
                className="vid"
                src="/assets/anim-vision.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="People walking in motion blur"
              />
              <div className="shade" />
              <span className="cm c1" />
              <span className="cm c2" />
              <span className="cm c3" />
              <span className="cm c4" />
            </div>
          </div>
        </div>
      </section>

      {/* Built to sell+ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #161616',
        }}
      >
        <div className="beam" style={{ left: '2%' }} />
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
              flex: '1 1 380px',
              height: 'clamp(340px, 36vw, 540px)',
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
          <div
            style={{
              flex: '1.3 1 460px',
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
              Built to sell+
            </p>
            <h2
              data-scramble
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(42px, 5.4vw, 84px)',
                lineHeight: 0.9,
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              Marketing should have a business reason behind it.
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
              Built to sell+ is the connection between the business objective, the market around it and the marketing direction built from there.
            </p>
            <p
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '22px',
                color: '#f2f0ec',
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: '#ec1c24' }}>+</span> More clarity.
              <br />
              <span style={{ color: '#ec1c24' }}>+</span> More direction.
              <br />
              <span style={{ color: '#ec1c24' }}>+</span> More connection between marketing and business.
            </p>
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <MarketsMap sectionId="mk-about" title="Markets we serve" />

      {/* Final Call to Action */}
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
            Work with a partner built to sell<span style={{ color: '#ec1c24' }}>+</span>
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
            Strategy before execution, one connected direction, and performance data shaping every next decision.
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

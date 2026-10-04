import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesMarquee } from '../components/ServicesMarquee';
import { StatsSection } from '../components/StatsSection';
import { WordBuilder } from '../components/WordBuilder';
import { DoorsMenu } from '../components/DoorsMenu';
import { StorySteps } from '../components/StorySteps';
import { ClientWall } from '../components/ClientWall';
import { MarketsMap } from '../components/MarketsMap';

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* Intro Spot Hero */}
      <section
        aria-label="Intro"
        className="spot-hero"
        data-spotlight
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-78px',
          paddingTop: '78px',
        }}
      >
        <div className="beam" />
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
          aria-hidden="true"
          className="hero-in"
          style={{
            position: 'absolute',
            right: '-6%',
            top: '4%',
            width: '62%',
            height: '82%',
            zIndex: 1,
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

        <div className="hw" aria-hidden="true">
          <span style={{ left: '5%', top: '13%' }}>
            Clarity<b>+</b>
          </span>
          <span style={{ left: '30%', top: '33%' }}>
            Connection<b>+</b>
          </span>
          <span style={{ left: '54%', top: '6%' }}>
            Direction<b>+</b>
          </span>
        </div>

        <div className="spot" aria-hidden="true" />

        <div
          className="hero-in"
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            paddingLeft: 'clamp(20px, 4vw, 64px)',
            paddingRight: 'clamp(20px, 4vw, 64px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            minHeight: 'clamp(620px, 58vw, 880px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '36px',
            paddingBottom: '72px',
          }}
        >
          <p
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '15px',
              color: '#8f8b84',
              margin: 0,
            }}
          >
            Strategic marketing consultancy <span style={{ color: '#ec1c24' }}>+</span> Cairo{' '}
            <span style={{ color: '#ec1c24' }}>+</span> Since 2018
          </p>

          <h1
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(84px, 14vw, 230px)',
              lineHeight: 0.8,
              margin: 0,
              color: '#f2f0ec',
            }}
          >
            Built
            <br />
            to sell<span style={{ color: '#ec1c24' }}>+</span>
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '28px',
            }}
          >
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#8f8b84',
                margin: 0,
                maxWidth: '42ch',
              }}
            >
              For businesses where the decision matters. Strategy, creative and execution in one connected team — accountable to the business objective.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link
                to="/contact"
                data-magnetic
                className="btn btn-red"
                style={{ fontSize: '16px' }}
              >
                Start a project
              </Link>
              <Link
                to="/services"
                data-magnetic
                className="btn btn-line"
                style={{ fontSize: '16px' }}
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      <ServicesMarquee />

      {/* Numbers Section */}
      <StatsSection />

      {/* Strategy before execution */}
      <section
        aria-label="Strategy before execution"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #161616',
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <video
            className="vid"
            src="/assets/anim-eye.mp4"
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
                'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0,0,0,0.35), #000 78%)',
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
            paddingTop: 'clamp(140px, 16vw, 260px)',
            paddingBottom: 'clamp(140px, 16vw, 260px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
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
            Strategy before execution
          </p>
          <h2
            data-scramble
            style={{
              fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(44px, 6.4vw, 104px)',
              lineHeight: 0.9,
              margin: 0,
              color: '#f2f0ec',
              maxWidth: '15ch',
            }}
          >
            Business-first thinking before channels, content or campaigns
            <span style={{ color: '#ec1c24' }}>+</span>
          </h2>
        </div>
      </section>

      {/* Who we are */}
      <section aria-labelledby="who" style={{ borderTop: '1px solid #161616' }}>
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
          <div style={{ flex: '1 1 380px' }}>
            <div
              className="frame"
              style={{
                aspectRatio: '984 / 1364',
                maxHeight: '720px',
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
          <div
            style={{
              flex: '1.2 1 460px',
              display: 'flex',
              flexDirection: 'column',
              gap: '26px',
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
            <h2
              data-scramble
              id="who"
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
              Who we are.
            </h2>
            <p
              style={{
                fontSize: '21px',
                lineHeight: 1.65,
                color: '#f2f0ec',
                margin: 0,
                maxWidth: '40ch',
              }}
            >
              A specialized marketing consultancy and creative agency with hands-on experience across Egypt and the Gulf, alongside work across international markets.
            </p>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.65,
                color: '#8f8b84',
                margin: 0,
                maxWidth: '50ch',
              }}
            >
              Established in Cairo in 2018 and built around a strategic consultancy model: business understanding, creative direction, performance and delivery in one connected team. Marketing directions shaped by the objective, the market and the decision that needs to happen.
            </p>
            <Link
              to="/about"
              data-magnetic
              className="btn btn-line"
              style={{ fontSize: '15px', alignSelf: 'flex-start' }}
            >
              Our story <span style={{ color: '#ec1c24' }}>+</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The business reason */}
      <section
        aria-labelledby="reason"
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
            src="/assets/anim-cross.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectPosition: '70% 50%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, #000 0%, rgba(0,0,0,0.88) 36%, rgba(0,0,0,0.1) 100%)',
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
            paddingTop: 'clamp(140px, 16vw, 240px)',
            paddingBottom: 'clamp(140px, 16vw, 240px)',
          }}
        >
          <div
            style={{
              maxWidth: '760px',
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
              The business reason
            </p>
            <WordBuilder />
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#cfcbc5',
                margin: 0,
                maxWidth: '46ch',
              }}
            >
              <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#fff' }}>
                Built to sell+
              </span>{' '}
              is the connection between the business objective, the market around it and the marketing direction built from there.
            </p>
            <p
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                color: '#f2f0ec',
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: '#ec1c24' }}>+</span> More clarity.{' '}
              <span style={{ color: '#ec1c24' }}>+</span> More direction.{' '}
              <span style={{ color: '#ec1c24' }}>+</span> More connection.
            </p>
          </div>
        </div>
      </section>

      {/* Services with Doors Menu */}
      <section
        aria-labelledby="services"
        style={{ borderTop: '1px solid #161616' }}
      >
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
            gap: '56px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
              <h2
                data-scramble
                id="services"
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
                Built to move
                <br />
                brands forward.
              </h2>
            </div>
            <Link
              to="/services"
              data-magnetic
              className="btn btn-line"
              style={{ fontSize: '15px' }}
            >
              All services <span style={{ color: '#ec1c24' }}>+</span>
            </Link>
          </div>

          <DoorsMenu />
        </div>
      </section>

      {/* Story Steps */}
      <StorySteps />

      {/* Clients Section */}
      <section
        aria-labelledby="clients"
        style={{ borderTop: '1px solid #161616' }}
      >
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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
              <h2
                data-scramble
                id="clients"
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
                Trusted by the names
                <br />
                that build the market.
              </h2>
            </div>
            <Link
              to="/clients"
              data-magnetic
              className="btn btn-line"
              style={{ fontSize: '15px' }}
            >
              Clients and industries <span style={{ color: '#ec1c24' }}>+</span>
            </Link>
          </div>

          <ClientWall />
        </div>
      </section>

      {/* Why Ads Plus+ */}
      <section aria-labelledby="why" style={{ borderTop: '1px solid #161616' }}>
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
              id="why"
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
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: '#8f8b84',
                margin: 0,
                maxWidth: '50ch',
              }}
            >
              Clients work with us when strategy needs to stay connected to execution, and execution needs to stay accountable to the business objective.
            </p>
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

      {/* Markets Section */}
      <MarketsMap sectionId="markets" title="Markets" />

      {/* Let's talk section */}
      <section
        aria-labelledby="talk"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #161616',
        }}
      >
        <div className="beam" style={{ left: '40%', opacity: 0.7 }} />
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
              flex: '1.2 1 460px',
              display: 'flex',
              flexDirection: 'column',
              gap: '26px',
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
            <h2
              data-scramble
              id="talk"
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(64px, 10vw, 168px)',
                lineHeight: 0.84,
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              Let's
              <br />
              talk<span style={{ color: '#ec1c24' }}>+</span>
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#8f8b84',
                margin: 0,
                maxWidth: '40ch',
              }}
            >
              Tell us the business objective. We'll come back with the marketing direction built from it.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
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
          <div style={{ flex: '1 1 360px' }}>
            <div
              className="frame"
              style={{
                aspectRatio: '1012 / 1414',
                maxHeight: '640px',
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
          </div>
        </div>
      </section>
    </main>
  );
};

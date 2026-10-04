import React, { useState, useEffect, useRef } from 'react';

const STEPS = [
  {
    num: '01+',
    label: 'Understand',
    title: 'Business & market diagnostics',
    desc: 'We assess the business, market, competitors, audience, positioning, existing marketing efforts and key gaps to uncover opportunities and challenges.',
    img: '/assets/stairs-step2.jpg',
  },
  {
    num: '02+',
    label: 'Define',
    title: 'Strategic direction & creative framing',
    desc: 'We translate insights into clear strategic direction — positioning, messaging, campaign thinking, creative direction and priorities.',
    img: '/assets/stairs-step4.jpg',
  },
  {
    num: '03+',
    label: 'Execute',
    title: 'Performance & continuous improvement',
    desc: 'We turn strategy into action through the right channels, focused execution, tracking, measurement and continuous optimization.',
    img: '/assets/stairs-step6.jpg',
  },
];

export const StorySteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLLIElement);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      { rootMargin: '-42% 0px -42% 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="approach"
      style={{
        position: 'relative',
        overflow: 'clip',
        borderTop: '1px solid #161616',
      }}
    >
      <div className="beam" style={{ left: '-6%', opacity: 0.6 }} />
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
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            maxWidth: '780px',
            marginBottom: '40px',
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
            Approach
          </p>
          <h2
            data-scramble
            id="approach"
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
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: '#8f8b84',
              margin: 0,
              maxWidth: '50ch',
            }}
          >
            A consulting-led approach that connects business understanding, strategic thinking and effective execution. Scroll through the three steps.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(32px, 5vw, 96px)',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              flex: '1 1 420px',
              position: 'sticky',
              top: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div className="story-vis">
              {STEPS.map((step, idx) => (
                <img
                  key={idx}
                  src={step.img}
                  alt={idx === 0 ? '3D floating stairs, the first steps lit red' : ''}
                  className={activeStep === idx ? 'on' : ''}
                />
              ))}
            </div>

            <div className="sprog" aria-hidden="true">
              {STEPS.map((_, idx) => (
                <span key={idx} className={idx <= activeStep ? 'on' : ''} />
              ))}
            </div>

            <div
              aria-hidden="true"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '15px',
              }}
            >
              {STEPS.map((step, idx) => (
                <span key={idx} className={`slab ${idx <= activeStep ? 'on' : ''}`}>
                  {step.label}
                </span>
              ))}
            </div>
          </div>

          <ol style={{ flex: '1.1 1 460px', listStyle: 'none', margin: 0, padding: 0 }}>
            {STEPS.map((step, idx) => {
              const isOn = activeStep === idx;
              const isDone = activeStep > idx;
              return (
                <li
                  key={idx}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  data-step={idx}
                  className={`sstep ${isOn ? 'on' : ''} ${isDone ? 'done' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="big" aria-hidden="true">
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 700,
                      fontStyle: 'italic',
                      color: '#ec1c24',
                      fontSize: '16px',
                    }}
                  >
                    {step.num} {step.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                      fontWeight: 900,
                      fontStyle: 'italic',
                      letterSpacing: '-0.03em',
                      fontSize: 'clamp(30px, 3vw, 44px)',
                      lineHeight: 1,
                      color: '#f2f0ec',
                    }}
                  >
                    {step.title}
                  </span>
                  <span
                    style={{
                      color: '#8f8b84',
                      fontSize: '17px',
                      lineHeight: 1.65,
                      maxWidth: '46ch',
                    }}
                  >
                    {step.desc}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

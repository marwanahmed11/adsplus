import React from 'react';

const SERVICES_LIST = [
  'Marketing consultancy',
  'Performance marketing',
  'Campaign management',
  'Media production',
  'Social media management',
  'Events & activations',
  'PR & communications',
];

export const ServicesMarquee: React.FC = () => {
  // Duplicate for seamless loop
  const items = [...SERVICES_LIST, ...SERVICES_LIST];

  return (
    <div
      className="marq"
      aria-hidden="true"
      style={{
        padding: '28px 0',
        borderTop: '1px solid #161616',
        borderBottom: '1px solid #161616',
      }}
    >
      <div className="track">
        {items.map((svc, index) => (
          <React.Fragment key={index}>
            <span
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(40px, 5vw, 76px)',
                lineHeight: 1.05,
              }}
              className="outline"
            >
              {svc}
            </span>
            <span
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(40px, 5vw, 76px)',
                lineHeight: 1.05,
                color: '#ec1c24',
              }}
            >
              +
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

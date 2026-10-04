import React from 'react';

const STATS = [
  { val: '2018', label: 'Established in Cairo' },
  { val: '7', label: 'Connected services' },
  { val: '16', label: 'Industries served' },
  { val: '3', label: 'Markets: Egypt, GCC, international' },
];

export const StatsSection: React.FC = () => {
  return (
    <section aria-label="Ads Plus+ in numbers">
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
          gap: '0 28px',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        {STATS.map((item, i) => (
          <div
            key={i}
            style={{
              flex: '1 1 220px',
              padding: '36px 28px 36px 0',
              borderTop: '1px solid #161616',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(56px, 6vw, 92px)',
                lineHeight: 0.9,
                color: '#f2f0ec',
              }}
            >
              {item.val}
              <span style={{ color: '#ec1c24', fontSize: '0.5em', verticalAlign: 'top' }}>+</span>
            </span>
            <span style={{ fontSize: '15px', color: '#8f8b84' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

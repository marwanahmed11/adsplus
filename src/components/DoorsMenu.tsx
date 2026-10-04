import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOORS_DATA } from '../data/doors';

export const DoorsMenu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const activeDoor = activeIndex >= 0 ? DOORS_DATA[activeIndex] : null;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(32px, 5vw, 90px)',
        alignItems: 'center',
      }}
    >
      <div style={{ flex: '1 1 360px', maxWidth: '580px' }}>
        <div className={`dm ${activeIndex >= 0 ? 'active' : ''}`}>
          {DOORS_DATA.map((door, idx) => (
            <Link
              key={idx}
              to={door.href}
              className={`door ${door.isRed ? 'red' : ''} ${activeIndex === idx ? 'on' : ''}`}
              aria-label={door.t}
              style={{ clipPath: door.clipPath }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(-1)}
              onFocus={() => setActiveIndex(idx)}
              onBlur={() => setActiveIndex(-1)}
            />
          ))}

          {DOORS_DATA.map((door, idx) => (
            <span
              key={`tag-${idx}`}
              className={`tag ${activeIndex === idx ? 'on' : ''}`}
              aria-hidden="true"
              style={{ left: door.tagPosition.left, top: door.tagPosition.top }}
            >
              {door.t} +
            </span>
          ))}

          <span className="dhint" aria-hidden="true">
            Choose a door +
          </span>
        </div>
      </div>

      <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
        <div style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifySelf: 'flex-end', justifyContent: 'flex-end' }}>
          {activeDoor ? (
            <div data-door-panel="active">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '16px',
                  }}
                >
                  {activeDoor.n}
                </span>
                <h3
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    fontSize: 'clamp(40px, 4.4vw, 68px)',
                    lineHeight: 0.95,
                    margin: 0,
                    color: '#f2f0ec',
                  }}
                >
                  {activeDoor.t}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: '#8f8b84',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    maxWidth: '40ch',
                  }}
                >
                  {activeDoor.d}
                </p>
                <Link
                  to={activeDoor.href}
                  data-magnetic
                  className="btn btn-red"
                  style={{ fontSize: '16px', alignSelf: 'flex-start' }}
                >
                  {activeDoor.cta} <span>+</span>
                </Link>
              </div>
            </div>
          ) : (
            <div data-door-panel="idle">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#ec1c24',
                    fontSize: '16px',
                  }}
                >
                  Seven doors
                </span>
                <h3
                  style={{
                    fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    letterSpacing: '-0.03em',
                    fontSize: 'clamp(40px, 4.4vw, 68px)',
                    lineHeight: 0.95,
                    margin: 0,
                    color: '#f2f0ec',
                  }}
                >
                  Every project starts at the red door.
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: '#8f8b84',
                    fontSize: '18px',
                    lineHeight: 1.6,
                    maxWidth: '42ch',
                  }}
                >
                  Hover a door to see what is behind it. Six doors open onto our services. The red one is where we start, with marketing consultancy.
                </p>
              </div>
            </div>
          )}
        </div>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderBottom: '1px solid #161616' }}>
          {DOORS_DATA.map((door, idx) => (
            <li key={`dli-${idx}`}>
              <Link
                to={door.href}
                className={`dli ${activeIndex === idx ? 'on' : ''}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(-1)}
                onFocus={() => setActiveIndex(idx)}
                onBlur={() => setActiveIndex(-1)}
              >
                <span className="dn">{door.n}</span>
                <span>{door.t}</span>
                <span className="dar" aria-hidden="true">
                  +
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

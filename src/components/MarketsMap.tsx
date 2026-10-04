import React from 'react';

export const MarketsMap: React.FC<{ sectionId?: string; title?: string }> = ({
  sectionId = 'markets',
  title = 'Markets',
}) => {
  return (
    <section
      aria-labelledby={sectionId}
      style={{
        position: 'relative',
        overflow: 'clip',
        borderTop: '1px solid #161616',
      }}
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
          gap: '44px',
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
              {title}
            </p>
            <h2
              data-scramble
              id={sectionId}
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
              Local expertise.
              <br />
              Regional perspective.
            </h2>
          </div>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: '#8f8b84',
              margin: 0,
              maxWidth: '34ch',
            }}
          >
            From our headquarters in Cairo to the Gulf and international markets.
          </p>
        </div>

        <figure className="mapfig">
          <img
            src="/assets/markets-map.png"
            alt="Map of Egypt and the Gulf: Cairo headquarters connected to Riyadh, Jeddah, Kuwait, Manama, Doha, Abu Dhabi, Dubai and Muscat, with a line out to international markets"
          />
          <svg className="mapov" viewBox="0 0 1600 1072" aria-hidden="true">
            {/* Arcs */}
            <path className="arc" d="M369.6 238.9 Q679.2 219.7 988.8 473.0" />
            <path className="arc" d="M369.6 238.9 Q528.2 355.1 686.8 610.8" />
            <path className="arc" d="M369.6 238.9 Q704.4 106.2 1039.2 268.2" />
            <path className="arc" d="M369.6 238.9 Q756.4 152.1 1143.2 405.6" />
            <path className="arc" d="M369.6 238.9 Q775.4 164.2 1181.2 446.7" />
            <path className="arc" d="M369.6 238.9 Q832.2 157.7 1294.8 483.5" />
            <path className="arc" d="M369.6 238.9 Q850.2 133.3 1330.8 450.7" />
            <path className="arc" d="M369.6 238.9 Q913.0 140.9 1456.4 521.1" />
            <path className="arc intl" d="M369.6 238.9 Q219.6 68.9 40 70" />

            {/* Riyadh */}
            <circle className="ring" cx="988.8" cy="473.0" r="7" style={{ animationDelay: '0.00s' }} />
            <circle className="ring r2" cx="988.8" cy="473.0" r="7" style={{ animationDelay: '1.40s' }} />
            <circle className="core" cx="988.8" cy="473.0" r="6" />
            <text className="lbl sm" x="1004.8" y="513.0" textAnchor="start">
              Riyadh
            </text>

            {/* Jeddah */}
            <circle className="ring" cx="686.8" cy="610.8" r="7" style={{ animationDelay: '0.31s' }} />
            <circle className="ring r2" cx="686.8" cy="610.8" r="7" style={{ animationDelay: '1.71s' }} />
            <circle className="core" cx="686.8" cy="610.8" r="6" />
            <text className="lbl sm" x="668.8" y="618.8" textAnchor="end">
              Jeddah
            </text>

            {/* Kuwait */}
            <circle className="ring" cx="1039.2" cy="268.2" r="7" style={{ animationDelay: '0.62s' }} />
            <circle className="ring r2" cx="1039.2" cy="268.2" r="7" style={{ animationDelay: '2.02s' }} />
            <circle className="core" cx="1039.2" cy="268.2" r="6" />
            <text className="lbl sm" x="1039.2" y="242.2" textAnchor="middle">
              Kuwait
            </text>

            {/* Manama */}
            <circle className="ring" cx="1143.2" cy="405.6" r="7" style={{ animationDelay: '0.93s' }} />
            <circle className="ring r2" cx="1143.2" cy="405.6" r="7" style={{ animationDelay: '2.33s' }} />
            <circle className="core" cx="1143.2" cy="405.6" r="6" />
            <text className="lbl sm" x="1125.2" y="395.6" textAnchor="end">
              Manama
            </text>

            {/* Doha */}
            <circle className="ring" cx="1181.2" cy="446.7" r="7" style={{ animationDelay: '1.24s' }} />
            <circle className="ring r2" cx="1181.2" cy="446.7" r="7" style={{ animationDelay: '2.64s' }} />
            <circle className="core" cx="1181.2" cy="446.7" r="6" />
            <text className="lbl sm" x="1167.2" y="476.7" textAnchor="end">
              Doha
            </text>

            {/* Abu Dhabi */}
            <circle className="ring" cx="1294.8" cy="483.5" r="7" style={{ animationDelay: '1.55s' }} />
            <circle className="ring r2" cx="1294.8" cy="483.5" r="7" style={{ animationDelay: '2.95s' }} />
            <circle className="core" cx="1294.8" cy="483.5" r="6" />
            <text className="lbl sm" x="1294.8" y="523.5" textAnchor="middle">
              Abu Dhabi
            </text>

            {/* Dubai */}
            <circle className="ring" cx="1330.8" cy="450.7" r="7" style={{ animationDelay: '1.86s' }} />
            <circle className="ring r2" cx="1330.8" cy="450.7" r="7" style={{ animationDelay: '3.26s' }} />
            <circle className="core" cx="1330.8" cy="450.7" r="6" />
            <text className="lbl sm" x="1346.8" y="436.7" textAnchor="start">
              Dubai
            </text>

            {/* Muscat */}
            <circle className="ring" cx="1456.4" cy="521.1" r="7" style={{ animationDelay: '2.17s' }} />
            <circle className="ring r2" cx="1456.4" cy="521.1" r="7" style={{ animationDelay: '3.57s' }} />
            <circle className="core" cx="1456.4" cy="521.1" r="6" />
            <text className="lbl sm" x="1474.4" y="529.1" textAnchor="start">
              Muscat
            </text>

            {/* Cairo HQ */}
            <circle className="ring" cx="369.6" cy="238.9" r="12" />
            <circle className="ring r2" cx="369.6" cy="238.9" r="12" />
            <circle className="core" cx="369.6" cy="238.9" r="11" />
            <circle className="core hq" cx="369.6" cy="238.9" r="4" />
            <text className="lbl big" x="395.6" y="288.9">
              Cairo
            </text>
            <text className="lbl red" x="395.6" y="320.9">
              Headquarters
            </text>
            <text className="lbl" x="48" y="54">
              International +
            </text>
            <text className="lbl red" x="1251.2" y="623.0">
              GCC
            </text>
            <text className="lbl red" x="219.6" y="468.9">
              Egypt
            </text>
          </svg>
        </figure>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          <div
            style={{
              flex: '1 1 260px',
              paddingTop: '24px',
              borderTop: '1px solid #ec1c24',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <h3
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(40px, 4vw, 56px)',
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              Egypt
            </h3>
            <p style={{ margin: 0, color: '#8f8b84', fontSize: '16px', lineHeight: 1.6 }}>
              Deep understanding of the Egyptian market and its business landscape.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 260px',
              paddingTop: '24px',
              borderTop: '1px solid #ec1c24',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <h3
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(40px, 4vw, 56px)',
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              GCC
            </h3>
            <p style={{ margin: 0, color: '#8f8b84', fontSize: '16px', lineHeight: 1.6 }}>
              Strategic experience across Gulf markets and their evolving opportunities.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 260px',
              paddingTop: '24px',
              borderTop: '1px solid #ec1c24',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <h3
              style={{
                fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: 900,
                fontStyle: 'italic',
                letterSpacing: '-0.03em',
                fontSize: 'clamp(40px, 4vw, 56px)',
                margin: 0,
                color: '#f2f0ec',
              }}
            >
              International
            </h3>
            <p style={{ margin: 0, color: '#8f8b84', fontSize: '16px', lineHeight: 1.6 }}>
              Extending our marketing expertise across international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useEasterEgg } from '../context/EasterEggContext';

const DROPS = [
  { left: "24.2%", s: "21px", d: "3.35s", dl: "0.77s", r: "-154deg" },
  { left: "3.9%", s: "35px", d: "3.67s", dl: "1.28s", r: "-233deg" },
  { left: "50.9%", s: "29px", d: "2.64s", dl: "0.28s", r: "-254deg" },
  { left: "22.2%", s: "18px", d: "3.53s", dl: "1.29s", r: "219deg" },
  { left: "17.5%", s: "27px", d: "3.20s", dl: "1.17s", r: "164deg" },
  { left: "81.4%", s: "28px", d: "3.27s", dl: "0.81s", r: "-246deg" },
  { left: "46.5%", s: "20px", d: "3.71s", dl: "1.31s", r: "123deg" },
  { left: "87.4%", s: "36px", d: "3.33s", dl: "0.50s", r: "-331deg" },
  { left: "41.8%", s: "27px", d: "2.89s", dl: "0.26s", r: "252deg" },
  { left: "78.4%", s: "19px", d: "2.33s", dl: "0.74s", r: "385deg" },
  { left: "52.3%", s: "33px", d: "3.32s", dl: "0.23s", r: "-154deg" },
  { left: "40.8%", s: "24px", d: "3.22s", dl: "0.71s", r: "-302deg" },
  { left: "43.0%", s: "36px", d: "2.71s", dl: "0.89s", r: "171deg" },
  { left: "80.9%", s: "40px", d: "2.57s", dl: "1.22s", r: "-182deg" },
  { left: "33.1%", s: "23px", d: "2.67s", dl: "0.04s", r: "162deg" },
  { left: "86.2%", s: "27px", d: "3.38s", dl: "1.54s", r: "-285deg" },
  { left: "29.2%", s: "22px", d: "3.44s", dl: "0.66s", r: "-270deg" },
  { left: "60.1%", s: "46px", d: "2.91s", dl: "0.22s", r: "201deg" },
  { left: "33.1%", s: "18px", d: "2.78s", dl: "0.73s", r: "305deg" },
  { left: "95.7%", s: "36px", d: "2.36s", dl: "1.57s", r: "226deg" },
  { left: "12.7%", s: "19px", d: "2.29s", dl: "0.27s", r: "-140deg" },
  { left: "53.3%", s: "36px", d: "2.60s", dl: "1.60s", r: "-390deg" },
  { left: "29.5%", s: "31px", d: "3.24s", dl: "0.32s", r: "-243deg" },
  { left: "43.2%", s: "33px", d: "2.26s", dl: "0.67s", r: "-339deg" },
  { left: "80.1%", s: "33px", d: "2.50s", dl: "0.06s", r: "244deg" },
  { left: "51.4%", s: "42px", d: "2.57s", dl: "1.39s", r: "-286deg" },
  { left: "6.8%", s: "28px", d: "3.10s", dl: "1.58s", r: "140deg" },
  { left: "48.5%", s: "20px", d: "2.89s", dl: "1.49s", r: "-292deg" },
  { left: "29.8%", s: "33px", d: "3.48s", dl: "1.03s", r: "390deg" },
  { left: "22.2%", s: "43px", d: "3.30s", dl: "0.43s", r: "374deg" },
];

export const EasterEggRain: React.FC = () => {
  const { rainActive } = useEasterEgg();

  if (!rainActive) return null;

  return (
    <div className="rain" aria-hidden="true">
      {DROPS.map((drop, idx) => (
        <i
          key={idx}
          style={
            {
              left: drop.left,
              '--s': drop.s,
              '--d': drop.d,
              '--dl': drop.dl,
              '--r': drop.r,
            } as React.CSSProperties
          }
        />
      ))}
      <p className="rtoast">
        Built to sell<span>+</span>
      </p>
    </div>
  );
};

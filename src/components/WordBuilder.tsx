import React, { useEffect, useRef, useState } from 'react';

const WORDS = [
  { text: 'Marketing', isPlus: false },
  { text: 'should', isPlus: false },
  { text: 'have', isPlus: false },
  { text: 'a', isPlus: false },
  { text: 'business', isPlus: false },
  { text: 'reason', isPlus: false },
  { text: 'behind', isPlus: false },
  { text: 'it.', isPlus: false },
  { text: '+', isPlus: true },
];

export const WordBuilder: React.FC = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const p = Math.max(0, Math.min(1, (vh * 0.92 - r.top) / (vh * 0.5)));
      const n = Math.round(p * WORDS.length);
      setLitCount(n);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <h2
      ref={containerRef}
      id="reason"
      data-words
      className="wb"
      style={{
        fontFamily: "Aileron, 'Helvetica Neue', Helvetica, sans-serif",
        fontWeight: 900,
        fontStyle: 'italic',
        letterSpacing: '-0.03em',
        fontSize: 'clamp(44px, 6vw, 92px)',
        lineHeight: 0.92,
        margin: 0,
      }}
    >
      {WORDS.map((w, i) => {
        const isLit = i < litCount;
        if (w.isPlus) {
          return (
            <span key={i} className={`wp ${isLit ? 'on' : ''}`}>
              {w.text}
            </span>
          );
        }
        return (
          <React.Fragment key={i}>
            <span className={`w ${isLit ? 'on' : ''}`}>{w.text}</span>{' '}
          </React.Fragment>
        );
      })}
    </h2>
  );
};

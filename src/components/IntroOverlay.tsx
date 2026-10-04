import React, { useState, useEffect } from 'react';

export const IntroOverlay: React.FC = () => {
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    // Automatically hide intro after animation finishes
    const timer = setTimeout(() => {
      setIsGone(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isGone) return null;

  return (
    <div className={`intro ${isGone ? 'gone' : ''}`}>
      <video
        src="/assets/intro-plus.mp4"
        autoPlay
        muted
        playsInline
        aria-label="The red glass Ads Plus+ plus assembling itself"
        style={{ mixBlendMode: 'screen', objectFit: 'contain' }}
      />
      <p className="ttl">
        Built to sell<span style={{ color: '#ec1c24' }}>+</span>
      </p>
      <p className="sub">Strategic marketing consultancy · Cairo · Since 2018</p>
      <button
        type="button"
        className="skip btn btn-line"
        onClick={() => setIsGone(true)}
      >
        Skip intro
      </button>
    </div>
  );
};

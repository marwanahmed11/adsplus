import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onOpenProjectBrief }) {
  const [phase, setPhase] = useState(0); // 0: black/initial, 1: logo flash, 2: 3D plus emerge, 3: full typography reveal
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Cinematic entrance sequence
    const t1 = setTimeout(() => setPhase(1), 150);  // Logo emerges from dark
    const t2 = setTimeout(() => setPhase(2), 900);  // Logo lifts, red 3D glass + emerges
    const t3 = setTimeout(() => setPhase(3), 1600); // BUILT TO SELL+ typography resolves

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToWork = () => {
    const el = document.querySelector('#work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(5rem, 12vh, 7rem) clamp(1.5rem, 5vw, 5rem) 2.5rem',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      {/* Volumetric Red Lighting Background & Subtle Mesh */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(237, 28, 36, 0.18) 0%, rgba(237, 28, 36, 0.04) 45%, rgba(0,0,0,0) 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: phase >= 2 ? 1 : 0
        }}
      />

      {/* Cinematic Authentic 3D Glass Plus Video & Device */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          right: 'clamp(2%, 6vw, 12%)',
          transform: `translate(${mousePos.x * -20}px, calc(-50% + ${mousePos.y * -20}px))`,
          width: 'clamp(300px, 38vw, 560px)',
          height: 'clamp(300px, 38vw, 560px)',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: phase >= 2 ? 0.95 : 0,
          transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <video
          src="/videos/adsplus-glass-plus.webm"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 50px rgba(237, 28, 36, 0.5)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.9))',
            mixBlendMode: 'screen'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
          }}
        />

        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'none',
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0 0 50px rgba(237, 28, 36, 0.45)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.9))'
          }}
        >
          <defs>
            <linearGradient id="glassRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ed1c24" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#d54339" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2a0004" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ed1c24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M 140,20 L 260,20 L 260,140 L 380,140 L 380,260 L 260,260 L 260,380 L 140,380 L 140,260 L 20,260 L 20,140 L 140,140 Z"
            fill="url(#glassRed)"
            stroke="url(#edgeGlow)"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Top Eyebrow */}
      <div
        style={{
          zIndex: 2,
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="editorial-eyebrow">
          <span className="accent">+</span>
          <span>STRATEGIC MARKETING CONSULTANCY</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.25)', margin: '0 0.5rem' }}>|</span>
          <span style={{ color: '#bab6ad' }}>EST. CAIRO 2018</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography */}
      <div
        style={{
          margin: 'auto 0',
          zIndex: 2,
          maxWidth: '1200px'
        }}
      >
        {/* Animated Headline */}
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="editorial-h1"
            style={{
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.1em'
            }}
          >
            <span>BUILT</span>
            <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
              TO SELL
              <span
                style={{
                  color: '#ed1c24',
                  display: 'inline-block',
                  marginLeft: '0.05em',
                  transform: phase >= 3 ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-90deg)',
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s'
                }}
              >
                +
              </span>
            </span>
          </h1>
        </div>

        {/* Supporting Text */}
        <p
          className="editorial-lead"
          style={{
            marginTop: '2.25rem',
            maxWidth: '680px',
            color: '#bab6ad',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s'
          }}
        >
          Strategy, creative and execution connected to one thing — <strong style={{ color: '#ffffff', fontWeight: 600 }}>your business objective</strong>.
        </p>

        {/* Action CTAs */}
        <div
          style={{
            marginTop: '2.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1.25rem',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
          }}
        >
          <button
            onClick={onOpenProjectBrief}
            className="btn-primary"
            data-cursor="START"
          >
            <span>Start a Project</span>
            <span className="btn-plus">+</span>
          </button>

          <button
            onClick={scrollToWork}
            className="btn-secondary"
            data-cursor="WORK"
          >
            <span>Explore Our Work</span>
            <ArrowDown size={16} style={{ color: '#ed1c24' }} />
          </button>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#837f77',
          zIndex: 2,
          opacity: phase >= 3 ? 1 : 0,
          transition: 'opacity 0.8s ease 0.6s'
        }}
      >
        <div>
          <span style={{ color: '#ffffff' }}>CAIRO / EGYPT</span>
          <span style={{ margin: '0 0.5rem', color: '#ed1c24' }}>+</span>
          <span>SINCE 2018</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span>EGYPT</span>
          <span style={{ color: '#ed1c24' }}>+</span>
          <span>GCC</span>
          <span style={{ color: '#ed1c24' }}>+</span>
          <span>INTERNATIONAL</span>
        </div>
      </div>
    </section>
  );
}

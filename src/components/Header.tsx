import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLights } from '../context/LightsContext';
import { useEasterEgg } from '../context/EasterEggContext';

export const Header: React.FC = () => {
  const { isLit, toggleLights } = useLights();
  const { recordLogoClick } = useEasterEgg();

  return (
    <header style={{ position: 'relative', zIndex: 10 }}>
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
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px 40px',
          paddingTop: '24px',
          paddingBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            className="logobtn"
            onClick={recordLogoClick}
            aria-label="Ads Plus+"
            style={{ cursor: 'pointer' }}
          >
            <Link to="/" style={{ display: 'block' }}>
              <img
                src="/assets/logo-light.png"
                alt="Ads Plus+"
                style={{ height: '30px', width: 'auto', display: 'block' }}
              />
            </Link>
          </button>
        </div>

        <nav
          aria-label="Main"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 36px',
            alignItems: 'center',
          }}
        >
          <NavLink
            to="/"
            end
            data-scramble
            className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}
            style={{ fontSize: '15px' }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            data-scramble
            className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}
            style={{ fontSize: '15px' }}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            data-scramble
            className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}
            style={{ fontSize: '15px' }}
          >
            Services
          </NavLink>
          <NavLink
            to="/clients"
            data-scramble
            className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}
            style={{ fontSize: '15px' }}
          >
            Clients
          </NavLink>
          <NavLink
            to="/contact"
            data-scramble
            className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}
            style={{ fontSize: '15px' }}
          >
            Contact
          </NavLink>
        </nav>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <button
            type="button"
            className={`lswitch ${isLit ? 'on' : 'off'}`}
            aria-pressed={isLit}
            onClick={toggleLights}
          >
            <span className="trk">
              <span className="knob" />
            </span>
            Lights
          </button>
          <Link
            to="/contact"
            data-magnetic
            className="btn btn-line"
            style={{ fontSize: '15px', minHeight: '46px' }}
          >
            Start a project <span style={{ color: '#ec1c24' }}>+</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

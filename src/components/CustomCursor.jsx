import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [hoverText, setHoverText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    let animationFrame;
    const animateFollower = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15
      }));
      animationFrame = requestAnimationFrame(animateFollower);
    };
    animationFrame = requestAnimationFrame(animateFollower);

    // Event delegation for cursor hover targets
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovering(true);
        setHoverText(target.getAttribute('data-cursor') || '+');
      } else if (e.target.closest('button, a, input, select, textarea, [role="button"]')) {
        setIsHovering(true);
        setHoverText('+');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        {isHovering && hoverText && <span>{hoverText}</span>}
      </div>
      <div
        className={`custom-cursor-follower ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`
        }}
      />
    </>
  );
}

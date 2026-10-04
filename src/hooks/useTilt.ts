import { useEffect } from 'react';

export function useTiltEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('[data-tilt]') as HTMLElement | null;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      el.style.setProperty('--rx', ((0.5 - py) * 16).toFixed(2) + 'deg');
      el.style.setProperty('--ry', ((px - 0.5) * 20).toFixed(2) + 'deg');
      el.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
      el.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('[data-tilt]') as HTMLElement | null;
      if (el && !el.contains(e.relatedTarget as Node)) {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);
}

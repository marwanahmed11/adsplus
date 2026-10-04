import { useEffect } from 'react';

export function useMagneticEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('[data-magnetic]') as HTMLElement | null;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.28;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.4;
      el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    };

    const handleMouseOut = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('[data-magnetic]') as HTMLElement | null;
      if (el && !el.contains(e.relatedTarget as Node)) {
        el.style.transform = '';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
}

import { useEffect } from 'react';

export function useSpotlightEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('[data-spotlight]') as HTMLElement | null;
      if (!el) return;

      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', Math.round(e.clientX - r.left) + 'px');
      el.style.setProperty('--my', Math.round(e.clientY - r.top) + 'px');
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('[data-spotlight]') as HTMLElement | null;
      if (el && !el.contains(e.relatedTarget as Node)) {
        el.style.removeProperty('--mx');
        el.style.removeProperty('--my');
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

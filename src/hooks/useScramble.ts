import { useEffect } from 'react';

const CHARS = 'ABCDEFGHJKLMNOPRSTUVWXYZ+++';

export function scrambleElement(host: HTMLElement) {
  const el = /^H[1-3]$/.test(host.tagName) ? host : ((host.querySelector('h3, h2') as HTMLElement) || host);
  if ((el as any)._scr) return;
  (el as any)._scr = true;

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: [Text, string][] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) {
    if (n.nodeValue && n.nodeValue.trim()) {
      nodes.push([n as Text, n.nodeValue]);
    }
  }

  let f = 0;
  const total = 14;
  const id = window.setInterval(() => {
    f += 1;
    nodes.forEach(([textNode, origText]) => {
      const reveal = Math.floor((origText.length * f) / total);
      let out = '';
      for (let i = 0; i < origText.length; i++) {
        const c = origText[i];
        out += (i < reveal || c === ' ' || c.charCodeAt(0) === 10)
          ? c
          : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      textNode.nodeValue = out;
    });

    if (f >= total) {
      clearInterval(id);
      nodes.forEach(([textNode, origText]) => {
        textNode.nodeValue = origText;
      });
      (el as any)._scr = false;
    }
  }, 32);
}

export function useScrambleEffect() {
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-scramble]') as HTMLElement | null;
      if (target) {
        scrambleElement(target);
      }
    };

    document.addEventListener('mouseover', handleMouseEnter);
    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, []);
}

import React, { createContext, useContext, useState, useRef } from 'react';

interface EasterEggContextType {
  rainActive: boolean;
  triggerRain: () => void;
  recordLogoClick: () => void;
}

const EasterEggContext = createContext<EasterEggContextType>({
  rainActive: false,
  triggerRain: () => {},
  recordLogoClick: () => {},
});

export const useEasterEgg = () => useContext(EasterEggContext);

export const EasterEggProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rainActive, setRainActive] = useState(false);
  const clicksRef = useRef<number[]>([]);
  const timerRef = useRef<number | null>(null);

  const triggerRain = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setRainActive(false);
    setTimeout(() => {
      setRainActive(true);
      timerRef.current = window.setTimeout(() => {
        setRainActive(false);
      }, 5600);
    }, 10);
  };

  const recordLogoClick = () => {
    const now = Date.now();
    clicksRef.current = clicksRef.current.filter((t) => now - t < 2500);
    clicksRef.current.push(now);

    if (clicksRef.current.length >= 5) {
      clicksRef.current = [];
      triggerRain();
    }
  };

  return (
    <EasterEggContext.Provider value={{ rainActive, triggerRain, recordLogoClick }}>
      {children}
    </EasterEggContext.Provider>
  );
};

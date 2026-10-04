import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type LightsState = 'off' | 'on' | 'done';

interface LightsContextType {
  lightsState: LightsState;
  isLit: boolean;
  flashActive: boolean;
  toggleLights: () => void;
  setLights: (on: boolean) => void;
}

const LightsContext = createContext<LightsContextType>({
  lightsState: 'off',
  isLit: false,
  flashActive: false,
  toggleLights: () => {},
  setLights: () => {},
});

export const useLights = () => useContext(LightsContext);

export const LightsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lightsState, setLightsState] = useState<LightsState>('off');
  const [isLit, setIsLit] = useState(false);
  const [flashActive, setFlashActive] = useState(false);
  const autoDoneRef = useRef(false);
  const t1Ref = useRef<number | null>(null);
  const t2Ref = useRef<number | null>(null);

  const setLights = (on: boolean) => {
    setIsLit(on);
    if (t1Ref.current) clearTimeout(t1Ref.current);
    if (t2Ref.current) clearTimeout(t2Ref.current);

    if (on) {
      setLightsState('on');
      setFlashActive(true);
      t1Ref.current = window.setTimeout(() => {
        setFlashActive(false);
      }, 1400);

      t2Ref.current = window.setTimeout(() => {
        setLightsState('done');
      }, 1700);
    } else {
      setLightsState('off');
      setFlashActive(false);
    }
  };

  const toggleLights = () => {
    autoDoneRef.current = true;
    setLights(!isLit);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!autoDoneRef.current && window.scrollY > 40) {
        autoDoneRef.current = true;
        if (!isLit) {
          setLights(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLit]);

  return (
    <LightsContext.Provider
      value={{
        lightsState,
        isLit,
        flashActive,
        toggleLights,
        setLights,
      }}
    >
      {children}
    </LightsContext.Provider>
  );
};

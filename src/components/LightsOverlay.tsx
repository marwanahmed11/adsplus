import React from 'react';
import { useLights } from '../context/LightsContext';

export const LightsOverlay: React.FC = () => {
  const { flashActive } = useLights();

  if (!flashActive) return null;

  return <div className="lflash" aria-hidden="true" />;
};

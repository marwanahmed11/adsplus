import React from 'react';
import { CLIENTS_DATA } from '../data/clients';

export const ClientWall: React.FC = () => {
  return (
    <div className="lwall">
      {CLIENTS_DATA.map((client, i) => (
        <div
          key={i}
          className="ltile"
          role="img"
          aria-label={client.name}
          data-tilt
        >
          <span className="lg" style={{ backgroundPosition: client.position }} />
        </div>
      ))}
    </div>
  );
};

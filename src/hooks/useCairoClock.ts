import { useState, useEffect } from 'react';

const OFFICE = {
  open: '10:00',
  close: '18:00',
  days: [0, 1, 2, 3, 4] // 0 = Sunday ... 4 = Thursday
};

export interface CairoClockState {
  time: string;
  isOpen: boolean;
  statusText: string;
}

export function useCairoClock(): CairoClockState {
  const [clock, setClock] = useState<CairoClockState>({
    time: '--:--',
    isOpen: false,
    statusText: 'Loading Cairo time...'
  });

  useEffect(() => {
    function tick() {
      try {
        const parts = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          weekday: 'short',
          hour12: false
        }).formatToParts(new Date());

        const get = (type: string) => {
          for (let i = 0; i < parts.length; i++) {
            if (parts[i].type === type) return parts[i].value;
          }
          return '';
        };

        const hh = (parseInt(get('hour'), 10) || 0) % 24;
        const mm = parseInt(get('minute'), 10) || 0;
        const weekdayStr = get('weekday');
        const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(weekdayStr);

        const toMin = (s: string) => {
          const a = s.split(':');
          return (+a[0]) * 60 + (+a[1] || 0);
        };

        const now = hh * 60 + mm;
        const open = OFFICE.days.indexOf(wd) >= 0 && now >= toMin(OFFICE.open) && now < toMin(OFFICE.close);
        const timeFormatted = (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;

        setClock({
          time: timeFormatted,
          isOpen: open,
          statusText: open ? 'Open now' : `Closed now · opens ${OFFICE.open}`
        });
      } catch (err) {
        console.error(err);
      }
    }

    tick();
    const interval = setInterval(tick, 30000);
    return () => clearInterval(interval);
  }, []);

  return clock;
}

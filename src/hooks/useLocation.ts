import { useState } from 'react';

const defaultLocation = {
  name: 'Gahanna, OH',
  latitude: 40.0192,
  longitude: -82.8793,
};

export function useLocation() {
  const [location, setLocationState] = useState(() => {
    const stored = localStorage.getItem('user_location');
    if (!stored) {
      return defaultLocation;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return defaultLocation;
    }
  });

  const setLocation = (next: typeof defaultLocation) => {
    localStorage.setItem('user_location', JSON.stringify(next));
    setLocationState(next);
  };

  return { location, setLocation };
}

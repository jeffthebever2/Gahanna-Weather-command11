export const formatTemperature = (value: number, units: 'imperial' | 'metric') =>
  `${Math.round(value)}°${units === 'imperial' ? 'F' : 'C'}`;

export const formatWind = (speed: number, units: 'imperial' | 'metric') =>
  `${Math.round(speed)} ${units === 'imperial' ? 'mph' : 'km/h'}`;

export const calculateHeatIndex = (temp: number, humidity: number) => {
  return temp + humidity * 0.1;
};

export const calculateSnowDayChance = (snowAmount: number, temperature: number) => {
  return Math.min(95, Math.max(5, snowAmount * 12 + (32 - temperature)));
};

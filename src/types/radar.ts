export type RadarFrame = {
  timestamp: number;
  url: string;
};

export type RadarLayer = 'precipitation' | 'satellite' | 'temperature' | 'wind' | 'clouds';

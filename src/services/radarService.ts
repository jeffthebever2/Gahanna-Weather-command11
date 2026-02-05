import { RADAR_SERVICES } from '@/config/api';
import { RadarFrame } from '@/types/radar';

export const radarService = {
  async getRadarFrames(): Promise<RadarFrame[]> {
    const response = await fetch(RADAR_SERVICES.rainviewer);
    const data = await response.json();

    const frames = data.radar.past.slice(-10).map((frame: { time: number; path: string }) => ({
      timestamp: frame.time,
      url: `https://tilecache.rainviewer.com${frame.path}/256/{z}/{x}/{y}/2/1_1.png`,
    }));

    return frames;
  },
};

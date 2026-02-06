import { RADAR_SERVICES } from '@/config/api';

export async function getRadarMetadata() {
  const response = await fetch(RADAR_SERVICES.rainviewer);
  return response.json();
}

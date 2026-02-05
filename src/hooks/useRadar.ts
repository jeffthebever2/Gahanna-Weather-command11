import { useQuery } from '@tanstack/react-query';
import { radarService } from '@/services/radarService';

export const useRadar = () => {
  return useQuery({
    queryKey: ['radar'],
    queryFn: () => radarService.getRadarFrames(),
  });
};

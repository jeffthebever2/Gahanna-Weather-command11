import { useQuery } from '@tanstack/react-query';
import { weatherService } from '@/services/weatherService';

export const useWeather = () => {
  const query = useQuery({
    queryKey: ['weather'],
    queryFn: () => weatherService.getWeather(),
  });

  return query;
};

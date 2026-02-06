import { useQuery } from '@tanstack/react-query';

const fetchWeather = async () => {
  return {
    updatedAt: new Date().toISOString(),
    temperature: 72,
    summary: 'Partly cloudy',
  };
};

export function useWeather() {
  const query = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });

  return {
    ...query,
  };
}

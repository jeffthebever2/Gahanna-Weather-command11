import { WeatherResponse } from '@/types/weather';
import { sleep } from '@/utils/helpers';

export const weatherService = {
  async getWeather(): Promise<WeatherResponse> {
    await sleep(200);
    return {
      current: {
        temperature: 72,
        feelsLike: 74,
        condition: 'Partly Cloudy',
        humidity: 48,
        windSpeed: 12,
        windDirection: 'NW',
      },
      hourly: Array.from({ length: 12 }).map((_, index) => ({
        time: `${index + 1} PM`,
        temperature: 70 + index,
        precipitationChance: Math.min(90, index * 6),
        windSpeed: 8 + index,
      })),
      daily: Array.from({ length: 10 }).map((_, index) => ({
        date: `Day ${index + 1}`,
        high: 75 + index,
        low: 60 + index,
        condition: 'Clear',
        precipitationChance: Math.min(80, index * 8),
      })),
    };
  },
};

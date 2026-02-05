export type WeatherSummary = {
  temperature: number;
  feelsLike: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
};

export type HourlyForecast = {
  time: string;
  temperature: number;
  precipitationChance: number;
  windSpeed: number;
};

export type DailyForecast = {
  date: string;
  high: number;
  low: number;
  condition: string;
  precipitationChance: number;
};

export type WeatherResponse = {
  current: WeatherSummary;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
};

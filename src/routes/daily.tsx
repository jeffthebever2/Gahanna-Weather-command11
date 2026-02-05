import { useWeather } from '@/hooks/useWeather';
import { DailyCard } from '@/components/weather/DailyCard';

export function DailyPage() {
  const { data } = useWeather();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">10-Day Forecast</h1>
        <p className="text-white/70">Extended outlook with daily highs, lows, and precipitation.</p>
      </div>

      <div className="grid gap-4">
        {data?.daily.map((forecast) => (
          <DailyCard key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </div>
  );
}

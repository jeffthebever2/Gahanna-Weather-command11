import { useWeather } from '@/hooks/useWeather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePreferences } from '@/hooks/usePreferences';
import { formatTemperature, formatWind } from '@/utils/formatters';

export function HourlyPage() {
  const { data } = useWeather();
  const { preferences } = usePreferences();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">48-Hour Forecast</h1>
        <p className="text-white/70">Detailed hourly outlook for the next two days.</p>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Hourly Forecast</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {data?.hourly.map((hour) => (
            <div key={hour.time} className="flex items-center justify-between text-sm text-white/70">
              <span>{hour.time}</span>
              <span>{formatTemperature(hour.temperature, preferences.units)}</span>
              <span>{hour.precipitationChance}% precip</span>
              <span>{formatWind(hour.windSpeed, preferences.units)}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

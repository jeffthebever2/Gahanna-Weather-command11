import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeather } from '@/hooks/useWeather';
import { usePreferences } from '@/hooks/usePreferences';
import { formatTemperature } from '@/utils/formatters';

export function HourlyTimeline() {
  const { data } = useWeather();
  const { preferences } = usePreferences();

  if (!data) {
    return null;
  }

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Hourly Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 overflow-x-auto">
          {data.hourly.map((hour) => (
            <div key={hour.time} className="min-w-[110px] rounded-lg bg-white/5 p-3 text-center">
              <p className="text-xs text-white/60">{hour.time}</p>
              <p className="text-lg text-white font-semibold">
                {formatTemperature(hour.temperature, preferences.units)}
              </p>
              <p className="text-xs text-blue-300">{hour.precipitationChance}% rain</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

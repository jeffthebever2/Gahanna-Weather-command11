import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeather } from '@/hooks/useWeather';
import { formatTemperature, formatWind } from '@/utils/formatters';
import { usePreferences } from '@/hooks/usePreferences';

export function CurrentConditions() {
  const { data } = useWeather();
  const { preferences } = usePreferences();

  if (!data) {
    return null;
  }

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Current Conditions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-4xl font-semibold text-white">
          {formatTemperature(data.current.temperature, preferences.units)}
        </div>
        <p className="text-white/70">{data.current.condition}</p>
        <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
          <div>
            Feels like {formatTemperature(data.current.feelsLike, preferences.units)}
          </div>
          <div>Humidity {data.current.humidity}%</div>
          <div>Wind {formatWind(data.current.windSpeed, preferences.units)}</div>
          <div>Direction {data.current.windDirection}</div>
        </div>
      </CardContent>
    </Card>
  );
}

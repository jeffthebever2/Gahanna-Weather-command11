import { Card, CardContent } from '@/components/ui/card';
import { DailyForecast } from '@/types/weather';
import { usePreferences } from '@/hooks/usePreferences';
import { formatTemperature } from '@/utils/formatters';

export function DailyCard({ forecast }: { forecast: DailyForecast }) {
  const { preferences } = usePreferences();

  return (
    <Card className="bg-white/5 border-white/10">
      <CardContent className="flex items-center justify-between">
        <div>
          <p className="text-white font-medium">{forecast.date}</p>
          <p className="text-white/60 text-sm">{forecast.condition}</p>
        </div>
        <div className="text-right text-white/80">
          <p>{formatTemperature(forecast.high, preferences.units)}</p>
          <p className="text-sm text-white/50">{formatTemperature(forecast.low, preferences.units)}</p>
        </div>
      </CardContent>
    </Card>
  );
}

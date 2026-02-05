import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MarineForecast() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Marine Forecast</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-white/70">
        <p>Wave height: 2-4 ft</p>
        <p>Wind: 12 kt from SW</p>
        <p>Visibility: 10+ nm</p>
        <p className="text-xs text-white/50">Coastal waters update at 6 AM/PM.</p>
      </CardContent>
    </Card>
  );
}

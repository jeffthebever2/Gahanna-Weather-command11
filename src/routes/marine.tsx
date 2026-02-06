import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MarinePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Marine & Boating Weather</h1>
        <p className="text-white/70">Wave heights, marine advisories, and coastal forecasts.</p>
      </header>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Marine Forecast</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          Forecast periods, tides, and wind-driven wave models will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

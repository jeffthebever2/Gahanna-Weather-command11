import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SpacePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Space Weather & Aurora</h1>
        <p className="text-white/70">Geomagnetic activity, aurora forecasts, and solar wind data.</p>
      </header>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Aurora Forecast</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          KP index outlooks, aurora visibility bands, and solar flare alerts will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

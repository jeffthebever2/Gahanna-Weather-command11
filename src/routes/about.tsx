import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { API_KEYS } from '@/config/api';

export function AboutPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">About WeatherPro</h1>
        <p className="text-white/70">Professional-grade weather intelligence powered by multiple data sources.</p>
      </header>

      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">API Attribution</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70 space-y-2">
          <p>Weatherbit, Tomorrow.io, Visual Crossing, Pirate Weather, Open-Meteo, and NOAA/NWS.</p>
          <p className="text-xs text-white/50">Keys configured: {Object.keys(API_KEYS).length} providers.</p>
        </CardContent>
      </Card>
    </div>
  );
}

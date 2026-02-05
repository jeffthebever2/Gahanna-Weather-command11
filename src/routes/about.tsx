import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">About WeatherPro</h1>
        <p className="text-white/70">API attribution and platform details.</p>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Data Sources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-white/70">
          <p>Weatherbit</p>
          <p>Tomorrow.io</p>
          <p>Visual Crossing</p>
          <p>Pirate Weather</p>
          <p>Open-Meteo</p>
          <p>Weather.gov</p>
        </CardContent>
      </Card>
    </div>
  );
}

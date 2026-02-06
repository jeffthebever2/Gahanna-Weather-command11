import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function HourlyPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">48-Hour Forecast</h1>
        <p className="text-white/70">Granular hour-by-hour outlook with precipitation and wind trends.</p>
      </header>

      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Hourly Timeline</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          Scrollable timeline with temperature, precipitation probability, and wind gusts will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

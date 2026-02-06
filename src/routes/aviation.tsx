import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AviationPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Aviation Weather</h1>
        <p className="text-white/70">METAR, TAF, and flight conditions.</p>
      </header>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Flight Conditions</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          Flight category summaries, ceiling trends, and runway crosswind forecasts will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

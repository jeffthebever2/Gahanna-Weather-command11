import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TropicalPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Tropical Weather Center</h1>
        <p className="text-white/70">Hurricane tracking, model cones, and advisories.</p>
      </header>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Storm Tracker</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          Tropical outlooks, forecast cones, and intensity trends will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

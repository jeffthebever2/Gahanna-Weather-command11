import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TropicalTracker() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Tropical Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-white/70">
        <p>No active tropical cyclones in the Atlantic basin.</p>
        <p>Next outlook update: 2 PM EDT.</p>
      </CardContent>
    </Card>
  );
}

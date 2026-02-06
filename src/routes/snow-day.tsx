import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function SnowDayPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Snow Day Calculator</h1>
        <p className="text-white/70">Estimate school closure probability using snowfall, timing, and temperatures.</p>
      </header>

      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Prediction Engine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-white/70">
          <p>Enter expected snowfall, timing, and district response factors to calculate risk.</p>
          <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white">Run Analysis</Button>
        </CardContent>
      </Card>
    </div>
  );
}

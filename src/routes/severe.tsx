import { SevereWeatherPanel } from '@/components/specialized/SevereWeatherPanel';
import { Card, CardContent } from '@/components/ui/card';

export function SeverePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Severe Weather Center</h1>
        <p className="text-white/70">Watches, warnings, and convective outlooks.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <SevereWeatherPanel />
        <Card className="bg-white/5 border-white/10">
          <CardContent className="space-y-3 text-sm text-white/70">
            <p>Next briefing at 3:30 PM.</p>
            <p>Storm mode: Discrete supercells possible.</p>
            <p>Confidence: Moderate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

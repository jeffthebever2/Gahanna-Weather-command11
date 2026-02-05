import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AuroraForecast() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Aurora Forecast</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-white/70">
        <p>Kp index: 3 (Quiet)</p>
        <p>Best viewing window: 11 PM - 2 AM</p>
        <p>Cloud cover: 30%</p>
      </CardContent>
    </Card>
  );
}

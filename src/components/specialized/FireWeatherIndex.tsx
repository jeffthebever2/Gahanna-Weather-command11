import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FireWeatherIndex() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Fire Weather Index</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-white/70">
        <p>Fire danger: Elevated</p>
        <p>Fuel moisture: 9%</p>
        <p>Red flag potential: Low</p>
      </CardContent>
    </Card>
  );
}

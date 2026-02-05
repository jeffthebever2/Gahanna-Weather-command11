import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AviationWeather() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Aviation Weather</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-white/70">
        <p>METAR: KCMH 181551Z 22010KT 10SM SCT050 24/12 A2992</p>
        <p>TAF: VFR conditions expected through 00Z.</p>
        <p className="text-xs text-white/50">Flight category: VFR</p>
      </CardContent>
    </Card>
  );
}

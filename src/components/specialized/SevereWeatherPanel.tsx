import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const threats = [
  { label: 'Wind', level: 'Moderate' },
  { label: 'Hail', level: 'Low' },
  { label: 'Tornado', level: 'Enhanced' },
];

export function SevereWeatherPanel() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Severe Weather Outlook</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {threats.map((threat) => (
          <div key={threat.label} className="flex items-center justify-between text-sm text-white/70">
            <span>{threat.label}</span>
            <span className="text-red-300">{threat.level}</span>
          </div>
        ))}
        <p className="text-xs text-white/60">
          Next update in 45 minutes. Monitor watches and warnings.
        </p>
      </CardContent>
    </Card>
  );
}

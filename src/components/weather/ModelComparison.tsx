import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const models = [
  { name: 'Weatherbit', confidence: 86 },
  { name: 'Tomorrow.io', confidence: 82 },
  { name: 'Visual Crossing', confidence: 79 },
  { name: 'Pirate Weather', confidence: 76 },
  { name: 'Open-Meteo', confidence: 81 },
  { name: 'Weather.gov', confidence: 88 },
];

export function ModelComparison() {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Model Comparison</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {models.map((model) => (
          <div key={model.name} className="flex items-center justify-between text-sm text-white/70">
            <span>{model.name}</span>
            <span className="text-blue-300">{model.confidence}% agreement</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

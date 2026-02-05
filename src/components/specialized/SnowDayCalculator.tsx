import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateSnowDayChance } from '@/utils/calculations';

export function SnowDayCalculator() {
  const [snowAmount, setSnowAmount] = useState(3);
  const [temperature, setTemperature] = useState(28);
  const chance = calculateSnowDayChance(snowAmount, temperature);

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">Snow Day Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm text-white/70">
            Snowfall (inches)
            <Input
              type="number"
              value={snowAmount}
              onChange={(event) => setSnowAmount(Number(event.target.value))}
              className="mt-2"
            />
          </label>
          <label className="text-sm text-white/70">
            Temperature (°F)
            <Input
              type="number"
              value={temperature}
              onChange={(event) => setTemperature(Number(event.target.value))}
              className="mt-2"
            />
          </label>
        </div>
        <div className="rounded-lg bg-white/5 p-4 text-center">
          <p className="text-sm text-white/60">Estimated closure probability</p>
          <p className="text-3xl font-semibold text-blue-400">{Math.round(chance)}%</p>
        </div>
        <Button className="w-full">Generate Report</Button>
      </CardContent>
    </Card>
  );
}

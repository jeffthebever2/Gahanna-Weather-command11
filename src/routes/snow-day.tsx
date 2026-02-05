import { SnowDayCalculator } from '@/components/specialized/SnowDayCalculator';

export function SnowDayPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Snow Day Calculator</h1>
        <p className="text-white/70">Estimate closure probability with local inputs.</p>
      </div>
      <SnowDayCalculator />
    </div>
  );
}

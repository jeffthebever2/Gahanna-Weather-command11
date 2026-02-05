import { MarineForecast } from '@/components/specialized/MarineForecast';

export function MarinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Marine & Boating Weather</h1>
        <p className="text-white/70">Coastal forecasts, waves, and marine advisories.</p>
      </div>
      <MarineForecast />
    </div>
  );
}

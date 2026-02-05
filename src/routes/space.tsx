import { AuroraForecast } from '@/components/specialized/AuroraForecast';

export function SpacePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Space Weather & Aurora</h1>
        <p className="text-white/70">Geomagnetic activity, aurora forecasts, and solar data.</p>
      </div>
      <AuroraForecast />
    </div>
  );
}

import { AviationWeather } from '@/components/specialized/AviationWeather';

export function AviationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Aviation Weather</h1>
        <p className="text-white/70">METAR, TAF, and flight rule summaries.</p>
      </div>
      <AviationWeather />
    </div>
  );
}

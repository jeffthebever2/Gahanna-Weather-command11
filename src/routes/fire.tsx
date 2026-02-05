import { FireWeatherIndex } from '@/components/specialized/FireWeatherIndex';

export function FirePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Fire Weather Index</h1>
        <p className="text-white/70">Wildfire risk, fuels, and red flag conditions.</p>
      </div>
      <FireWeatherIndex />
    </div>
  );
}

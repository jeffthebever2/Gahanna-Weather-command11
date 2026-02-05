import { TropicalTracker } from '@/components/specialized/TropicalTracker';

export function TropicalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Tropical Tracking</h1>
        <p className="text-white/70">Hurricanes, tropical storms, and outlooks.</p>
      </div>
      <TropicalTracker />
    </div>
  );
}

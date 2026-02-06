import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TourComplete({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6">
          <Check className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">You're All Set!</h2>
        <p className="text-white/70 text-lg max-w-md mx-auto">
          Your weather intelligence platform is ready. Let's explore what you can do.
        </p>
      </div>

      <div className="grid gap-4 max-w-2xl mx-auto mb-8 text-left">
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-1">Interactive Radar</h3>
              <p className="text-white/70 text-sm">
                View live precipitation, play animations, and toggle weather layers.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-1">Multi-Source Analysis</h3>
              <p className="text-white/70 text-sm">
                Compare forecasts from 6 weather APIs and see model agreement.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-white/10">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-green-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-1">Specialized Centers</h3>
              <p className="text-white/70 text-sm">
                Access marine, aviation, fire, tropical, and space weather data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button
        type="button"
        onClick={onComplete}
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12"
      >
        Start Using WeatherPro
      </Button>
    </div>
  );
}

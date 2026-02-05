import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Search, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { storageService } from '@/services/storageService';

export function LocationSetup({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleAutoDetect = async () => {
    setLoading(true);
    setError('');

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      storageService.setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        name: 'Current Location',
      });

      onNext();
    } catch (err) {
      setError('Location access denied. Please enable location permissions or enter manually.');
    } finally {
      setLoading(false);
    }
  };

  const handleManualLocation = () => {
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }

    storageService.setLocation({
      latitude: 40.7128,
      longitude: -74.006,
      name: location,
    });

    onNext();
  };

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-4">
          <MapPin className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Set Your Location</h2>
        <p className="text-white/70">
          We'll use this to provide accurate weather forecasts for your area
        </p>
      </div>

      {error && (
        <Alert className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="mb-8">
        <Button
          onClick={handleAutoDetect}
          disabled={loading}
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <MapPin className="w-5 h-5 mr-2" />
          )}
          Auto-Detect Location
        </Button>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-900 text-white/60">Or enter manually</span>
        </div>
      </div>

      <div className="mb-8">
        <Label htmlFor="location" className="text-white mb-2 block">
          City, State or ZIP Code
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
          <Input
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="e.g., Columbus, OH or 43215"
            className="pl-10 bg-white/5 border-white/20 text-white"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} className="border-white/20 text-white">
          Back
        </Button>
        <Button onClick={handleManualLocation} className="bg-blue-600 hover:bg-blue-700">
          Continue
        </Button>
      </div>
    </div>
  );
}

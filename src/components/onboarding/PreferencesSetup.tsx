import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Settings as SettingsIcon } from 'lucide-react';
import { storageService } from '@/services/storageService';

export function PreferencesSetup({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [units, setUnits] = useState('imperial');
  const [features, setFeatures] = useState({
    severe: true,
    snow: true,
    marine: false,
    aviation: false,
  });

  const handleSave = () => {
    storageService.setPreferences({
      units: units === 'imperial' ? 'imperial' : 'metric',
      features,
    });
    onNext();
  };

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-4">
          <SettingsIcon className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Customize Your Experience</h2>
        <p className="text-white/70">Set your preferences for units and features</p>
      </div>

      <div className="mb-8">
        <Label className="text-white text-lg mb-4 block">Temperature Units</Label>
        <RadioGroup value={units} onValueChange={setUnits}>
          <div className="flex items-center space-x-2 p-4 rounded-lg bg-white/5 border border-white/10 mb-2">
            <RadioGroupItem value="imperial" id="imperial" />
            <Label htmlFor="imperial" className="text-white cursor-pointer flex-1">
              Fahrenheit (°F) & Miles
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-4 rounded-lg bg-white/5 border border-white/10">
            <RadioGroupItem value="metric" id="metric" />
            <Label htmlFor="metric" className="text-white cursor-pointer flex-1">
              Celsius (°C) & Kilometers
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="mb-8">
        <Label className="text-white text-lg mb-4 block">Enable Features</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <Checkbox
              id="severe"
              checked={features.severe}
              onCheckedChange={(checked) => setFeatures({ ...features, severe: checked })}
            />
            <Label htmlFor="severe" className="text-white cursor-pointer flex-1">
              <span className="font-semibold">Severe Weather Alerts</span>
              <p className="text-white/60 text-sm">Get notified of watches and warnings</p>
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <Checkbox
              id="snow"
              checked={features.snow}
              onCheckedChange={(checked) => setFeatures({ ...features, snow: checked })}
            />
            <Label htmlFor="snow" className="text-white cursor-pointer flex-1">
              <span className="font-semibold">Snow Day Calculator</span>
              <p className="text-white/60 text-sm">Track school closure probability</p>
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <Checkbox
              id="marine"
              checked={features.marine}
              onCheckedChange={(checked) => setFeatures({ ...features, marine: checked })}
            />
            <Label htmlFor="marine" className="text-white cursor-pointer flex-1">
              <span className="font-semibold">Marine Weather</span>
              <p className="text-white/60 text-sm">Boating and coastal forecasts</p>
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <Checkbox
              id="aviation"
              checked={features.aviation}
              onCheckedChange={(checked) => setFeatures({ ...features, aviation: checked })}
            />
            <Label htmlFor="aviation" className="text-white cursor-pointer flex-1">
              <span className="font-semibold">Aviation Weather</span>
              <p className="text-white/60 text-sm">METAR, TAF, and flight conditions</p>
            </Label>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack} className="border-white/20 text-white">
          Back
        </Button>
        <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
          Continue
        </Button>
      </div>
    </div>
  );
}

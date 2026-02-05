import { Cloud, CloudRain, Sun } from 'lucide-react';

export function WeatherIcon({ condition }: { condition: string }) {
  if (condition.toLowerCase().includes('rain')) {
    return <CloudRain className="w-6 h-6 text-blue-400" />;
  }
  if (condition.toLowerCase().includes('cloud')) {
    return <Cloud className="w-6 h-6 text-slate-300" />;
  }
  return <Sun className="w-6 h-6 text-yellow-400" />;
}

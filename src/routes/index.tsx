import { CurrentConditions } from '@/components/weather/CurrentConditions';
import { HourlyTimeline } from '@/components/weather/HourlyTimeline';
import { ModelComparison } from '@/components/weather/ModelComparison';
import { TemperatureChart } from '@/components/charts/TemperatureChart';
import { PrecipitationChart } from '@/components/charts/PrecipitationChart';
import { WindChart } from '@/components/charts/WindChart';
import { PressureChart } from '@/components/charts/PressureChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Weather Dashboard</h1>
        <p className="text-white/70">Multi-source forecasting and analytics overview.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <CurrentConditions />
          <HourlyTimeline />
        </div>
        <ModelComparison />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Temperature Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <TemperatureChart />
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Precipitation</CardTitle>
          </CardHeader>
          <CardContent>
            <PrecipitationChart />
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Wind Speeds</CardTitle>
          </CardHeader>
          <CardContent>
            <WindChart />
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Pressure Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <PressureChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

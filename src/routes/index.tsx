import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useWeather } from '@/hooks/useWeather';
import { useLocation } from '@/hooks/useLocation';
import { CloudRain, Wind, Sun, Snowflake, AlertTriangle } from 'lucide-react';

export function DashboardPage() {
  const { data } = useWeather();
  const { location } = useLocation();

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Weather Intelligence Dashboard</h1>
          <p className="text-white/70">
            Multi-source forecasts and professional tools for {location.name}.
          </p>
        </div>
        <Badge className="border border-white/20 bg-white/5 text-white">Updated {data?.updatedAt ?? 'now'}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Current Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-white/70">
            <div className="flex items-center gap-3 text-3xl text-white">
              <Sun className="w-8 h-8 text-yellow-300" />
              {data?.temperature ?? 72}°F
            </div>
            <p>{data?.summary ?? 'Partly cloudy with light winds.'}</p>
          </CardContent>
        </Card>
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Forecast Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-white/70">
            <div className="flex items-center gap-3">
              <CloudRain className="w-5 h-5 text-blue-400" />
              20% chance of rain after 6 PM
            </div>
            <div className="flex items-center gap-3">
              <Wind className="w-5 h-5 text-teal-300" />
              Winds 8-12 mph from the west
            </div>
            <div className="flex items-center gap-3">
              <Snowflake className="w-5 h-5 text-sky-300" />
              Snow risk low through the weekend
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Alerts & Advisories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-white/70">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              None active for your region
            </div>
            <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white">
              View alert center
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Multi-Model Outlook</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70">
            Compare forecast confidence across Weatherbit, Tomorrow.io, Visual Crossing, and more.
          </CardContent>
        </Card>
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button type="button" className="bg-white/10 text-white">Export data</Button>
            <Button type="button" className="bg-white/10 text-white">Share report</Button>
            <Button type="button" className="bg-white/10 text-white">View radar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

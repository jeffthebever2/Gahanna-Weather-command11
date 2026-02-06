import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DailyPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">10-Day Outlook</h1>
        <p className="text-white/70">Extended forecast with trends for temperature, precipitation, and wind.</p>
      </header>

      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Daily Forecast Cards</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          Detailed daily summaries with highs, lows, and precipitation totals will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

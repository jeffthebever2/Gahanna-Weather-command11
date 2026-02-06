import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SeverePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Severe Weather Center</h1>
        <p className="text-white/70">Watches, warnings, and mesoscale analysis tools.</p>
      </header>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Active Threats</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          Real-time severe weather outlooks and storm tracking modules will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

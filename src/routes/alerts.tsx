import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AlertsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Active Weather Alerts</h1>
        <p className="text-white/70">Official alerts, watches, and warnings for your region.</p>
      </header>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Alert Feed</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          National Weather Service alerts and push notification settings will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

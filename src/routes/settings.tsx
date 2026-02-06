import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Settings & Preferences</h1>
        <p className="text-white/70">Manage units, notifications, accessibility, and saved locations.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70">
            Choose alert thresholds for severe weather, daily summaries, and custom triggers.
          </CardContent>
        </Card>
        <Card className="bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Accessibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-white/70">
            High-contrast mode, font sizing, and keyboard navigation options.
            <Button type="button" className="bg-white/10 text-white">Open accessibility settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Settings & Preferences</h1>
        <p className="text-white/70">Personalize your weather intelligence experience.</p>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-white">Severe weather alerts</Label>
            <Checkbox />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-white">Daily forecast summary</Label>
            <Checkbox />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-white">Custom threshold alerts</Label>
            <Checkbox />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Data Export</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Export CSV</Button>
          <Button variant="secondary">Export JSON</Button>
          <Button variant="outline">Generate PDF</Button>
          <Button variant="ghost">Share Link</Button>
        </CardContent>
      </Card>
    </div>
  );
}

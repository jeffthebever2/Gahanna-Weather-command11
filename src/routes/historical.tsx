import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function HistoricalPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Historical Weather</h1>
        <p className="text-white/70">Search previous dates and climate trends.</p>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Historical Search</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="date" />
            <Input placeholder="Location" />
          </div>
          <Button>Search</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {['Temperature Anomaly', 'Climate Records', 'Almanac'].map((item) => (
          <Card key={item} className="bg-white/5 border-white/10">
            <CardContent className="text-sm text-white/70">{item} summary will appear here.</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

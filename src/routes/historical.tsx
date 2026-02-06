import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function HistoricalPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Historical Weather Data</h1>
        <p className="text-white/70">Search any date, location, and climate record.</p>
      </header>

      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Historical Search</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-white/70">
          <div className="grid gap-3 md:grid-cols-3">
            <Input placeholder="Location" />
            <Input placeholder="Start date" />
            <Input placeholder="End date" />
          </div>
          <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white">Run analysis</Button>
        </CardContent>
      </Card>
    </div>
  );
}

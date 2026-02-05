import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ComparePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Location Comparison</h1>
        <p className="text-white/70">Compare multiple locations side-by-side.</p>
      </div>

      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Add Locations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Location A" />
            <Input placeholder="Location B" />
          </div>
          <Button>Compare</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {['Location A', 'Location B'].map((label) => (
          <Card key={label} className="bg-white/5 border-white/10">
            <CardContent className="space-y-2">
              <h3 className="text-white font-semibold">{label}</h3>
              <p className="text-white/60 text-sm">Current: 72°F, Clear</p>
              <p className="text-white/60 text-sm">Historical vs Current: +2°F</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

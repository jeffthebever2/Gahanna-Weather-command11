import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ComparePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Location Comparison Tool</h1>
        <p className="text-white/70">Compare multiple locations side-by-side across models and history.</p>
      </header>

      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Compare Locations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-white/70">
          <div className="grid gap-3 md:grid-cols-2">
            <Input placeholder="Location A" />
            <Input placeholder="Location B" />
          </div>
          <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white">Compare now</Button>
        </CardContent>
      </Card>
    </div>
  );
}

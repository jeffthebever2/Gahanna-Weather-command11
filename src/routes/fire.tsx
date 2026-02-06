import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FirePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-white mb-2">Fire Weather Index</h1>
        <p className="text-white/70">Fuel moisture, wind-driven spread, and red flag conditions.</p>
      </header>
      <Card className="bg-white/5">
        <CardHeader>
          <CardTitle className="text-white">Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent className="text-white/70">
          Fire danger ratings, live fuel moisture, and forecasted fire behavior will appear here.
        </CardContent>
      </Card>
    </div>
  );
}

import { useQuery } from '@tanstack/react-query';
import { alertsService } from '@/services/alertsService';
import { Card, CardContent } from '@/components/ui/card';

export function AlertsPage() {
  const { data } = useQuery({
    queryKey: ['alerts'],
    queryFn: () => alertsService.getAlerts(),
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Active Alerts</h1>
        <p className="text-white/70">Severe weather notifications for your area.</p>
      </div>

      <div className="grid gap-4">
        {data?.map((alert) => (
          <Card key={alert.id} className="bg-white/5 border-white/10">
            <CardContent className="space-y-2">
              <h3 className="text-white font-semibold">{alert.title}</h3>
              <p className="text-white/70 text-sm">{alert.description}</p>
              <span className="text-xs text-red-300 uppercase">{alert.severity}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

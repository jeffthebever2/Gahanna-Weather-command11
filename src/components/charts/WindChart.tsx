import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', wind: 8 },
  { name: 'Tue', wind: 10 },
  { name: 'Wed', wind: 12 },
  { name: 'Thu', wind: 9 },
  { name: 'Fri', wind: 14 },
];

export function WindChart() {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
          <Line type="monotone" dataKey="wind" stroke="#facc15" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

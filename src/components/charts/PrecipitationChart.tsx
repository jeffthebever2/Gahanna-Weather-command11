import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', precip: 10 },
  { name: 'Tue', precip: 20 },
  { name: 'Wed', precip: 35 },
  { name: 'Thu', precip: 15 },
  { name: 'Fri', precip: 5 },
];

export function PrecipitationChart() {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
          <Bar dataKey="precip" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

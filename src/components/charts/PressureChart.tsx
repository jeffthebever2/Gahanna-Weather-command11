import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Mon', pressure: 1015 },
  { name: 'Tue', pressure: 1012 },
  { name: 'Wed', pressure: 1018 },
  { name: 'Thu', pressure: 1020 },
  { name: 'Fri', pressure: 1016 },
];

export function PressureChart() {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
          <Area type="monotone" dataKey="pressure" stroke="#a855f7" fill="#a855f7" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

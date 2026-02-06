import { Link, useLocation } from '@tanstack/react-router';
import { Home, Radar, Clock, Calendar, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Radar', href: '/radar', icon: Radar },
  { name: 'Hourly', href: '/hourly', icon: Clock },
  { name: 'Daily', href: '/daily', icon: Calendar },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 inset-x-0 border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="flex items-center justify-around p-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex flex-col items-center text-xs gap-1 px-2 py-1',
                isActive ? 'text-blue-300' : 'text-white/70'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

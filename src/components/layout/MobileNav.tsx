import { Link, useLocation } from '@tanstack/react-router';
import { Home, Radar, Bell, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Radar', href: '/radar', icon: Radar },
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/90 backdrop-blur-lg">
      <div className="flex items-center justify-around py-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex flex-col items-center gap-1 text-xs',
                isActive ? 'text-blue-400' : 'text-white/70'
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

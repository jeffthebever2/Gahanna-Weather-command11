import { Link, useLocation } from '@tanstack/react-router';
import {
  Home,
  Radar,
  Clock,
  Calendar,
  Snowflake,
  AlertTriangle,
  Anchor,
  Plane,
  Flame,
  Waves,
  Zap,
  Bell,
  History,
  GitCompare,
  Settings,
  Info,
  Cloud,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Radar', href: '/radar', icon: Radar },
  { name: 'Hourly', href: '/hourly', icon: Clock },
  { name: 'Daily', href: '/daily', icon: Calendar },
];

const specialized = [
  { name: 'Snow Day', href: '/snow-day', icon: Snowflake },
  { name: 'Severe Weather', href: '/severe', icon: AlertTriangle },
  { name: 'Marine', href: '/marine', icon: Anchor },
  { name: 'Aviation', href: '/aviation', icon: Plane },
  { name: 'Fire Weather', href: '/fire', icon: Flame },
  { name: 'Tropical', href: '/tropical', icon: Waves },
  { name: 'Space Weather', href: '/space', icon: Zap },
];

const tools = [
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Historical', href: '/historical', icon: History },
  { name: 'Compare', href: '/compare', icon: GitCompare },
];

const other = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'About', href: '/about', icon: Info },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-full flex flex-col backdrop-blur-xl bg-slate-900/50">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Cloud className="w-8 h-8 text-blue-400" />
          WeatherPro
        </h1>
        <p className="text-xs text-white/60 mt-1">Professional Intelligence</p>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Main</h3>
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                      isActive
                        ? 'bg-blue-500/20 text-blue-300 font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Specialized</h3>
            <div className="space-y-1">
              {specialized.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm',
                      isActive
                        ? 'bg-blue-500/20 text-blue-300 font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Tools</h3>
            <div className="space-y-1">
              {tools.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm',
                      isActive
                        ? 'bg-blue-500/20 text-blue-300 font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div>
            <div className="space-y-1">
              {other.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm',
                      isActive
                        ? 'bg-blue-500/20 text-blue-300 font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-white/10">
        <div className="text-xs text-white/50 text-center">
          <p>Data from 6 sources</p>
          <p className="mt-1">Updated every 10 min</p>
        </div>
      </div>
    </div>
  );
}

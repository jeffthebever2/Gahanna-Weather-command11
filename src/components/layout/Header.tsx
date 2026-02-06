import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  MapPin,
  Search,
  RefreshCw,
  Settings as SettingsIcon,
  Bell,
  Sun,
  Moon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocation } from '@/hooks/useLocation';
import { useWeather } from '@/hooks/useWeather';
import { cn } from '@/lib/utils';

export function Header() {
  const { location } = useLocation();
  const { refetch, isLoading } = useWeather();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="border-b border-white/10 backdrop-blur-xl bg-slate-900/50 sticky top-0 z-40">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span className="font-medium">{location.name}</span>
          </Button>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input placeholder="Search location..." className="pl-10" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            onClick={() => refetch()}
            disabled={isLoading}
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <RefreshCw className={cn('w-5 h-5', isLoading && 'animate-spin')} />
          </Button>

          <Button type="button" className="text-white/80 hover:text-white hover:bg-white/10 relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              2
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-white/80 hover:text-white hover:bg-white/10">
              <Sun className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Sun className="w-4 h-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Moon className="w-4 h-4" />
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/settings" className="text-white/80 hover:text-white hover:bg-white/10 rounded-md p-2">
            <SettingsIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

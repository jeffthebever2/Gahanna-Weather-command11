import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MapPin,
  Search,
  RefreshCw,
  Settings as SettingsIcon,
  Bell,
  Sun,
  Moon,
} from 'lucide-react';
import { useLocation } from '@/hooks/useLocation';
import { useWeather } from '@/hooks/useWeather';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const { location } = useLocation();
  const { refetch, isLoading } = useWeather();
  const [query, setQuery] = useState('');

  return (
    <header className="border-b border-white/10 backdrop-blur-xl bg-slate-900/50 sticky top-0 z-40">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span className="font-medium">{location.name}</span>
          </Button>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              placeholder="Search location..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => refetch()}
            disabled={isLoading}
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <RefreshCw className={cn('w-5 h-5', isLoading && 'animate-spin')} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white/80 hover:text-white hover:bg-white/10 relative"
          >
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              2
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <Sun className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Sun className="w-4 h-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Moon className="w-4 h-4 mr-2" />
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            <Link to="/settings">
              <SettingsIcon className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

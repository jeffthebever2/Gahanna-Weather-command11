import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none',
        variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'ghost' && 'bg-transparent text-white hover:bg-white/10',
        variant === 'secondary' && 'bg-white/10 text-white hover:bg-white/20',
        variant === 'outline' && 'border border-white/20 text-white hover:bg-white/10',
        size === 'default' && 'h-10 px-4 py-2',
        size === 'sm' && 'h-9 px-3',
        size === 'lg' && 'h-11 px-6 text-base',
        size === 'icon' && 'h-10 w-10',
        className
      )}
      {...props}
    />
  );
}

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className, ...props }: ProgressProps) {
  return (
    <div className={cn('h-2 w-full rounded-full bg-white/10', className)} {...props}>
      <div
        className="h-full rounded-full bg-blue-500 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

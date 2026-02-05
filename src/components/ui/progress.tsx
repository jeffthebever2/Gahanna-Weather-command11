import * as React from 'react';
import { cn } from '@/lib/utils';

export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-white/10', className)}>
      <div className="h-full bg-blue-500" style={{ width: `${value}%` }} />
    </div>
  );
}

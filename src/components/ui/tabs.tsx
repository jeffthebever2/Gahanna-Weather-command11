import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Tabs({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-4', className)} {...props} />;
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('inline-flex items-center gap-2 rounded-lg p-1', className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('rounded-md px-3 py-1 text-sm text-white/70 hover:text-white', className)}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props} />;
}

import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-flex">{children}</div>;
}

export function DropdownMenuTrigger({ className, ...props }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn('inline-flex items-center', className)} {...props} />
  );
}

export function DropdownMenuContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'absolute right-0 mt-2 min-w-[140px] rounded-md border border-white/10 bg-slate-900/95 p-2 text-sm',
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuItem({ className, ...props }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('flex w-full items-center gap-2 rounded px-2 py-1 text-left text-white/80 hover:bg-white/10', className)}
      {...props}
    />
  );
}

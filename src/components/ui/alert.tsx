import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Alert({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm', className)}
      {...props}
    />
  );
}

export function AlertDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-red-100', className)} {...props} />;
}

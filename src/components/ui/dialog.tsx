import * as React from 'react';
import { cn } from '@/lib/utils';

type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function Dialog({ children, open = true }: DialogProps) {
  if (!open) {
    return null;
  }
  return <>{children}</>;
}

export function DialogContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4',
        className
      )}
      {...props}
    />
  );
}

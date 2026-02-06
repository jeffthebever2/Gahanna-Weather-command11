import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
}

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return <div className={cn('space-y-2', className)} {...props} />;
}

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return <input type="radio" className={cn('h-4 w-4', className)} {...props} />;
}

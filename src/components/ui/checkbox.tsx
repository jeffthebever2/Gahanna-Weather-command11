import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
}

export function Checkbox({ className, checked, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      className={cn('h-4 w-4 rounded border-white/30 bg-white/10', className)}
      {...props}
    />
  );
}

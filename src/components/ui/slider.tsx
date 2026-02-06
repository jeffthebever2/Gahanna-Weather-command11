import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value: number[];
  onValueChange: (value: number[]) => void;
}

export function Slider({ className, value, onValueChange, ...props }: SliderProps) {
  return (
    <input
      type="range"
      className={cn('w-full accent-blue-500', className)}
      value={value[0]}
      onChange={(event) => onValueChange([Number(event.target.value)])}
      {...props}
    />
  );
}

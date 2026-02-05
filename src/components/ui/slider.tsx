import * as React from 'react';
import { cn } from '@/lib/utils';

type SliderProps = {
  value: number[];
  max: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  className?: string;
};

export function Slider({ value, max, step = 1, onValueChange, className }: SliderProps) {
  return (
    <input
      className={cn('w-full accent-blue-500', className)}
      type="range"
      min={0}
      max={max}
      step={step}
      value={value[0]}
      onChange={(event) => onValueChange?.([Number(event.target.value)])}
    />
  );
}

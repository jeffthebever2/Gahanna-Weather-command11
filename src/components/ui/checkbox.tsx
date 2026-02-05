import * as React from 'react';

type CheckboxProps = {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export function Checkbox({ id, checked, onCheckedChange }: CheckboxProps) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(event) => onCheckedChange?.(event.target.checked)}
      className="h-4 w-4 accent-blue-500"
    />
  );
}

import * as React from 'react';

type RadioGroupProps = {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
};

export function RadioGroup({ value, onValueChange, children }: RadioGroupProps) {
  return (
    <div onChange={(event) => onValueChange((event.target as HTMLInputElement).value)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child as React.ReactElement, { groupValue: value }) : child
      )}
    </div>
  );
}

export function RadioGroupItem({ value, id, groupValue }: { value: string; id: string; groupValue?: string }) {
  return <input type="radio" id={id} value={value} checked={groupValue === value} readOnly className="h-4 w-4" />;
}

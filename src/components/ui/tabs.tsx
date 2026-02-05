import * as React from 'react';
import { cn } from '@/lib/utils';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function Tabs({ defaultValue, className, children }: { defaultValue: string; className?: string; children: React.ReactNode }) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('inline-flex rounded-lg border border-white/10 p-1', className)} {...props} />;
}

export function TabsTrigger({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const context = React.useContext(TabsContext);
  if (!context) {
    return null;
  }
  const isActive = context.value === value;
  return (
    <button
      className={cn(
        'px-3 py-1 text-sm rounded-md transition-colors',
        isActive ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white',
        className
      )}
      onClick={() => context.setValue(value)}
      type="button"
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const context = React.useContext(TabsContext);
  if (!context || context.value !== value) {
    return null;
  }
  return <div className={className}>{children}</div>;
}

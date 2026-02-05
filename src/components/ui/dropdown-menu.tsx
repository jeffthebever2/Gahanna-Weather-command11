import * as React from 'react';

type DropdownContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  const context = React.useContext(DropdownContext);
  if (!context) {
    return <>{children}</>;
  }
  return (
    <div onClick={() => context.setOpen(!context.open)} className="cursor-pointer">
      {children}
    </div>
  );
}

export function DropdownMenuContent({ children, align }: { children: React.ReactNode; align?: string }) {
  const context = React.useContext(DropdownContext);
  if (!context?.open) {
    return null;
  }
  return (
    <div
      className="absolute right-0 mt-2 w-40 rounded-md border border-white/10 bg-slate-900/95 p-2 text-sm text-white shadow"
      data-align={align}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children }: { children: React.ReactNode }) {
  return <div className="flex cursor-pointer items-center rounded px-2 py-1 hover:bg-white/10">{children}</div>;
}

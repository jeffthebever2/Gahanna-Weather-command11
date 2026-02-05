import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { MobileNav } from '@/components/layout/MobileNav';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';
import { usePreferences } from '@/hooks/usePreferences';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/components/layout/Footer';

export function Root() {
  const { hasCompletedOnboarding } = usePreferences();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {!hasCompletedOnboarding && <OnboardingWizard />}

      <div className="flex h-screen overflow-hidden">
        <aside className="hidden lg:block w-64 border-r border-white/10">
          <Sidebar />
        </aside>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <Outlet />
              <Footer />
            </div>
          </main>
        </div>
      </div>

      <div className="lg:hidden">
        <MobileNav />
      </div>

      <Toaster />

      <TanStackRouterDevtools />
    </div>
  );
}

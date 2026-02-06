import { useMemo } from 'react';

export function usePreferences() {
  const hasCompletedOnboarding = useMemo(() => {
    return localStorage.getItem('onboarding_completed') === 'true';
  }, []);

  return { hasCompletedOnboarding };
}

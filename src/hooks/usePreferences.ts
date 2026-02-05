import { useState } from 'react';
import { storageService } from '@/services/storageService';
import { UserPreferences } from '@/types/user';

export const usePreferences = () => {
  const [preferences, setPreferencesState] = useState<UserPreferences>(
    storageService.getPreferences()
  );
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(
    localStorage.getItem('onboarding_completed') === 'true'
  );

  const setPreferences = (next: UserPreferences) => {
    storageService.setPreferences(next);
    setPreferencesState(next);
  };

  const completeOnboarding = () => {
    localStorage.setItem('onboarding_completed', 'true');
    setHasCompletedOnboarding(true);
  };

  return { preferences, setPreferences, hasCompletedOnboarding, completeOnboarding };
};

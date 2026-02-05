import { useState } from 'react';
import { storageService } from '@/services/storageService';
import { SavedLocation } from '@/types/user';

export const useLocation = () => {
  const [location, setLocationState] = useState<SavedLocation>(storageService.getLocation());

  const setLocation = (newLocation: SavedLocation) => {
    storageService.setLocation(newLocation);
    setLocationState(newLocation);
  };

  return { location, setLocation };
};

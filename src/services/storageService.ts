import { SavedLocation, UserPreferences } from '@/types/user';
import { DEFAULT_LOCATION } from '@/config/constants';

const preferencesKey = 'user_preferences';
const locationKey = 'user_location';
const savedLocationsKey = 'saved_locations';

export const storageService = {
  getPreferences(): UserPreferences {
    const stored = localStorage.getItem(preferencesKey);
    if (stored) {
      return JSON.parse(stored) as UserPreferences;
    }

    return {
      units: 'imperial',
      features: {
        severe: true,
        snow: true,
        marine: false,
        aviation: false,
      },
    };
  },
  setPreferences(preferences: UserPreferences) {
    localStorage.setItem(preferencesKey, JSON.stringify(preferences));
  },
  getLocation(): SavedLocation {
    const stored = localStorage.getItem(locationKey);
    if (stored) {
      return JSON.parse(stored) as SavedLocation;
    }
    return DEFAULT_LOCATION;
  },
  setLocation(location: SavedLocation) {
    localStorage.setItem(locationKey, JSON.stringify(location));
  },
  getSavedLocations(): SavedLocation[] {
    const stored = localStorage.getItem(savedLocationsKey);
    if (stored) {
      return JSON.parse(stored) as SavedLocation[];
    }
    return [DEFAULT_LOCATION];
  },
  saveLocation(location: SavedLocation) {
    const saved = storageService.getSavedLocations();
    const updated = [location, ...saved.filter((item) => item.name !== location.name)].slice(0, 5);
    localStorage.setItem(savedLocationsKey, JSON.stringify(updated));
  },
};

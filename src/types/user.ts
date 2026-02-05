export type UserPreferences = {
  units: 'imperial' | 'metric';
  features: {
    severe: boolean;
    snow: boolean;
    marine: boolean;
    aviation: boolean;
  };
};

export type SavedLocation = {
  name: string;
  latitude: number;
  longitude: number;
};

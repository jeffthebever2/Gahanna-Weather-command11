export const geocodingService = {
  async search(query: string) {
    return {
      name: query,
      latitude: 40.7128,
      longitude: -74.006,
    };
  },
};

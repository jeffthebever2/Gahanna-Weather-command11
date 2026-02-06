export async function searchLocations(query: string) {
  if (!query) {
    return [];
  }
  return [
    {
      name: query,
      latitude: 40.0192,
      longitude: -82.8793,
    },
  ];
}

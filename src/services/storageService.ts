export function savePreference<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getPreference<T>(key: string, fallback: T) {
  const stored = localStorage.getItem(key);
  if (!stored) {
    return fallback;
  }
  try {
    return JSON.parse(stored) as T;
  } catch {
    return fallback;
  }
}

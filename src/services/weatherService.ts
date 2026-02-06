import { API_KEYS } from '@/config/api';

export async function getMultiSourceSummary() {
  return {
    sources: Object.keys(API_KEYS),
    summary: 'Multi-source forecast ready.',
  };
}

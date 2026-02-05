export const alertsService = {
  async getAlerts() {
    return [
      {
        id: 'alert-1',
        title: 'Severe Thunderstorm Watch',
        description: 'Potential for damaging winds and hail through 8 PM.',
        severity: 'watch',
      },
      {
        id: 'alert-2',
        title: 'Flood Advisory',
        description: 'Urban flooding possible in low-lying areas.',
        severity: 'advisory',
      },
    ];
  },
};

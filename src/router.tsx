import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { Root } from './routes/__root';
import { DashboardPage } from './routes';
import { RadarPage } from './routes/radar';
import { HourlyPage } from './routes/hourly';
import { DailyPage } from './routes/daily';
import { SnowDayPage } from './routes/snow-day';
import { SeverePage } from './routes/severe';
import { MarinePage } from './routes/marine';
import { AviationPage } from './routes/aviation';
import { FirePage } from './routes/fire';
import { TropicalPage } from './routes/tropical';
import { SpacePage } from './routes/space';
import { AlertsPage } from './routes/alerts';
import { HistoricalPage } from './routes/historical';
import { ComparePage } from './routes/compare';
import { SettingsPage } from './routes/settings';
import { AboutPage } from './routes/about';

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashboardPage,
});

const radarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/radar',
  component: RadarPage,
});

const hourlyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hourly',
  component: HourlyPage,
});

const dailyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/daily',
  component: DailyPage,
});

const snowDayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/snow-day',
  component: SnowDayPage,
});

const severeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/severe',
  component: SeverePage,
});

const marineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/marine',
  component: MarinePage,
});

const aviationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/aviation',
  component: AviationPage,
});

const fireRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/fire',
  component: FirePage,
});

const tropicalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tropical',
  component: TropicalPage,
});

const spaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/space',
  component: SpacePage,
});

const alertsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/alerts',
  component: AlertsPage,
});

const historicalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/historical',
  component: HistoricalPage,
});

const compareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compare',
  component: ComparePage,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: SettingsPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  radarRoute,
  hourlyRoute,
  dailyRoute,
  snowDayRoute,
  severeRoute,
  marineRoute,
  aviationRoute,
  fireRoute,
  tropicalRoute,
  spaceRoute,
  alertsRoute,
  historicalRoute,
  compareRoute,
  settingsRoute,
  aboutRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

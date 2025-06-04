import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'agenda',
        loadChildren: () => import('../agenda/tab1.routes').then((c) => c.routes),
      },
      {
        path: 'speakers',
        loadComponent: () => import('../speakers/speakers.page').then((p) => p.SpeakersPage),
      },
      {
        path: 'sponsors',
        loadComponent: () => import('../sponsors/sponsors.page').then((p) => p.SponsorsPage),
      },
      {
        path: 'profile',
        loadComponent: () => import('../profile/profile.page').then((p) => p.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/agenda',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/agenda',
    pathMatch: 'full',
  },
];

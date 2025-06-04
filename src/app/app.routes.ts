import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((c) => c.routes),
    canActivate: [authGuard],
  },
  {
    path: 'sponsors',
    loadComponent: () => import('./pages/sponsors/sponsors.page').then((p) => p.SponsorsPage),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then((p) => p.ProfilePage),
    canActivate: [authGuard],
  },
  {
    path: 'swag-modal',
    loadComponent: () => import('./components/swag-modal/swag-modal.page').then((p) => p.SwagModalPage),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((p) => p.LoginPage),
  },
  {
    path: 'auth-transition',
    loadComponent: () => import('./pages/auth-transition/auth-transition.page').then((p) => p.AuthTransitionPage),
  },
];

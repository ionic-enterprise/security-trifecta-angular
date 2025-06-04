import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((c) => c.routes),
    canActivate: [AuthGuardService],
  },
  {
    path: 'sponsors',
    loadComponent: () => import('./pages/sponsors/sponsors.page').then((p) => p.SponsorsPage),
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then((p) => p.ProfilePage),
    canActivate: [AuthGuardService],
  },
  {
    path: 'swag-modal',
    loadComponent: () => import('./components/swag-modal/swag-modal.page').then((p) => p.SwagModalPage),
    canActivate: [AuthGuardService],
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

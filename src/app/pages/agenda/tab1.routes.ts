import { Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

export const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: ':agendaId',
    loadComponent: () => import('./agenda-item/agenda-item.page').then((p) => p.AgendaItemPage),
  },
];

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];

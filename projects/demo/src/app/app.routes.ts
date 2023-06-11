import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ThemePickerService } from './services/theme-picker/theme-picker.service';

export const appRoutes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    resolve: { 
      theme: () => inject(ThemePickerService).init()
    },
  }
];

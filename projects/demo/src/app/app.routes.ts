import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ThemePickerService } from './services/theme-picker/theme-picker.service';

export const appRoutes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    resolve: { 
      theme: () => inject(ThemePickerService).init()
    },
  }
];

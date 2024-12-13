import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'documents',
    loadComponent: () =>
      import('./pages/documents/documents.component').then(
        (m) => m.DocumentsComponent
      ),
  },
  {
    path: 'images',
    loadComponent: () =>
      import('./pages/images/images.component').then((m) => m.ImagesComponent),
  },
  {
    path: 'media',
    loadComponent: () =>
      import('./pages/media/media.component').then((m) => m.MediaComponent),
  },
  {
    path: 'others',
    loadComponent: () =>
      import('./pages/others/others.component').then((m) => m.OthersComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

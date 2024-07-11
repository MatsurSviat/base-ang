import { Routes } from '@angular/router';

const authRoutes: Routes = [
  {
    path: 'signup',
    loadComponent: () =>
      import('@pages/auth/signup/signup.component').then((m) => m.SignupComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@pages/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'verification',
    loadComponent: () =>
      import('@pages/auth/verification/verification.component').then(
        (m) => m.VerificationComponent,
      ),
  },
  {
    path: 'password-recovery',
    loadComponent: () =>
      import('@pages/auth/password-recovery/password-recovery.component').then(
        (m) => m.PasswordRecoveryComponent,
      ),
  },
];

const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    redirectTo: 'auth/signup',
    pathMatch: 'full',
  },

    {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    loadComponent: () =>
      import('@layout/containers/empty-layout/empty-layout.component').then(
        (m) => m.EmptyLayoutComponent,
      ),
    children: authRoutes,
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('@layout/containers/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent,
      ),
    children: mainRoutes,
  },


];
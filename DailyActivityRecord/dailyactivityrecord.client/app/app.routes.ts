import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ChildDailyEntryComponent } from './child-daily-entry/child-daily-entry.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent)
  },
  { path: 'dashboard', component: DashboardComponent }, // ✅ Add this line
  {
    path: 'child-daily-entry/:childId',
    component: ChildDailyEntryComponent,
    canActivate: [AuthGuard]
  },
];


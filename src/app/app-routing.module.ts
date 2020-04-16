import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard, AnonymousGuard } from './core/guards';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AnonymousGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [AnonymousGuard]
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./modules/recover-password/recover-password.module').then(m => m.RecoverPasswordPageModule),
    canActivate: [AnonymousGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./core/menu-header/menu-header.module').then(m => m.MenuHeaderPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

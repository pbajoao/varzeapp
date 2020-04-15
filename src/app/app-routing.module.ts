import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./core/menu-header/menu-header.module').then(m => m.MenuHeaderPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./modules/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: '**',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'menu-header',
    loadChildren: () => import('./core/menu-header/menu-header.module').then( m => m.MenuHeaderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

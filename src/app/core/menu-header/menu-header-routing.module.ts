import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuHeaderPage } from './menu-header.page';
import { AuthenticationGuard } from '../guards';

const routes: Routes = [
  {
    path: '',
    component: MenuHeaderPage,
      children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../modules/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuHeaderPageRoutingModule { }

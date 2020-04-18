import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuHeaderPage } from './menu-header.page';

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
        path: 'person',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../modules/person/person.module').then(m => m.PersonPageModule)
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

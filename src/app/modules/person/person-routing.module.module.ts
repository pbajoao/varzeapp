import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonPage } from './person.page';

const routes: Routes = [
    {
        path: '',
        component: PersonPage,
    },
    {
        path: 'edit-photo-person',
        loadChildren: () => import('./photo-person/photo-person.module').then(m => m.PhotoPersonPageModule)
    },
    {
        path: 'edit-photo-background-person',
        loadChildren: () => import('./photo-background-person/photo-background-person.module').then(m => m.PhotoBackgroundPersonPageModule)
    },
    {
        path: 'edit-person',
        loadChildren: () => import('./edit-person/edit-person.module').then(m => m.EditPersonPageModule)
    },
    {
        path: 'personal-data-person',
        loadChildren: () => import('./personal-data-person/personal-data-person.module').then(m => m.PersonalDataPersonPageModule)
    },
    {
        path: 'player-data-person',
        loadChildren: () => import('./player-data-person/player-data-person.module').then(m => m.PlayerDataPersonPageModule)
    },
    {
        path: 'reset-password-person',
        loadChildren: () => import('./reset-password-person/reset-password-person.module').then(m => m.ResetPasswordPersonPageModule)
    },
    {
        path: '**',
        component: PersonPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonPageRoutingModule { }

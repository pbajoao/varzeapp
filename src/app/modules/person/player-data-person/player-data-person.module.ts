import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlayerDataPersonPage } from './player-data-person.page';
import { RouterModule } from '@angular/router';
import { BtnBackComponentModule } from '@app/modules/shared-components/btn-back/btn-back.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtnBackComponentModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PlayerDataPersonPage }])
  ],
  declarations: [PlayerDataPersonPage]
})
export class PlayerDataPersonPageModule {}

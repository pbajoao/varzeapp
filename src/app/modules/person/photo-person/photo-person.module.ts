import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhotoPersonPage } from './photo-person.page';
import { RouterModule } from '@angular/router';
import { BtnBackComponentModule } from '@app/modules/shared-components/btn-back/btn-back.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtnBackComponentModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PhotoPersonPage }])
  ],
  declarations: [PhotoPersonPage]
})
export class PhotoPersonPageModule {}
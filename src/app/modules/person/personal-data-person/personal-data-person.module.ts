import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonalDataPersonPage } from './personal-data-person.page';
import { RouterModule } from '@angular/router';
import { BtnBackComponentModule } from '@app/modules/shared-components/btn-back/btn-back.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtnBackComponentModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PersonalDataPersonPage }])
  ],
  declarations: [PersonalDataPersonPage]
})
export class PersonalDataPersonPageModule {}

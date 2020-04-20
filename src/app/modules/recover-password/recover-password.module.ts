import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoverPasswordPage } from './recover-password.page';
import { RouterModule } from '@angular/router';
import { BtnBackComponentModule } from '../shared-components/btn-back/btn-back.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BtnBackComponentModule,
    RouterModule.forChild([{ path: '', component: RecoverPasswordPage }])
  ],
  declarations: [RecoverPasswordPage]
})
export class RecoverPasswordPageModule {}

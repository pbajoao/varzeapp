import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BtnBackComponent } from './btn-back.component';


@NgModule({
  imports: [ CommonModule, IonicModule],
  declarations: [BtnBackComponent],
  exports: [BtnBackComponent]
})
export class BtnBackComponentModule {}

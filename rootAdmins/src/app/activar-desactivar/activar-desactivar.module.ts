import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivarDesactivarPageRoutingModule } from './activar-desactivar-routing.module';

import { ActivarDesactivarPage } from './activar-desactivar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivarDesactivarPageRoutingModule
  ],
  declarations: [ActivarDesactivarPage]
})
export class ActivarDesactivarPageModule {}

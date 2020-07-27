import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfofraccionamientoPageRoutingModule } from './infofraccionamiento-routing.module';

import { InfofraccionamientoPage } from './infofraccionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfofraccionamientoPageRoutingModule
  ],
  declarations: [InfofraccionamientoPage]
})
export class InfofraccionamientoPageModule {}

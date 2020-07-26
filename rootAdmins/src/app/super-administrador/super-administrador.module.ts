import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperAdministradorPageRoutingModule } from './super-administrador-routing.module';

import { SuperAdministradorPage } from './super-administrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperAdministradorPageRoutingModule
  ],
  declarations: [SuperAdministradorPage]
})
export class SuperAdministradorPageModule {}

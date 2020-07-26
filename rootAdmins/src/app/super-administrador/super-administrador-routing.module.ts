import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperAdministradorPage } from './super-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: SuperAdministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdministradorPageRoutingModule {}

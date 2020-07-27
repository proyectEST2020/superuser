import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfofraccionamientoPage } from './infofraccionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: InfofraccionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfofraccionamientoPageRoutingModule {}

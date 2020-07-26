import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivarDesactivarPage } from './activar-desactivar.page';

const routes: Routes = [
  {
    path: '',
    component: ActivarDesactivarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivarDesactivarPageRoutingModule {}

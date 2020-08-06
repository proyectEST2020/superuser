import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) 
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'accesos',
    loadChildren: () => import('./accesos/accesos.module').then( m => m.AccesosPageModule)
  },
  {
    path: 'activar-desactivar',
    loadChildren: () => import('./activar-desactivar/activar-desactivar.module').then( m => m.ActivarDesactivarPageModule)
  },
  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule)
  },
  {
    path: 'super-administrador',
    loadChildren: () => import('./super-administrador/super-administrador.module').then( m => m.SuperAdministradorPageModule)
  },
  {
    path: 'infofraccionamiento/:id',
    loadChildren: () => import('./infofraccionamiento/infofraccionamiento.module').then( m => m.InfofraccionamientoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

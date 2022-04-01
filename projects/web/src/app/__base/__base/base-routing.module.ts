import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './../../_errors/error-404/error-404.component';

const routes: Routes = [
  {
    path: 'error',
    loadChildren: () => import('./../../_errors/__errors/errors.module')
    .then(m => m.ErrorsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./../../_authenticate/__authenticate/authenticate.module')
    .then(m => m.AuthenticateModule),
  },
  {
    path: '',
    loadChildren: () => import('./../../_master/__master/master.module')
    .then(m => m.MasterModule),
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }

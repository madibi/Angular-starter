import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './../_master/master.component';

const routes: Routes = [{
  path: '',
  component: MasterComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./../../main/__main/main.module')
      .then(m => m.MainModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

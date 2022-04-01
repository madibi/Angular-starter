import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './../_authenticate/authenticate.component';
import {RequestCodeComponent} from "../request-code/request-code.component";
import {VerifyCodeComponent} from "../verify-code/verify-code.component";


const routes: Routes = [{
  path: '',
  component: AuthenticateComponent,
  children: [
    {
      path: 'request-code',
      component: RequestCodeComponent,
    },
    {
      path: 'verify-code',
      component: VerifyCodeComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }

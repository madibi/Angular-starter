import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './../_main/main.component';
import { HomeComponent } from './../home/home.component';
import {WelcomeComponent} from "../welcome/welcome.component";

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'welcome',
      component: WelcomeComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

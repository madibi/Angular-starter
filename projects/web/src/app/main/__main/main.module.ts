import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment} from "./../../../environments/environment";
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './../_main/main.component';
import { HomeComponent } from './../home/home.component';
import { WelcomeComponent } from './../welcome/welcome.component';
import { MasterSharedModule } from './../../_master/__master/master-shared.module';
import {TranslateModule} from "@ngx-translate/core";
import {HostClassesModule} from "@web-commons/directives/host-classes/host-classes.module";
import {ButtonModule} from "@libs/components";
import {FormModule} from "@libs/components";
import {SelectLanguageModule} from "@web-commons/components/select-language/select-language.module";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    WelcomeComponent,
  ],
    imports: [
      CommonModule,
      MainRoutingModule,
      MasterSharedModule,
      TranslateModule,
      HostClassesModule,
      ButtonModule,
      FormModule,
      SelectLanguageModule,
      HostClassesModule,
    ],
  providers: []
})
export class MainModule { }

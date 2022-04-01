import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterSharedModule } from './master-shared.module';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './../_master/master.component';
import {TranslateModule} from "@ngx-translate/core";
import {HostClassesModule} from "@web-commons/directives/host-classes/host-classes.module";
import { LayoutTopMenuModule } from '@libs/layouts';
import {ButtonModule, LinkModule} from "@libs/components";

@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MasterRoutingModule,
    MasterSharedModule,
    MasterSharedModule,
    TranslateModule,
    HostClassesModule,
    LayoutTopMenuModule,
    ButtonModule,
    LinkModule
  ],
  providers: []
})
export class MasterModule { }

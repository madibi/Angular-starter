import { NgModule } from '@angular/core';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './../_authenticate/authenticate.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HostClassesModule} from "@web-commons/directives/host-classes/host-classes.module";
import {RequestCodeComponent} from "../request-code/request-code.component";
import {ButtonModule} from "@libs/components";
import {FormModule} from "@libs/components";
import {InputTextModule} from "projects/libs/components/src/lib/input-text";
import {VerifyCodeComponent} from "../verify-code/verify-code.component";
import {SelectCountryCodeModule} from "@web-commons/components/select-country-code/select-country-code.module";


@NgModule({
  declarations: [
    AuthenticateComponent,
    RequestCodeComponent,
    VerifyCodeComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        AuthenticateRoutingModule,
        HostClassesModule,
        ButtonModule,
        FormModule,
        InputTextModule,
        SelectCountryCodeModule
    ],
  providers: []
})
export class AuthenticateModule { }

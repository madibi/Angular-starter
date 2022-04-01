import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from "./../../../environments/environment";
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './../_base/base.component';
import { Error404Component } from './../../_errors/error-404/error-404.component';
import {AppInitializer} from "@web-commons/settings/app-initializer";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http'
import {StoreModule} from "@ngrx/store";
import {baseReducers, metaReducers} from "@web-commons/store/_base/_base.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "@web-commons/store/app/app.effect";
import {UserEffects} from "@web-commons/store/user/user.effect";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {StoreRouteCustomSerializer} from "@web-commons/helpers/store-route-custome-serilizer.helper";
import {BaseUrlInterceptor} from "@web-commons/interceptors/base-url.interceptor";
import {HeaderInterceptor} from "@web-commons/interceptors/header.interceptor";
import {LoaderInterceptor} from "@web-commons/interceptors/loader.interceptor";
import {CatchErrorInterceptor} from "@web-commons/interceptors/catch-error.interceptor";
import {ErrorHandlingService} from "@web-commons/services/error-handling/error-handling.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {EnumEffects} from "@web-commons/store/enum/enum.effect";

@NgModule({
  declarations: [
    BaseComponent,
    Error404Component
  ],
  imports: [
    AppInitializer,
    BrowserModule,
    BaseRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(baseReducers, {metaReducers}),
    EffectsModule.forRoot([
      AppEffects,
      UserEffects,
      EnumEffects,
    ]),
    // TODO: disable ngrx in product mode
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  ],
  providers: [
    Geolocation,
    ErrorHandlingService,
    { provide: 'BASE_API_URL', useValue: environment.serverUrl },
    { provide: RouterStateSerializer, useClass: StoreRouteCustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true },
  ],
  bootstrap: [BaseComponent]
})
export class BaseModule { }

export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient);
}

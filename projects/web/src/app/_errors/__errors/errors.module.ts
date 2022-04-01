import { NgModule } from '@angular/core';
import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './../_errors/errors.component';

@NgModule({
  declarations: [
    ErrorsComponent
  ],
  imports: [
    ErrorsRoutingModule
  ],
  providers: []
})
export class ErrorsModule { }

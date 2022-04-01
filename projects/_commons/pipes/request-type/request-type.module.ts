import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RequestTypePipe } from '@web-commons/pipes/request-type/request-type.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
    ],
  declarations: [ RequestTypePipe ],
  providers: [ ],
  exports: [ RequestTypePipe ]
})
export class RequestTypeModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDirective } from './form.directive';

@NgModule({
  declarations: [
    FormDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDirective
  ]
})
export class FormModule { }

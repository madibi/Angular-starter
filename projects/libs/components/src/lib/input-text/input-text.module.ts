import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextDirective } from './input-text.directive';

@NgModule({
  declarations: [
    InputTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextDirective
  ]
})
export class InputTextModule { }

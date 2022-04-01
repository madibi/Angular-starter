import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandComponent } from './expand.component';
import { PuUiExpandDirective } from './expand.directive';

@NgModule({
  declarations: [
    ExpandComponent,
    PuUiExpandDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandComponent,
    PuUiExpandDirective
  ]
})
export class ExpandModule { }

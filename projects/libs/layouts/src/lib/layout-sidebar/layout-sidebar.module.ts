import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSidebarComponent } from './layout-sidebar.component';

@NgModule({
  declarations: [
    LayoutSidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutSidebarComponent
  ]
})
export class LayoutSidebarModule { }

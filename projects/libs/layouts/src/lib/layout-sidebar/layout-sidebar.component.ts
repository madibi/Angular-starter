import { Component, Input, OnInit } from '@angular/core';
import { EMPTY_ARRAY, Menu } from '@libs/core';

@Component({
  selector: 'libs-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {

  @Input()
  menus: Menu[] = EMPTY_ARRAY;

  public isNarrow = false;

  constructor() { }

  toggleNarrow() {
    this.isNarrow = !this.isNarrow;
  }

  onExpandSubMenus() {

  }

  ngOnInit(): void {
  }

}

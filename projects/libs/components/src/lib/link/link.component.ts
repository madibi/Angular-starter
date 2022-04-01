import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'libs-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input()
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

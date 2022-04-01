import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'libs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  half: boolean = false;

  @Input()
  wide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

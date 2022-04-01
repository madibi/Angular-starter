import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[libs-input-text]',
})
export class InputTextDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add('libs-input-text');
  }

}

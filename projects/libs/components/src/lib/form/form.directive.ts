import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[libs-form]',
})
export class FormDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add('libs-form');
  }

}

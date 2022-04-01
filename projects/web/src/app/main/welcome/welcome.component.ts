import {Component, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }


  goBackHome() {
    this.router.navigateByUrl('/home').then();
  }

  ngOnInit(): void {
  }
}



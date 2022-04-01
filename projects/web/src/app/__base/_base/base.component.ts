import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "@web-commons/store/app/app.state";
import * as APP_ACTIONS from "@web-commons/store/app/app.action";

@Component({
  selector: 'app-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{
  route$;
  prevRute = null;

  constructor(
    private appState: Store<AppState>,
    public router: Router,
  ) {
    this.route$ = this.router.events.subscribe((event: any) => {
      if (event && event.url && event.url != this.prevRute) {
        this.prevRute = event.url;
        this.appState.dispatch(APP_ACTIONS.setCurrentPageName({
          pageName: event.url
        }));
      }
    });
  }

  ngOnInit(): void {
  }
}

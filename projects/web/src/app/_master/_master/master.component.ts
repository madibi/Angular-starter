import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {selectAppCurrentPage} from "@web-commons/store/app/app.selector";
import {Store} from "@ngrx/store";
import {AppState} from "@web-commons/store/app/app.state";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AppConfigService} from "@web-commons/services/app-config.service";
import {AuthenticateService} from "@web-commons/services/authenticate.service";
import { Menu } from '@libs/core';
import {EMPTY_ARRAY} from "projects/libs/core/src/lib/constants";

@Component({
  selector: 'master-component',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MasterComponent implements OnInit{

  currentPage$: Observable<string>;
  menus: Menu[] = EMPTY_ARRAY;

  constructor(
    private appState: Store<AppState>,
    public router: Router,
    public appConfigService: AppConfigService,
    public authenticateService: AuthenticateService,
  ) {
    this.currentPage$ = appState.select(selectAppCurrentPage);
  }

  ngOnInit(): void {
    // this.appConfigService.toggleAppTheme();
    this.menus = [
      {
        isActive: true,
        title: 'menu1',
        link: '',
        icon: '',
        subMenus: [
          {
            title: 'sub-menu1',
            link: '',
            icon: '',
          },
          {
            title: 'sub-menu2',
            link: '',
            icon: '',
            info: '3'
          },
          {
            title: 'sub-menu1',
            link: '',
            icon: '',
          }
        ]
      },
      {
        title: 'menu2',
        link: '',
        icon: '',
      },
      {
        title: 'menu3',
        link: '',
        icon: '',
        info: '3'
      },
      {
        title: 'menu4',
        link: '',
        icon: '',
      },
      {
        title: 'menu5',
        link: '',
        icon: '',
      }
    ];
  }
}

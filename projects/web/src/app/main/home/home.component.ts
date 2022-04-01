import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {selectEnumEnumOptionSample} from "@web-commons/store/enum/enum.selector";
import {Store} from "@ngrx/store";
import {EnumState} from "@web-commons/store/enum/enum.state";
import {Observable} from "rxjs";
import {Option} from "@web-commons/schema/enum/dto/option.dto";
import * as AppActions from "@web-commons/store/app/app.action";
import {AppState} from "@web-commons/store/app/app.state";
import {AppTheme} from "@web-commons/schema/app/enum/app-theme.enum";
import {selectAppTheme} from "@web-commons/store/app/app.selector";
import {AppConfigService} from "@web-commons/services/app-config.service";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public enumOptionSamples$: Observable<Option[]> = undefined!;
  public appTheme$: Observable<AppTheme> = undefined!;
  public AppTheme = AppTheme;

  constructor(
    private router: Router,
    private appState: Store<AppState>,
    private enumState: Store<EnumState>,
    private appConfigService: AppConfigService,
  ) {
    this.enumOptionSamples$ = enumState.select(selectEnumEnumOptionSample);
    this.appTheme$ = enumState.select(selectAppTheme);
  }

  loginByAppSms() {
    this.router.navigateByUrl('/auth/request-code').then();
  }

  loginByFirebaseSms() {
    this.router.navigate(['/auth/request-code'], {queryParams: { 'sms-type': 'firebase' }}).then();
  }

  toggleAppTheme(appTheme: AppTheme) {
    if (appTheme === AppTheme.DARK) {
      this.appConfigService.changeThemeToDark();
    }
    if (appTheme === AppTheme.LIGHT) {
      this.appConfigService.changeThemeToLight();
    }
  }

  ngOnInit(): void {
  }
}



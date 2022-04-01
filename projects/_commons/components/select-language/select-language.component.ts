import {Component, OnInit} from '@angular/core';
import * as App_Actions from '@web-commons/store/app/app.action';
import {AppState} from "@web-commons/store/app/app.state";
import {Store} from "@ngrx/store";
import {selectAppConfiguration, selectAppLanguage} from "@web-commons/store/app/app.selector";
import {Language} from "@web-commons/schema/enum/entity/language.entity";
import {take} from "rxjs/operators";
import {EnumState} from "@web-commons/store/enum/enum.state";
import {environment} from './../../../web/src/environments/environment';
import {selectEnumLanguages} from "@web-commons/store/enum/enum.selector";

@Component({
  selector: 'select-language-component',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit {

  public languages: Language[] = [];
  public currentLanguageId: string = '';
  env = environment;

  constructor(
    private appState: Store<AppState>,
    private enumState: Store<EnumState>,
  ) {
    appState.select(selectAppLanguage).subscribe(
      (value) => {
        if (!this.currentLanguageId && value) {
          this.currentLanguageId = value.id.toString();
        }
      }
    );
    enumState.select(selectEnumLanguages).subscribe(
      (value) => {
        this.languages = value;
       }
    );
  }

  changeAppLanguage(language: Language) {
    this.appState.select(selectAppConfiguration).pipe(take(1)).subscribe((cfg) => {
      const newCfg = {
        ...cfg,
        language
      };
      this.appState.dispatch(App_Actions.changeAppConfiguration(
        newCfg));
    });
  }

  ngOnInit(): void {
  }
}



import {Inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as Enum_Actions from '@web-commons/store/enum/enum.action';
import * as App_Actions from '@web-commons/store/app/app.action';
import {exhaustMap, map, tap} from 'rxjs/operators';
import {BrowserStorageService} from '@web-commons/services/browser-storage.service';
import {DOCUMENT} from '@angular/common';
import {Response} from '@web-commons/schema/common/model/response.model';
import {EnumService} from '@web-commons/store/enum/enum.service';
import {EnumInfo} from "@web-commons/schema/enum/dto/enum-info.dto";

@Injectable()
export class EnumEffects {

  getEnums$ = createEffect(() => this.actions.pipe(
    ofType(Enum_Actions.getEnums),
      exhaustMap((props) => this.enumService.enums(props.languageId)
        .pipe(map((res: Response<EnumInfo>) => {
          if (res.header.methodInfo.status) {
            return Enum_Actions.updateEnums({enumInfo: res.body});
          }
          else {
            return App_Actions.httpResponseFail({message: 'EnumEffects, getEnums$, response error'});
          }
        })))
    ));


  constructor(
    private actions: Actions,
    private browserStorageService: BrowserStorageService,
    private enumService: EnumService,
    @Inject(DOCUMENT) private document: Document,
  ) { }

}

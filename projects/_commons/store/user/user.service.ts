import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestCodeRQ} from '@web-commons/schema/user/dto/request-code-rq.dto';
import {Response} from '@web-commons/schema/common/model/response.model';
import {RequestCodeRS} from '@web-commons/schema/user/dto/request-code-rs.dto';
import {VerifyCodeRQ} from '@web-commons/schema/user/dto/verify-code-rq.dto';
import {VerifyCodeRS} from '@web-commons/schema/user/dto/verify-code-rs.dto';
import {Token} from '@web-commons/schema/user/dto/token.dto';
import {UserPrivate} from '@web-commons/schema/user/dto/user-private.dto';
import {UserInfo} from '@web-commons/schema/user/dto/user-info.dto';
import {CrudType} from '@web-commons/schema/common/enum/crud-type.enum';
import {Folder} from '@web-commons/schema/user/entity/folder.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  requestCode(requestCodeRQ: RequestCodeRQ): Observable<Response<RequestCodeRS>> {
    return this.httpClient.post<Response<RequestCodeRS>>('v1/auth/requestCode', requestCodeRQ);
  }

  verifyCode(verifyCodeRQ: VerifyCodeRQ):
    Observable<Response<VerifyCodeRS>> {
    return this.httpClient.post<Response<VerifyCodeRS>>('v1/auth/verifyCode', verifyCodeRQ);
  }

  submitUserProfile(type: 'PROFILE' | 'RESUME', formData: FormData): Observable<Response<UserInfo<UserPrivate, any>>> {
    const url = `v1/user/users/owner/update/${type}`;
    return this.httpClient.post<Response<UserInfo<UserPrivate, any>>>(url, formData, {
      reportProgress: true
    });
  }
}

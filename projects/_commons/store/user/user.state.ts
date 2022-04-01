import {AuthInfo} from '@web-commons/schema/user/model/auth-info.model';
import {UserInfo} from '@web-commons/schema/user/dto/user-info.dto';
import {UserPrivate} from '@web-commons/schema/user/dto/user-private.dto';
import {Role} from '@web-commons/schema/user/enum/role.enum';

export interface UserState {
  authInfo: AuthInfo;
  userInfo: UserInfo<UserPrivate, Role>;
  accessToken: string;
  refreshToken: string;
  isProfileFormEnable: boolean;
  isCompanyInfoFormEnable: boolean;
}

import {Role} from "@web-commons/schema/enum/entity/role.entity";
import {Options} from "./options.dto";
import {Language} from "@web-commons/schema/enum/entity/language.entity";

export interface EnumInfo {
  options: Options;
  roles: Role[];
  languages: Language[];
}

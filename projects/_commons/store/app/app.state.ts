
import {Configuration} from '@web-commons/schema/app/dto/configuration.dto';

export interface AppState {
  configuration: Configuration;
  rules: string;
  pageHeader: string;
  isNotAlive: boolean;
  backDestination: string;
  isBackTransparent: boolean;
  goToTop: boolean;
  goToBottom: boolean;
  currentPage: string;
}

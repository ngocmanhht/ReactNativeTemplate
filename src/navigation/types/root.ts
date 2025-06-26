import { appScreens } from '../../const/app-screens';
import { AuthenticatedParamList } from './authenticated';
import { AuthenticationParamList } from './authentication';

export type RootNavigatorParamList = {
  [appScreens.Authentication]: undefined;
  [appScreens.Authenticated]: undefined;
} & AuthenticationParamList &
  AuthenticatedParamList;

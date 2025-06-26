import { createStackNavigator } from '@react-navigation/stack';
import { appScreens } from '../../const/app-screens';
import { BottomTabNavigator } from './bottom-tab-navigator';
import { AuthenticatedParamList } from '../types/authenticated';

const AuthenticatedStack = createStackNavigator<AuthenticatedParamList>();

export const AuthenticatedNavigator = () => {
  return (
    <AuthenticatedStack.Navigator initialRouteName={appScreens.BottomTab}>
      <AuthenticatedStack.Screen
        name={appScreens.BottomTab}
        component={BottomTabNavigator}
      />
    </AuthenticatedStack.Navigator>
  );
};

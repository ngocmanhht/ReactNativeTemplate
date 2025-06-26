import { Text, View } from 'react-native';
import React from 'react';
import { useStores } from '../../stores/store-context';
import { User } from '../../model/user';
import { useCustomNavigation } from '../../hooks/use-custom-navigation';
import { appScreens } from '../../const/app-screens';
import { RootNavigatorParamList } from '../../navigation/types/root';

export const LoginScreen = () => {
  const sessionStore = useStores().sessionStore;

  const navigation = useCustomNavigation<RootNavigatorParamList>();

  const handleLogin = async () => {
    const user: User = {
      id: '123',
      name: '',
      email: '',
      isActive: false,
    };
    await sessionStore.setUser(user);
    navigation.reset({
      index: 0,
      routes: [{ name: appScreens.Authenticated as never }],
    });
  };
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

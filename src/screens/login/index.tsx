import { Text, View } from 'react-native';
import React from 'react';
import { useStores } from '../../stores/store-context';
import { User } from '../../model/user';

export const LoginScreen = () => {
  const sessionStore = useStores().sessionStore;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogin = () => {
    const user: User = {
      id: '123',
      name: '',
      email: '',
      isActive: false,
    };
    sessionStore.setUser(user);
  };
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

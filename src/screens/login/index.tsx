import { Text, View } from 'react-native';
import React from 'react';
import { useStores } from '../../stores/store-context';
import { User } from '../../model/user';
import { useCustomNavigation } from '../../hooks/use-custom-navigation';
import { appScreens } from '../../const/app-screens';
import { RootNavigatorParamList } from '../../navigation/types/root';
import * as yup from 'yup';
import { FormBuilder, FormField } from '../../components/form-builder';

export const LoginScreen = () => {
  const sessionStore = useStores().sessionStore;

  const navigation = useCustomNavigation<RootNavigatorParamList>();

  type MyForm = {
    email: string;
    password: string;
  };

  const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(6).required('Password is required'),
  });

  const fields: FormField<MyForm>[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
    },
  ];
  const onSubmit = (data: MyForm) => {
    console.log('✅ Form data:', data);
  };

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
      <FormBuilder<MyForm>
        fields={fields}
        schema={schema}
        onSubmit={onSubmit}
      />
    </View>
  );
};

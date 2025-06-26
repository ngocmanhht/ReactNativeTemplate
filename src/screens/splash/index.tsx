import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useCustomNavigation } from '../../hooks/use-custom-navigation';
import { AuthenticationParamList } from '../../navigation/types/authentication';
import { appScreens } from '../../const/app-screens';
import { RootNavigatorParamList } from '../../navigation/types/root';

const SplashScreen = () => {
  const navigation = useCustomNavigation<RootNavigatorParamList>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(appScreens.Authenticated);
    }, 1000);
  }, [navigation]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});

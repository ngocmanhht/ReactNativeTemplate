/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { StoreContext } from './src/stores/store-context';
import { rootStore } from './src/stores/root-store';
import { LoginScreen } from './src/screens/login';
import { observer } from 'mobx-react';

const App = observer(() => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreContext.Provider value={rootStore}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <LoginScreen />
      </View>
    </StoreContext.Provider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

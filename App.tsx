/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { StoreContext } from './src/stores/store-context';
import { rootStore } from './src/stores/root-store';
import { observer } from 'mobx-react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from './src/navigation/root-navigator';
import { NavigationContainer } from '@react-navigation/native';
import { navigationService } from './src/navigation/navigation-service';

const App = observer(() => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreContext.Provider value={rootStore}>
      <GestureHandlerRootView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer ref={navigationService.navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </StoreContext.Provider>
  );
});

export default App;

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
import AppLoadingIndicator from './src/components/app-loading-indicator';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services/query-client';

const App = observer(() => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreContext.Provider value={rootStore}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer ref={navigationService.navigationRef}>
            <RootNavigator />
          </NavigationContainer>
          <AppLoadingIndicator />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </StoreContext.Provider>
  );
});

export default App;

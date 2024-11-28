import { useCallback } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalLoader } from '_molecules';
import { HeaderMain } from '_organisms';
import Player from '_scenes/HomeFlow/Player/Player.component';
import AddToPlaylist from '_scenes/LibraryFlow/AddToPlaylist/AddToPlaylist.component';
import Welcome from '_scenes/Welcome/Welcome.component';
import { useAuthStore } from '_stores/authStore';
import { IThemeProviders, themes } from '_styles/theming';

import Scenes from './Scenes';
import StackNames from './StackNames';
import AuthenticationStack from './Stacks/AuthenticationStack';
import BottomNavBarStack from './Stacks/BottomNavBarStack';
import SplashStack from './Stacks/SplashStack';

const MainStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  const { isInitializedAfter } = useAuthStore();

  // useExpoNotification();

  const getHeader = useCallback(() => {
    return <HeaderMain />;
  }, []);

  return (
    <IThemeProviders theme={themes.dark}>
      <GlobalLoader />
      <MainStackNavigator.Navigator
        initialRouteName={isInitializedAfter ? Scenes.welcome : StackNames.splashStack}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        {isInitializedAfter ? (
          <>
            <MainStackNavigator.Screen name={Scenes.welcome} component={Welcome} />
            <MainStackNavigator.Screen
              name={StackNames.bottomNavBarStack}
              component={BottomNavBarStack}
            />
            <MainStackNavigator.Screen
              name={StackNames.authenticationStack}
              component={AuthenticationStack}
            />
            <MainStackNavigator.Screen
              name={Scenes.addToPlaylist}
              component={AddToPlaylist}
              options={{
                animation: 'slide_from_bottom',
                gestureDirection: 'vertical',
                header: getHeader,
                headerShown: true,
              }}
            />
            <MainStackNavigator.Screen
              name={Scenes.player}
              component={Player}
              options={{
                animation: 'slide_from_bottom',
                gestureDirection: 'vertical',
                header: getHeader,
                headerShown: true,
              }}
            />
          </>
        ) : (
          <MainStackNavigator.Screen name={StackNames.splashStack} component={SplashStack} />
        )}
      </MainStackNavigator.Navigator>
    </IThemeProviders>
  );
};

export default AppNavigator;

import { useCallback } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalLoader } from '_molecules';
import { HeaderMain } from '_organisms';
import { useAuthStore } from '_stores/authStore';
import { IThemeProviders, themes } from '_styles/theming';

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
        initialRouteName={
          isInitializedAfter ? StackNames.bottomNavBarStack : StackNames.splashStack
        }
        screenOptions={{
          gestureEnabled: true,
          headerShown: true,
          header: getHeader,
          animation: 'slide_from_right',
        }}>
        {isInitializedAfter ? (
          <>
            <MainStackNavigator.Screen
              name={StackNames.bottomNavBarStack}
              component={BottomNavBarStack}
            />
            <MainStackNavigator.Screen
              name={StackNames.authenticationStack}
              component={AuthenticationStack}
            />
          </>
        ) : (
          <MainStackNavigator.Screen
            name={StackNames.splashStack}
            component={SplashStack}
            options={{
              headerShown: false,
            }}
          />
        )}
      </MainStackNavigator.Navigator>
    </IThemeProviders>
  );
};

export default AppNavigator;

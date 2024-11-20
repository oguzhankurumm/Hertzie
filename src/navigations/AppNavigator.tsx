import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalLoader } from '_molecules';
import Messages from '_scenes/MessagesFlow/Messages/Messages.component';
import { useAuthStore } from '_stores/authStore';
import { IThemeProviders, themes, useTheme } from '_styles/theming';

import Scenes from './Scenes';
import StackNames from './StackNames';
import AuthenticationStack from './Stacks/AuthenticationStack';
import BottomNavBarStack from './Stacks/BottomNavBarStack';
import SplashStack from './Stacks/SplashStack';

const MainStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  const { isInitializedAfter } = useAuthStore();
  const theme = useTheme();

  // useExpoNotification();
  return (
    <IThemeProviders theme={themes.dark}>
      <GlobalLoader />
      <MainStackNavigator.Navigator
        initialRouteName={
          isInitializedAfter ? StackNames.bottomNavBarStack : StackNames.splashStack
        }
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
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
            <MainStackNavigator.Screen
              name={Scenes.eventChat}
              component={Messages}
              options={{
                headerShown: true,
                headerBackTitleVisible: false,
                headerTitle: '',
                headerTintColor: theme?.gray[900],
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: 'white',
                },
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

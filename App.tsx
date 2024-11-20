/* eslint-disable react-native/no-inline-styles */

/* eslint-disable react/no-unstable-nested-components */
import { I18nextProvider } from 'react-i18next';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { MD2DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast, { BaseToast, ErrorToast, InfoToast } from 'react-native-toast-message';

import { PortalProvider } from '@gorhom/portal';
import {
  DarkTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';

import useAssets from '_hooks/useAssets';
import i18next from '_locales/i18n';
import AppNavigator from '_navigations/AppNavigator';
import NavigationServices from '_navigations/NavigationServices';
import globalStyles from '_styles/globalStyles';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { TextStyle } from '_styles/typography';
import { queryClient } from '_utils/reactQueryClient';

// enable React-tron in DEV mode only.
if (__DEV__) {
  require('./reactotron-config');
}

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews']);

const App = () => {
  const theme = useTheme();
  const isAssetsLoaded = useAssets();
  const navigationRef = useNavigationContainerRef();

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ borderLeftWidth: 0, backgroundColor: theme?.success[500] }}
        text1Style={{
          ...TextStyle.body,
          color: theme?.white,
        }}
        text2Style={{
          ...TextStyle.body400,
          color: theme?.white,
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{ borderLeftWidth: 0, backgroundColor: theme?.danger[500] }}
        text1Style={{
          ...TextStyle.body,
          color: theme?.white,
        }}
        text2Style={{
          ...TextStyle.body400,
          color: theme?.white,
        }}
      />
    ),
    info: (props: any) => (
      <InfoToast
        {...props}
        style={{ borderLeftWidth: 0, backgroundColor: theme?.info[500] }}
        text1Style={{
          ...TextStyle.body,
          color: theme?.white,
        }}
        text2Style={{
          ...TextStyle.body400,
          color: theme?.white,
        }}
      />
    ),
  };

  return (
    isAssetsLoaded && (
      <RootSiblingParent>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18next}>
            <GestureHandlerRootView style={globalStyles(theme).flexOne}>
              <StatusBar style={'light' as StatusBarStyle} />
              <SafeAreaProvider>
                <NavigationContainer
                  theme={DarkTheme}
                  ref={navigatorRef => {
                    navigationRef.current = navigatorRef;
                    NavigationServices.setTopLevelNavigator(navigatorRef);
                  }}>
                  <PaperProvider theme={DefaultTheme}>
                    <PortalProvider>
                      <AppNavigator />
                    </PortalProvider>
                  </PaperProvider>
                </NavigationContainer>
              </SafeAreaProvider>
            </GestureHandlerRootView>
          </I18nextProvider>
        </QueryClientProvider>
        <Toast position='top' topOffset={verticalScale(56)} config={toastConfig} />
      </RootSiblingParent>
    )
  );
};

export default App;

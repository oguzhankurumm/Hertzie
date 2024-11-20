import { ComponentType, useCallback, useMemo } from 'react';
import { Image, Platform, Pressable } from 'react-native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import * as Device from 'expo-device';

import iconsObject from '_assets/icons/iconsObject';
import { FloatingPlayer } from '_molecules';
import StackNames from '_navigations/StackNames';
import { HeaderMain } from '_organisms';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles, { getStyleByStatus } from './BottomNavBarStackNavigator.style';
import HomeStack from './HomeStack';
import SettingsStack from './SettingsStack';

const BottomNavBarStackNavigator = createBottomTabNavigator();

type ScreenConfig = {
  name: keyof typeof StackNames;
  iconName: keyof typeof iconsObject;
  component: ComponentType<any>;
  headerShown: boolean;
  testId: string;
  tabBarButton?: BottomTabNavigationOptions['tabBarButton'];
};

const BottomNavBarStack = () => {
  const theme = useTheme();

  const { floatingPlayerStyle } = useMemo(() => styles(theme), [theme]);

  const getHeader = useCallback(() => {
    return <HeaderMain />;
  }, []);

  // Function to render the icon for each tab
  const renderTabIcon = useCallback(
    (iconName: keyof typeof iconsObject, focused: boolean) => (
      <Image
        style={getStyleByStatus({ theme, focused })?.iconStyle}
        source={iconsObject[iconName]}
        resizeMode='contain'
      />
    ),
    [theme]
  );

  const isTablet = Device.DeviceType.TABLET;

  // Common screen options for all tabs
  const screenOptions = useMemo(
    () => ({
      headerTintColor: theme?.gray2,
      headerShadowVisible: false,
      lazy: true,
      tabBarHideOnKeyboard: false,
      tabBarActiveTintColor: theme?.purple,
      tabBarInactiveTintColor: theme?.gray2,
      tabBarItemStyle: {
        height: isTablet ? verticalScale(70) : verticalScale(60),
      },
      tabBarStyle: {
        backgroundColor: theme?.tabBackground,
        borderTopColor: 'transparent',
        height: Platform.OS === 'android' ? verticalScale(65) : verticalScale(85),
        paddingHorizontal: scale(24),
      },
    }),
    [theme?.purple, theme?.gray2, theme?.tabBackground, isTablet]
  );

  // Array of screen configurations with icon names strictly typed

  const screens: ScreenConfig[] = [
    {
      name: StackNames.searchStack,
      iconName: 'search',
      component: HomeStack,
      headerShown: true,
      testId: 'search-bottom-nav',
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarButton: ({ to, onPress, onLongPress, ...rest }) => (
        <Pressable
          {...rest}
          onPress={e => {
            if (onPress) onPress(e);
          }}
        />
      ),
    },
    {
      name: StackNames.libraryStack,
      iconName: 'library',
      component: HomeStack,
      headerShown: true,
      testId: 'library-bottom-nav',
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarButton: ({ to, onPress, onLongPress, ...rest }) => (
        <Pressable
          {...rest}
          onPress={e => {
            if (onPress) onPress(e);
          }}
        />
      ),
    },
    {
      name: StackNames.homeStack,
      iconName: 'home',
      component: HomeStack,
      headerShown: true,
      testId: 'home-bottom-nav',
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarButton: ({ to, onPress, onLongPress, ...rest }) => (
        <Pressable
          {...rest}
          onPress={e => {
            if (onPress) onPress(e);
          }}
        />
      ),
    },
    {
      name: StackNames.radioStack,
      iconName: 'radio',
      component: HomeStack,
      headerShown: true,
      testId: 'radio-bottom-nav',
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarButton: ({ to, onPress, onLongPress, ...rest }) => (
        <Pressable
          {...rest}
          onPress={e => {
            if (onPress) onPress(e);
          }}
        />
      ),
    },
    {
      name: StackNames.settingsStack,
      iconName: 'settings',
      headerShown: false,
      component: SettingsStack,
      testId: 'settings-bottom-nav',
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarButton: ({ to, onPress, onLongPress, ...rest }) => (
        <Pressable
          {...rest}
          onPress={e => {
            if (onPress) onPress(e);
          }}
        />
      ),
    },
  ];

  return (
    <>
      <BottomNavBarStackNavigator.Navigator
        initialRouteName={StackNames.homeStack}
        screenOptions={screenOptions}>
        {screens.map(({ name, iconName, component, tabBarButton, headerShown, testId }) => (
          <BottomNavBarStackNavigator.Screen
            key={name}
            {...getAutomationTestingProp(testId)}
            name={name}
            options={{
              tabBarIcon: ({ focused }) => renderTabIcon(iconName, focused),
              tabBarButton,
              tabBarShowLabel: false,
              headerShown,
              header: getHeader,
              lazy: false,
            }}
            component={component}
          />
        ))}
      </BottomNavBarStackNavigator.Navigator>
      <FloatingPlayer overrideContainerStyle={floatingPlayerStyle} />
    </>
  );
};

export default BottomNavBarStack;

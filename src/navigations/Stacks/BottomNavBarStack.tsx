import { ComponentType, useCallback, useMemo } from 'react';
import { Image, Pressable } from 'react-native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import iconsObject from '_assets/icons/iconsObject';
import Scenes from '_navigations/Scenes';
import StackNames from '_navigations/StackNames';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import { getStyleByStatus } from './BottomNavBarStackNavigator.style';
import HomeStack from './HomeStack';

const BottomNavBarStackNavigator = createBottomTabNavigator();

type ScreenConfig = {
  name: keyof typeof StackNames;
  iconName: keyof typeof iconsObject;
  component: ComponentType<any>;
  testId: string;
  tabBarButton?: BottomTabNavigationOptions['tabBarButton'];
};

const BottomNavBarStack = () => {
  const theme = useTheme();

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

  // Common screen options for all tabs
  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      headerTintColor: theme?.white,
      headerShadowVisible: false,
      lazy: true,
      tabBarHideOnKeyboard: false,
      tabBarActiveTintColor: theme?.gray[400],
      tabBarInactiveTintColor: theme?.gray[600],
      tabBarItemStyle: {
        paddingTop: verticalScale(6),
        paddingBottom: verticalScale(6),
        height: verticalScale(72),
      },
      tabBarStyle: {
        backgroundColor: theme?.white,
        borderTopColor: 'transparent',
        height: verticalScale(72),
        paddingHorizontal: scale(14),
        position: 'absolute',
        bottom: verticalScale(32),
        right: scale(64),
        left: scale(64),
        borderRadius: scale(100),
        shadowColor: theme?.black,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },
    }),
    [theme?.black, theme?.white, theme?.gray]
  );

  // Array of screen configurations with icon names strictly typed

  const screens: ScreenConfig[] = [
    {
      name: StackNames.homeStack,
      iconName: 'homeFilled',
      component: HomeStack,
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
      name: StackNames.searchStack,
      iconName: 'search',
      component: HomeStack,
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
      name: StackNames.messagesStack,
      iconName: 'message',
      component: HomeStack,
      testId: 'messages-bottom-nav',
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
    <BottomNavBarStackNavigator.Navigator
      initialRouteName={Scenes.home}
      screenOptions={screenOptions}>
      {screens.map(({ name, iconName, component, tabBarButton, testId }) => (
        <BottomNavBarStackNavigator.Screen
          key={name}
          {...getAutomationTestingProp(testId)}
          name={name}
          options={{
            tabBarIcon: ({ focused }) => renderTabIcon(iconName, focused),
            tabBarButton,
            tabBarShowLabel: false,
            headerShown: false,
          }}
          component={component}
        />
      ))}
    </BottomNavBarStackNavigator.Navigator>
  );
};

export default BottomNavBarStack;

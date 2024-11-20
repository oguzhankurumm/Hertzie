import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const BottomNavBarStackNavigatorStyles = (_theme: ThemeType) =>
  StyleSheet.create({
    iconDefaultStyle: {
      width: scale(24),
      height: scale(24),
    },
    floatingPlayerStyle: {
      position: 'absolute',
      bottom: verticalScale(85),
      left: 0,
      right: 0,
      zIndex: 100,
    },
  });

export const getStyleByStatus = ({ theme, focused }: { theme: ThemeType; focused: boolean }) => {
  return StyleSheet.create({
    iconStyle: {
      ...BottomNavBarStackNavigatorStyles(theme).iconDefaultStyle,
      tintColor: focused ? theme?.purple : theme?.gray2,
    },
  });
};

export default BottomNavBarStackNavigatorStyles;

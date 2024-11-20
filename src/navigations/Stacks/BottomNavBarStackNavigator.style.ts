import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const BottomNavBarStackNavigatorStyles = (_theme: ThemeType) =>
  StyleSheet.create({
    iconDefaultStyle: {
      width: scale(24),
      height: scale(24),
    },
  });

export const getStyleByStatus = ({ theme, focused }: { theme: ThemeType; focused: boolean }) => {
  return StyleSheet.create({
    iconStyle: {
      ...BottomNavBarStackNavigatorStyles(theme).iconDefaultStyle,
      tintColor: focused ? theme?.gray[900] : theme?.gray[400],
    },
  });
};

export default BottomNavBarStackNavigatorStyles;

import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const FloatingPlayerStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme?.black,
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(24),
    },
    trackTitleContainer: {
      flex: 1,
      overflow: 'hidden',
    },
    controlsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: scale(12),
    },
    controlIcon: {
      width: scale(14),
      height: scale(14),
      tintColor: theme?.gray2,
    },
    controlPlayPauseButton: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(24),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: scale(2),
      borderColor: theme?.purple,
    },
    controlPlayPauseIcon: {
      width: scale(20),
      height: scale(20),
      tintColor: theme?.gray2,
    },
  });

export const getStyleByStatus = (theme: ThemeType, active: boolean) => {
  const { controlIcon } = FloatingPlayerStyles(theme);

  return StyleSheet.create({
    controlIcon: {
      ...controlIcon,
      tintColor: active ? theme?.purple : theme?.gray2,
    },
  });
};

export default FloatingPlayerStyles;

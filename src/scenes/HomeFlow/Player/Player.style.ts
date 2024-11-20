import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const PlayerStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: scale(32),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    artworkStyle: {
      width: scale(320),
      height: scale(320),
      borderRadius: scale(8),
      borderWidth: scale(2),
      borderColor: theme?.purple,
      marginTop: verticalScale(24),
    },
    songInfoContainer: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    songDetailsContainer: {
      flex: 1,
      marginEnd: scale(28),
      gap: verticalScale(4),
    },
    songInfoContainerRight: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: scale(8),
    },
    songInfoIcon: {
      width: scale(24),
      height: scale(24),
      tintColor: theme?.gray2,
    },
    controlsContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: verticalScale(16),
      marginBottom: verticalScale(32),
      paddingHorizontal: scale(12),
    },
    controlIcon: {
      width: scale(32),
      height: scale(32),
      tintColor: theme?.gray2,
    },
    controlPlayPauseButton: {
      width: scale(72),
      height: scale(72),
      borderRadius: scale(36),
      backgroundColor: theme?.purple,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    headerTextContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerIcon: {
      width: scale(24),
      height: scale(24),
    },
  });

export const getStyleByStatus = (theme: ThemeType, active: boolean) => {
  const { controlIcon } = PlayerStyles(theme);

  return StyleSheet.create({
    controlIcon: {
      ...controlIcon,
      tintColor: active ? theme?.purple : theme?.gray2,
    },
  });
};

export default PlayerStyles;

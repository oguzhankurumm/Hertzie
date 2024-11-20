import { Platform, StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const HeaderNavSyles = (theme: ThemeType, safeAreaInsets: EdgeInsets) => {
  const safeAreaTop = safeAreaInsets?.top || 0;

  return StyleSheet.create({
    mainContainerStyle: {
      backgroundColor: theme?.gray[100],
    },
    containerStyle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: scale(8),
      backgroundColor: theme?.gray[100],
      gap: scale(8),
      ...Platform.select({
        android: {
          paddingTop: safeAreaTop + verticalScale(10),
        },
        ios: {},
      }),
    },
    logoStyle: {
      height: scale(32),
      width: scale(135),
    },
    rightContainer: {
      flexDirection: 'row',
      gap: scale(8),
    },
    iconContainer: {
      width: scale(48),
      height: scale(48),
      backgroundColor: theme?.gray[200],
      gap: scale(8),
      padding: scale(12),
      borderRadius: scale(24),
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconStyle: {
      width: scale(24),
      height: scale(24),
    },
  });
};

export default HeaderNavSyles;

import { Platform, StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const HeaderMainSyles = (theme: ThemeType) => {
  return StyleSheet.create({
    mainContainerStyle: {
      backgroundColor: theme?.tabBackground,
      ...Platform.select({
        android: {
          paddingTop: verticalScale(42),
        },
      }),
    },
    containerStyle: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme?.tabBackground,
      marginTop: verticalScale(-12),
    },
    logoContainer: {
      width: scale(70),
      height: scale(70),
      backgroundColor: theme?.tabBackground,
      borderRadius: 100,
      top: verticalScale(12),
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoStyle: {
      height: scale(53),
      width: scale(53),
    },
  });
};

export default HeaderMainSyles;

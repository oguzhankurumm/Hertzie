import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(8),
      borderRadius: scale(8),
      paddingHorizontal: scale(16),
      paddingVertical: verticalScale(8),
      backgroundColor: 'transparent',
    },
    redirectTextStyle: {
      color: theme?.white,
    },
    iconStyle: {
      height: scale(16),
      width: scale(16),
      tintColor: theme?.gray[400],
    },
  });

export default styles;

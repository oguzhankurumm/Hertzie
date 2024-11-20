import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType, disabled: boolean) =>
  StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      backgroundColor: disabled ? theme?.gray[600] : theme?.gray[900],
      borderRadius: scale(100),
      paddingHorizontal: scale(16),
      paddingVertical: verticalScale(12),
      justifyContent: 'center',
      alignItems: 'center',
    },
    gap: {
      gap: scale(8),
    },
    textStyle: {
      color: disabled ? theme?.gray[200] : theme?.white,
    },
  });

export default styles;

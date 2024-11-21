import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType, disabled: boolean) =>
  StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      backgroundColor: disabled ? theme?.gray[600] : 'transparent',
      borderWidth: scale(2),
      borderColor: disabled ? theme?.gray[600] : theme?.purple,
      borderRadius: scale(100),
      paddingHorizontal: scale(20),
      paddingVertical: verticalScale(16),
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

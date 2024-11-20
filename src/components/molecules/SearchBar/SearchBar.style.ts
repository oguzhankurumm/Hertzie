import { Platform, StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainer: {
      flex: 1,
      ...Platform.select({
        android: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      }),
      backgroundColor: theme?.background[800],
      borderRadius: scale(4),
    },
    inputStyle: {
      ...TextStyle.bodyRegular,
      backgroundColor: theme?.background[800],
      marginRight: scale(8),
      height: verticalScale(24),
    },
    iconStyle: {
      height: scale(12),
      width: scale(12),
      tintColor: theme?.gray[400],
      right: scale(8),
    },
    closeButton: {
      width: scale(26),
      height: scale(26),
      borderRadius: scale(4),
      backgroundColor: theme?.background[800],
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: scale(8),
    },
  });

export default styles;

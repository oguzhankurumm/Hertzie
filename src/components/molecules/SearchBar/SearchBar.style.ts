import { Platform, StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
    },
    inputContainer: {
      flex: 1,
      ...Platform.select({
        android: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      }),
      backgroundColor: 'transparent',
      borderRadius: scale(8),
    },
    inputStyle: {
      ...TextStyle.extraBold11,
      backgroundColor: 'transparent',
      height: verticalScale(32),
    },
    iconStyle: {
      height: scale(16),
      width: scale(16),
      tintColor: theme?.gray6,
      left: scale(8),
    },
    closeButton: {
      width: scale(26),
      height: scale(26),
      borderRadius: scale(6),
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButton: {
      width: scale(32),
      height: scale(32),
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(6),
      borderWidth: scale(1),
      borderColor: theme?.gray6,
    },
    iconButtonImage: {
      height: scale(16),
      width: scale(16),
      tintColor: theme?.gray6,
    },
    iconButtonImage20: {
      height: scale(20),
      width: scale(20),
      tintColor: theme?.gray6,
    },
  });

export default styles;

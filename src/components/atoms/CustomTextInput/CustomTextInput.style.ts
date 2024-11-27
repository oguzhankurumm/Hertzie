import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    inputContainer: {
      height: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: scale(6),
      borderWidth: scale(1),
      borderColor: theme?.gray6,
    },
    errorStyle: {
      borderColor: theme?.danger[400],
    },
    inputStyle: {
      ...TextStyle?.regular15,
      backgroundColor: 'transparent',
      color: theme?.white,
      flex: 1,
      textAlign: 'auto',
    },
    disabledInput: {
      ...TextStyle.regular15,
      flex: 1,
      color: theme?.gray6,
      textAlign: 'auto',
    },
    underlineStyle: {
      display: 'none',
    },
    iconContainer: { position: 'absolute', right: scale(8) },
    iconStyle: {
      width: scale(16),
      height: scale(16),
      tintColor: theme?.gray6,
    },
  });

export default styles;

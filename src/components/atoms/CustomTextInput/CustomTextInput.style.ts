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
      borderRadius: scale(4),
      borderWidth: scale(1),
      borderColor: theme?.gray[800],
    },
    errorStyle: {
      borderColor: theme?.danger[400],
    },
    inputStyle: {
      ...TextStyle?.bodyMediumRegular,
      backgroundColor: theme?.gray[100],
      color: theme?.white,
      flex: 1,
      textAlign: 'auto',
    },
    disabledInput: {
      ...TextStyle.bodyMediumRegular,
      flex: 1,
      color: theme?.gray[400],
      textAlign: 'auto',
    },
    underlineStyle: {
      display: 'none',
    },
    iconContainer: { position: 'absolute', right: scale(8) },
    iconStyle: {
      width: scale(16),
      height: scale(16),
      tintColor: theme?.gray[400],
    },
  });

export default styles;

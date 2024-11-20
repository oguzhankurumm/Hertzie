import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingVertical: verticalScale(20),
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      paddingTop: verticalScale(20),
      color: theme?.gray[400],
      textAlign: 'center',
    },
  });

export default styles;

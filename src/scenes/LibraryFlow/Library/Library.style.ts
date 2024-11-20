import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingHorizontal: scale(16),
      backgroundColor: theme?.white,
    },
    scrollView: {
      paddingBottom: verticalScale(30),
      backgroundColor: theme?.white,
    },
  });

export default styles;

import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingHorizontal: 0,
    },
    innerHeaderStyle: {
      backgroundColor: theme?.background,
      paddingTop: verticalScale(24),
    },
    listStyle: {
      flex: 1,
      paddingHorizontal: scale(12),
    },
  });

export default styles;

import { StyleSheet } from 'react-native';

import globalStyles from '_styles/globalStyles';
import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      ...globalStyles(theme)?.rowLeft,
      gap: scale(8),
      paddingBottom: verticalScale(8),
      marginBottom: verticalScale(8),
      borderBottomWidth: scale(1),
      borderBottomColor: theme?.gray[800],
    },
    iconStyle: {
      width: scale(24),
      height: scale(24),
    },
  });

export default styles;

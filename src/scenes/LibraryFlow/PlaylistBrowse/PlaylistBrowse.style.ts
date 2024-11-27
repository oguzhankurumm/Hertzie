import { StyleSheet } from 'react-native';

import globalStyles from '_styles/globalStyles';
import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingBottom: verticalScale(60),
    },
    buttonStyle: {
      paddingHorizontal: scale(16),
      paddingVertical: verticalScale(14),
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: scale(8),
      borderWidth: scale(1.5),
    },
  });

export default styles;

import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: scale(8),
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: scale(6),
    },
    textStyle: {
      marginTop: verticalScale(2),
    },
    rightContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: scale(12),
    },
    iconContainer: {
      marginStart: scale(12),
      width: scale(56),
      height: scale(56),
      backgroundColor: theme?.purple,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(28),
    },
  });

export default styles;

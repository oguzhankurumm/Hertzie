import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingHorizontal: 0,
    },
    listStyle: {
      paddingHorizontal: scale(16),
      paddingTop: verticalScale(32),
      paddingBottom: verticalScale(96),
    },
    actionItemContainer: {
      marginTop: verticalScale(22),
      gap: verticalScale(22),
    },
    actionItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default styles;

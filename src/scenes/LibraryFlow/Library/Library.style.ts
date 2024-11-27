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
    headerStyle: {
      paddingHorizontal: scale(16),
      marginBottom: verticalScale(12),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: scale(8),
    },
    headerIcon: {
      width: scale(16),
      height: scale(16),
    },
    listStyle: {
      paddingHorizontal: scale(16),
      paddingBottom: verticalScale(96),
    },
    tabsContainer: {
      paddingHorizontal: scale(16),
      marginBottom: verticalScale(14),
    },
  });

export default styles;

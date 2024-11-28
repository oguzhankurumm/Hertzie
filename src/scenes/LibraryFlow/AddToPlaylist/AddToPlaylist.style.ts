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
      paddingTop: verticalScale(24),
      backgroundColor: 'transparent',
      width: '100%',
    },
    searchBarContainerStyle: {
      marginBottom: verticalScale(24),
    },
    headerStyle: {
      marginBottom: verticalScale(16),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerSort: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: scale(8),
      paddingBottom: verticalScale(16),
      paddingRight: scale(16),
      width: '50%',
    },
    headerIcon: {
      width: scale(16),
      height: scale(16),
    },
    createButton: {
      width: '40%',
      borderRadius: scale(32),
      paddingVertical: verticalScale(12),
      backgroundColor: 'transparent',
      alignSelf: 'center',
      marginBottom: verticalScale(26),
    },
    doneButton: {
      width: '40%',
      borderRadius: scale(32),
      paddingVertical: verticalScale(12),
      backgroundColor: theme?.purple,
      alignSelf: 'center',
      position: 'absolute',
      bottom: verticalScale(16),
    },
  });

export default styles;

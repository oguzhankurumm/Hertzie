import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

export default (theme: ThemeType) =>
  StyleSheet.create({
    modalView: {
      backgroundColor: theme?.gray[100],
    },
    headerView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconsContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(32),
      width: '100%',
    },
    closeIconContainer: {
      height: scale(35),
      width: scale(35),
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },
    backIconContainer: {
      height: scale(35),
      width: scale(35),
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      left: scale(-6),
    },
    contentContainer: {
      flex: 1,
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(16),
    },
  });

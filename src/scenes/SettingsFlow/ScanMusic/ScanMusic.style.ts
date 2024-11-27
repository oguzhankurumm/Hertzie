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
      paddingBottom: verticalScale(46),
    },
    lottieContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    lottieStyle: {
      width: scale(250),
      height: scale(250),
    },
    selectFoldersTextStyle: {
      textDecorationLine: 'underline',
      marginVertical: verticalScale(46),
    },
    actionItemContainer: {
      marginTop: verticalScale(20),
      marginBottom: verticalScale(36),
      gap: verticalScale(16),
    },
  });

export default styles;

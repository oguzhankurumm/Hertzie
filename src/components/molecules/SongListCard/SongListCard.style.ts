import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: scale(8),
    },
    imageStyle: {
      width: scale(48),
      height: scale(48),
      borderRadius: scale(8),
    },
    compactImageStyle: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(8),
    },
    textStyle: {
      marginTop: verticalScale(2),
    },
    textContainer: {
      flex: 1,
      marginHorizontal: scale(8),
    },
    iconContainer: {
      paddingVertical: verticalScale(8),
      paddingLeft: scale(8),
    },
    iconStyle: {
      width: scale(24),
      height: scale(24),
    },
  });

export default styles;

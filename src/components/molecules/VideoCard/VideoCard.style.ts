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
      width: scale(98),
      height: scale(53),
      borderRadius: scale(8),
    },
    textContainer: {
      flex: 1,
      marginHorizontal: scale(8),
      gap: verticalScale(4),
    },
    iconContainer: {
      paddingVertical: verticalScale(8),
      paddingLeft: scale(8),
    },
    iconStyle: {
      width: scale(24),
      height: scale(24),
    },
    gridContainer: {
      flex: 1,
    },
    gridImageStyle: {
      aspectRatio: 16 / 9,
      borderRadius: scale(6),
    },
    gridTopContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'absolute',
      top: verticalScale(6),
      left: scale(6),
      right: scale(6),
    },
    gridIconStyle: {
      width: scale(16),
      height: scale(16),
    },
    gridTextContainer: {
      flex: 1,
      marginTop: verticalScale(4),
      gap: verticalScale(4),
    },
  });

export default styles;

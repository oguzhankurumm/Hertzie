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
    imageStyle: {
      width: scale(64),
      height: scale(64),
      borderRadius: scale(6),
      borderColor: theme?.purple,
      borderWidth: scale(1),
    },
    textContainer: {
      flex: 1,
      marginHorizontal: scale(8),
      gap: verticalScale(4),
    },
    iconStyle: {
      width: scale(16),
      height: scale(16),
    },
    gridContainer: {
      flex: 1,
      marginBottom: verticalScale(16),
    },
    gridImageStyle: {
      width: scale(100),
      height: scale(100),
      borderRadius: scale(6),
      borderColor: theme?.purple,
      borderWidth: scale(1),
    },
    gridTextContainer: {
      flex: 1,
      marginTop: verticalScale(4),
      gap: verticalScale(4),
    },
  });

export default styles;

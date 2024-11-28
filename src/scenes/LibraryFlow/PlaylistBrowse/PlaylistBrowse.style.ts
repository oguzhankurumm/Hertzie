import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
    },
    innerHeaderStyle: {
      paddingTop: verticalScale(24),
      backgroundColor: 'transparent',
      width: '100%',
    },
    buttonStyle: {
      paddingHorizontal: scale(8),
      paddingVertical: verticalScale(8),
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: scale(8),
      borderWidth: scale(1.5),
    },
  });

export default styles;

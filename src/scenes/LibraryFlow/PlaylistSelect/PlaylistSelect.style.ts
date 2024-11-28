import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingHorizontal: scale(22),
    },
    innerHeaderStyle: {
      paddingTop: verticalScale(24),
      paddingHorizontal: 0,
      backgroundColor: 'transparent',
      width: '100%',
    },
  });

export default styles;

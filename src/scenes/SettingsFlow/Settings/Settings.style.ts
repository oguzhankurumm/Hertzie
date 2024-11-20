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
  });

export default styles;

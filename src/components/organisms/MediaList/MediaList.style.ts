import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
  StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    listContainer: {
      marginTop: verticalScale(16),
      paddingBottom: verticalScale(32),
    },
  });

export default styles;

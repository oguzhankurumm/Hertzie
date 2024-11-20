import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    tabsContainer: {
      marginBottom: verticalScale(14),
    },
  });

export default styles;

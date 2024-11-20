import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    containerStyle: {
      width: '100%',
      backgroundColor: theme?.background[800],
      height: verticalScale(1),
    },
  });

export default styles;

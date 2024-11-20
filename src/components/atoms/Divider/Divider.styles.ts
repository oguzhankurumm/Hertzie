import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    containerStyle: {
      width: '100%',
      backgroundColor: theme?.black,
      height: verticalScale(1),
    },
  });

export default styles;

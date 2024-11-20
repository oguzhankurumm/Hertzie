import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
  StyleSheet.create({
    imageStyle: {
      width: scale(24),
      height: scale(24),
      // tintColor: theme?.gray[400],
    },
  });

export default styles;

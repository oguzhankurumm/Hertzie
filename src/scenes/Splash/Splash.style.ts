import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const splashStyles = (_theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      padding: scale(16),
    },
  });

export default splashStyles;

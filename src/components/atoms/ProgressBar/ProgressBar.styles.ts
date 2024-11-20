import { StyleSheet } from 'react-native';

import { scale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: { flexDirection: 'row', flex: 1, alignItems: 'center' },
    progressBarContainer: {
      flex: 1,
      height: scale(5),
      overflow: 'hidden',
      borderWidth: scale(1),
      borderRadius: scale(5),
      backgroundColor: theme.background[800],
    },
    progressBar: {
      height: scale(5),
      backgroundColor: theme.primary[600],
    },
  });

export default styles;

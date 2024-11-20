import { StyleSheet } from 'react-native';

import globalStyles from '_styles/globalStyles';
import { scale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      ...globalStyles(theme)?.rowSpaceBetween,
      padding: scale(16),
      gap: scale(18),
      backgroundColor: theme?.tabBackground,
    },
    rightContainer: {
      ...globalStyles(theme)?.rowFlexEnd,
      gap: scale(12),
    },
    iconStyle: {
      width: scale(24),
      height: scale(24),
    },
  });

export default styles;

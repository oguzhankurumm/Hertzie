import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import globalStyles from '_styles/globalStyles';
import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const InnerHeaderStyles = (theme: ThemeType) => {
  const safeAreaInsets = useSafeAreaInsets();
  const safeAreaTop = safeAreaInsets?.top || 0;

  return StyleSheet.create({
    container: {
      ...globalStyles(theme)?.rowSpaceBetween,
      padding: scale(16),
      paddingTop: safeAreaTop + verticalScale(24),
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
};

export default InnerHeaderStyles;

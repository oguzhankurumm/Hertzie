import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    sliderContainer: {
      width: '100%',
      gap: verticalScale(12),
    },
    sliderTrack: {
      width: '100%',
      height: scale(4),
      backgroundColor: theme?.gray5,
      borderRadius: scale(2),
    },
    sliderDurationsTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default styles;

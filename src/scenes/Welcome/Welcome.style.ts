import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: scale(32),
      paddingVertical: verticalScale(56),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoStyle: {
      aspectRatio: 1,
      width: scale(250),
    },
    buttonStyle: {
      borderRadius: scale(16),
      width: '100%',
    },
    buttonTitleStyle: {
      color: theme?.turquoise,
    },
  });

export default styles;

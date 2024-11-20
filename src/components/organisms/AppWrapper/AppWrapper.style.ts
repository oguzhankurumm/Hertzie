import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
      backgroundColor: theme?.background,
    },
    containerStyle: {
      flex: 1,
    },
    body: {
      flex: 1,
      paddingHorizontal: scale(16),
      paddingTop: verticalScale(16),
    },
  });

export default styles;

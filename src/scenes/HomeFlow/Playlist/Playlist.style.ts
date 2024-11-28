import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingHorizontal: 0,
    },
    innerHeaderStyle: {
      paddingTop: verticalScale(24),
      backgroundColor: 'transparent',
      width: '100%',
    },
    artworkStyle: {
      width: scale(166),
      height: scale(166),
      borderRadius: scale(8),
      borderWidth: scale(2),
      borderColor: theme?.purple,
      marginTop: verticalScale(24),
      alignSelf: 'center',
    },
  });

export default styles;

import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType, isPlaying: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingHorizontal: scale(22),
    },
    innerHeaderStyle: {
      paddingTop: verticalScale(24),
      paddingHorizontal: 0,
      backgroundColor: 'transparent',
      width: '100%',
    },
    selectAllContainer: {
      marginVertical: verticalScale(24),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: scale(16),
    },
    doneButtonContainer: {
      width: '100%',
      position: 'absolute',
      zIndex: 9999,
      bottom: isPlaying ? verticalScale(85) : verticalScale(24),
      alignSelf: 'center',
    },
    doneButtonStyle: {
      backgroundColor: theme?.purple,
    },
  });

export default styles;

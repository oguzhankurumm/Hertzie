import { StyleSheet } from 'react-native';

import globalStyles from '_styles/globalStyles';
import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingBottom: verticalScale(60),
    },
    playlistTypeItemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: scale(16),
    },
    playlistTypeItemCardImageContainer: {
      width: scale(170),
      height: scale(170),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(6),
      borderColor: theme?.purple,
      borderWidth: scale(1),
      padding: scale(8),
      backgroundColor: theme?.black,
    },
    playlistTypeItemCardImage: {
      width: scale(110),
      height: scale(110),
    },
    buttonContainer: {
      width: '100%',
      marginTop: verticalScale(32),
      gap: verticalScale(24),
    },
    createButton: {
      borderRadius: scale(32),
      paddingVertical: verticalScale(12),
      backgroundColor: theme?.purple,
    },
  });

export default styles;

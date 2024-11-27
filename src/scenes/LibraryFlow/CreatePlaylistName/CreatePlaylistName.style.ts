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
    playlistInputContainer: {
      width: '100%',
      marginVertical: verticalScale(32),
      paddingHorizontal: scale(40),
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
    buttonsContainer: {
      width: '100%',
      paddingHorizontal: scale(40),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: scale(10),
    },
    cancelButton: {
      flex: 1,
      borderRadius: scale(12),
      paddingVertical: verticalScale(8),
      borderColor: theme?.gray2,
    },
    createButton: {
      flex: 1,
      borderRadius: scale(12),
      paddingVertical: verticalScale(8),
      backgroundColor: theme?.purple,
    },
  });

export default styles;

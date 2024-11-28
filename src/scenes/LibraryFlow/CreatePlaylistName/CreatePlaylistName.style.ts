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
      marginVertical: verticalScale(96),
      paddingHorizontal: scale(40),
    },
    playlistNameInputContainerStyle: {
      borderWidth: 0,
      borderBottomWidth: verticalScale(2),
      borderBottomColor: theme?.white,
    },
    playlistNameInputStyle: {
      width: '100%',
      borderWidth: 0,
      textAlign: 'center',
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

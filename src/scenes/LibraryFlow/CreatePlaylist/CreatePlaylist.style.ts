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
    itemTypesContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(20),
      paddingHorizontal: scale(20),
    },
    playlistTypeItemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: scale(16),
    },
    playlistTypeItemCardImageContainer: {
      width: scale(100),
      height: scale(100),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(6),
      borderColor: theme?.purple,
      borderWidth: scale(1),
      padding: scale(8),
      backgroundColor: theme?.black,
    },
    playlistTypeItemCardImage: {
      width: scale(60),
      height: scale(60),
    },
  });

export default styles;

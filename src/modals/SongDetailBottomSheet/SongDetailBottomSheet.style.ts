import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    modalStyle: {
      flex: 1,
      marginBottom: verticalScale(10),
    },
    headerContainer: {
      marginTop: verticalScale(16),
      marginBottom: verticalScale(32),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: scale(10),
    },
    headerArtworkStyle: {
      width: scale(48),
      height: scale(48),
      borderRadius: scale(8),
      borderColor: theme?.purple,
    },
    headerTextContainer: {
      flex: 1,
    },
    headerRight: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      columnGap: scale(12),
    },
    pressableItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(10),
      gap: scale(10),
    },
    pressableItemIcon: {
      width: scale(20),
      height: scale(20),
    },
    dividerStyle: {
      backgroundColor: 'rgba(110, 110, 110, 0.20)',
    },
  });
};

export default styles;

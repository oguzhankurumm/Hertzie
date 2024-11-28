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
    pressablesContainer: {
      marginTop: verticalScale(16),
      gap: scale(14),
    },
    pressableItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: verticalScale(6),
    },
    pressableItemIcon: {
      width: scale(24),
      height: scale(24),
      tintColor: theme?.purple,
    },
  });
};

export default styles;

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
    },
    customItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: verticalScale(10),
    },
    dividerStyle: {
      marginBottom: verticalScale(32),
      backgroundColor: 'rgba(110, 110, 110, 0.20)',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: verticalScale(32),
      gap: scale(16),
    },
    editButton: {
      flex: 1,
    },
    okButton: {
      flex: 1,
      backgroundColor: theme?.purple,
    },
  });
};

export default styles;

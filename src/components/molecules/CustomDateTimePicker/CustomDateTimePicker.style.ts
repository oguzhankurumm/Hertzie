import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType, _isError: boolean, disabled: boolean) =>
  StyleSheet.create({
    containerStyle: {
      height: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: scale(1),
      borderRadius: scale(4),
      paddingLeft: scale(12),
      paddingRight: scale(6),
      paddingVertical: verticalScale(12),
      justifyContent: 'space-between',
      borderColor: theme?.gray[800],
    },
    headerContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    placeholderStyle: {
      color: theme?.gray[400],
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleStyle: {
      marginBottom: verticalScale(8),
      color: theme?.white,
    },
    errorTextStyle: {
      marginStart: scale(5),
      color: theme?.danger[500],
      marginTop: verticalScale(5),
    },
    hintTextStyle: {
      marginStart: scale(5),
      marginTop: verticalScale(5),
      color: theme?.gray[400],
    },
    modalContainerStyle: {
      shadowOffset: {
        width: 0,
        height: verticalScale(9),
      },
      shadowOpacity: 0.7,
      elevation: scale(24),
      marginEnd: scale(-0.3),
      backgroundColor: theme?.gray[900],
      shadowRadius: scale(13),
      borderTopEndRadius: scale(16),
      borderTopStartRadius: scale(16),
      shadowColor: theme?.gray[600],
    },
    noShadowStyle: {
      shadowOpacity: 0,
    },
    modalHandleStyle: {
      backgroundColor: theme?.gray[400],
    },
    itemContainerStyle: {
      paddingTop: verticalScale(40),
    },
    itemsWrapperStyle: {
      height: verticalScale(200),
      marginBottom: verticalScale(24),
    },
    valueTextStyle: {
      color: disabled ? theme?.gray[400] : theme?.white,
      width: '80%',
    },
  });

export default styles;

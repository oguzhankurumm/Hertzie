import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType, isError: boolean) =>
  StyleSheet.create({
    container: {
      borderRadius: scale(4),
      flexDirection: 'row',
      alignItems: 'center',
      height: verticalScale(54),
      marginTop: verticalScale(4),
      paddingHorizontal: scale(10),
      borderWidth: isError ? scale(1) : 0,
      justifyContent: 'space-between',
      borderColor: theme?.danger[500],
      backgroundColor: isError ? theme?.gray[100] : theme?.gray[500],
    },
    dropdownStyle: {
      borderRadius: scale(4),
      borderWidth: scale(1),
      borderColor: theme?.gray[800],
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(12),
    },
    placeholderStyle: {
      ...TextStyle.bodyMedium,
      color: theme?.gray[400],
    },
    selectedTextStyle: {
      ...TextStyle.bodyMedium,
      color: theme?.white,
    },
    containerStyle: {
      borderColor: theme?.gray[600],
      backgroundColor: theme?.background[800],
      borderRadius: scale(4),
      marginTop: verticalScale(4),
      paddingHorizontal: scale(5),
    },
    itemContainerStyle: {
      borderRadius: scale(4),
    },
    itemTextStyle: {
      ...TextStyle.bodyMediumRegular,
      color: theme?.white,
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(5),
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleStyle: {
      marginStart: scale(5),
      marginBottom: verticalScale(8),
    },
    errorTextStyle: {
      marginStart: scale(5),
      marginTop: verticalScale(5),
      color: theme?.danger[500],
    },
    inputSearchStyle: {
      backgroundColor: theme?.gray[600],
      borderColor: 'transparent',
      color: theme?.white,
      height: verticalScale(32),
      margin: 0,
      padding: 0,
    },
  });

export { styles };

import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { TextStyle } from '_styles/typography';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    dropdownStyle: {
      borderRadius: scale(12),
      borderWidth: scale(1),
      borderColor: theme?.gray[600],
      backgroundColor: theme?.background[900],
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(5),
    },
    placeholderStyle: {
      ...TextStyle.bodyMedium,
      color: theme?.gray[400],
    },
    selectedTextStyle: {
      ...TextStyle.bodyMediumSemibold,
      color: theme?.gray[600],
    },
    itemTextStyle: {
      ...TextStyle.bodyMedium,
      color: theme?.gray[600],
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
    selectedStyle: {
      gap: scale(8),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(14),
      backgroundColor: theme.gray[100],
      shadowColor: theme?.gray[600],
      marginTop: verticalScale(8),
      marginRight: scale(12),
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(8),
      shadowOffset: {
        width: 0,
        height: verticalScale(1),
      },
      shadowOpacity: scale(0.2),
      shadowRadius: scale(1.41),

      elevation: scale(2),
    },
  });

export { styles };

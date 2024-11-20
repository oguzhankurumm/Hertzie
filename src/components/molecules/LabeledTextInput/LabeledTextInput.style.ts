import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleStyle: {
      color: theme?.white,
      marginBottom: verticalScale(8),
    },
    errorHintTextStyle: {
      color: theme?.danger[400],
      marginTop: verticalScale(8),
    },
    hintTextStyle: {
      color: theme?.gray[600],
      marginTop: verticalScale(8),
    },
    lengthTextStyle: {
      position: 'absolute',
      right: 0,
      bottom: verticalScale(8),
      color: theme?.gray[600],
      marginTop: verticalScale(8),
      marginRight: verticalScale(8),
      alignSelf: 'flex-end',
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainerStyle: {
      flex: 1,
    },
  });

export default styles;

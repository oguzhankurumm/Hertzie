import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    formBuilderContainer: {
      flex: 1,
    },
    inputTitleStyle: {
      marginBottom: verticalScale(16),
    },
    inputContainerStyle: {
      marginBottom: verticalScale(16),
    },
    passwordInputContainerStyle: {
      marginBottom: verticalScale(5),
    },
    forgotPasswordTextStyle: {
      alignSelf: 'flex-end',
      color: theme?.gray[400],
      marginTop: verticalScale(8),
    },
  });

export default styles;

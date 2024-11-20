import { StyleSheet } from 'react-native';

import { verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (_theme: ThemeType) =>
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
    checkBoxContainerStyle: {
      marginBottom: verticalScale(4),
    },
    checkBoxTitleStyle: {
      marginBottom: verticalScale(16),
      marginTop: verticalScale(-5),
    },

    submitButtonStyle: {
      marginTop: verticalScale(-16),
    },
  });

export default styles;

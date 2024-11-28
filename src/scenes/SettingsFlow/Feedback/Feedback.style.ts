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
    listStyle: {
      paddingHorizontal: scale(16),
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(96),
    },
    actionItemContainer: {
      marginTop: verticalScale(20),
      marginBottom: verticalScale(36),
      gap: verticalScale(16),
    },
    feedbackImageStyle: {
      width: scale(120),
      height: scale(120),
    },
    textRowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCenter: {
      flex: 1,
      textAlign: 'center',
    },
    inputStyle: {
      height: verticalScale(140),
    },
    imageButtonStyle: {
      width: scale(40),
      height: scale(40),
      marginVertical: verticalScale(16),
    },
    submitButtonStyle: {
      backgroundColor: theme?.purple,
    },
  });

export default styles;

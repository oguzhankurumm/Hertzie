import { StyleSheet } from 'react-native';

import { moderateScale, scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const globalStyles = (theme: ThemeType) =>
  StyleSheet.create({
    flexOne: {
      flex: 1,
    },
    mainWrapperPaddingBottom: { paddingBottom: verticalScale(20) },
    mainWrapperPaddingHorizontal: { paddingHorizontal: scale(20) },
    fullyCentered: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullyBottom: {
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    rowCentered: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
    },
    rowLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    rowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rowFlexEnd: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    mainBackgroundColor: { backgroundColor: theme?.black },
    textStyle: { color: theme?.white },
    textVersionMessage: { fontSize: moderateScale(22), textAlign: 'center' },
    formHintOrErrorTextMarginTop: { marginTop: verticalScale(8) },
    textInputMarginTop: { marginTop: verticalScale(32) },
    backButtonStyle: {
      left: 0,
      position: 'absolute',
    },
    formInput: { marginBottom: verticalScale(28) },
    displayNone: { display: 'none' },
    displayFlex: { display: 'flex' },
  });

export default globalStyles;

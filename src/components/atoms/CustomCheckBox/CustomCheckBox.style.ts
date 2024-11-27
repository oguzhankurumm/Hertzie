import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    mainContainerStyle: {
      flexDirection: 'row',
      flex: 1,
    },
    checkBoxContainerDefaultStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      width: scale(20),
      height: scale(20),
      borderRadius: scale(10),
      borderWidth: scale(1),
    },
    textContainerStyle: {
      marginStart: scale(16),
      justifyContent: 'center',
    },
    errorHintTextStyle: {
      color: theme?.danger[400],
      marginTop: verticalScale(-8),
      marginBottom: verticalScale(8),
    },
    hintTextStyle: {
      color: theme?.white,
      marginTop: verticalScale(8),
    },
    titleAndClickableTextContainerStyle: { flexDirection: 'row', flexWrap: 'wrap' },
  });

export const getStyleByStatus = ({
  theme,
  disabled = false,
  selected = false,
}: {
  theme: ThemeType;
  disabled?: boolean;
  selected?: boolean;
}) => {
  if (disabled) {
    return StyleSheet.create({
      checkboxContainerStyle: {
        ...styles(theme).checkBoxContainerDefaultStyle,
        borderColor: selected ? theme?.purple : disabled ? theme?.disabled[500] : theme?.white,
        backgroundColor: selected ? theme?.purple : disabled ? 'transparent' : theme?.gray[50],
      },
      titleTextStyle: {
        color: theme?.white,
      },
      descriptionTextStyle: {
        color: theme?.white,
      },
    });
  }
  return StyleSheet.create({
    checkboxContainerStyle: {
      ...styles(theme).checkBoxContainerDefaultStyle,
      borderColor: selected ? theme?.purple : theme?.white,
      backgroundColor: selected ? theme?.purple : 'transparent',
    },
    titleTextStyle: {
      color: theme?.white,
    },
    descriptionTextStyle: { color: theme?.white },
  });
};

export default styles;

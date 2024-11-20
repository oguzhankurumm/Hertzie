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
      borderRadius: scale(6),
      borderWidth: scale(1),
    },
    textContainerStyle: {
      top: verticalScale(2),
      paddingLeft: scale(8),
    },
    errorHintTextStyle: {
      color: theme?.danger[400],
      marginTop: verticalScale(-8),
      marginBottom: verticalScale(8),
    },
    hintTextStyle: {
      color: theme?.gray[600],
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
        borderColor: selected ? 'transparent' : disabled ? theme?.disabled[500] : theme?.gray[400],
        backgroundColor: selected ? theme?.accent[500] : disabled ? 'transparent' : theme?.gray[50],
      },
      titleTextStyle: {
        color: theme?.gray[500],
      },
      descriptionTextStyle: {
        color: theme?.gray[300],
      },
    });
  }
  return StyleSheet.create({
    checkboxContainerStyle: {
      ...styles(theme).checkBoxContainerDefaultStyle,
      borderColor: selected ? theme?.gray[800] : theme?.gray[400],
      backgroundColor: 'transparent',
    },
    titleTextStyle: {
      color: theme?.gray[500],
    },
    descriptionTextStyle: { color: theme?.gray[500] },
  });
};

export default styles;

import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: theme?.gray[100],
      paddingVertical: verticalScale(13.5),
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: scale(10),
      gap: scale(8),
    },
    circleContainerDefaultStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: scale(20),
      height: scale(20),
      borderRadius: scale(15),
      borderWidth: scale(2),
      marginEnd: scale(10),
    },
    innerCircleDefaultStyle: {
      width: scale(12),
      height: scale(12),
      borderRadius: scale(10),
    },
    contentContainerStyle: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      gap: scale(10),
    },
    iconStyle: {
      width: scale(15),
      height: scale(15),
      tintColor: theme?.gray[50],
    },
  });

export const getStyleByStatus = ({
  theme,
  disabled = false,
  active = false,
}: {
  theme: ThemeType;
  disabled?: boolean;
  active?: boolean;
}) => {
  if (disabled) {
    return StyleSheet.create({
      circleContainerStyle: {
        ...styles(theme).circleContainerDefaultStyle,
        borderColor: active ? 'transparent' : theme?.gray[500],
        backgroundColor: active ? theme?.gray[500] : 'transparent',
      },
      innerCircleStyle: {
        ...styles(theme).innerCircleDefaultStyle,
        backgroundColor: active ? theme?.gray[500] : 'transparent',
      },
      titleTextStyle: {
        color: theme?.gray[900],
      },
      descriptionTextStyle: {
        marginTop: verticalScale(4),
        color: theme?.gray[900],
      },
      iconStyle: {
        tintColor: theme?.gray[900],
      },
      contentContainerStyle: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        gap: scale(10),
      },
    });
  }
  return StyleSheet.create({
    circleContainerStyle: {
      ...styles(theme).circleContainerDefaultStyle,
      borderColor: active ? theme?.gray[500] : theme?.gray[200],
      backgroundColor: active ? theme?.gray[500] : 'transparent',
    },
    innerCircleStyle: {
      ...styles(theme).innerCircleDefaultStyle,
      backgroundColor: active ? theme?.gray[50] : 'transparent',
    },
    titleTextStyle: { color: theme?.gray[900] },
    descriptionTextStyle: { color: theme?.gray[300], marginTop: verticalScale(4) },
    iconStyle: { tintColor: theme?.gray[50] },
    contentContainerStyle: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      gap: scale(10),
    },
  });
};

export default styles;

import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { BottomAlertTypes } from '_types/index';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    childrenStyle: {
      marginHorizontal: scale(25),
    },
    modalStyle: {
      backgroundColor: theme?.gray[100],
      paddingTop: verticalScale(16),
    },
    handleStyle: {
      backgroundColor: theme?.gray[500],
    },
    contentContainer: {
      marginHorizontal: scale(15),
      borderBottomLeftRadius: scale(13),
      borderBottomRightRadius: scale(13),
    },
    handleIndicatorStyle: { display: 'none' },
    alertModalContainerStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    alertTitleStyle: {
      marginBottom: verticalScale(15),
      textAlign: 'center',
    },
    alertModalIconStyle: {
      width: scale(40),
      height: scale(40),
      marginBottom: verticalScale(15),
    },
  });

const getStyleByStatus = ({ theme, type }: { theme: ThemeType; type: BottomAlertTypes }) => {
  switch (type) {
    case BottomAlertTypes.Error:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.danger[500],
        },
        textStyle: {
          color: theme?.danger[500],
        },
      });
    case BottomAlertTypes.Success:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.success[500],
        },
        textStyle: {
          color: theme?.success[500],
        },
      });

    case BottomAlertTypes.Warning:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.warning[500],
        },
        textStyle: {
          color: theme?.warning[500],
        },
      });
    case BottomAlertTypes.Info:
    default:
      return StyleSheet.create({
        iconStyle: {
          tintColor: theme?.gray[500],
        },
        textStyle: {
          color: theme?.gray[500],
        },
      });
  }
};

export default styles;
export { getStyleByStatus };

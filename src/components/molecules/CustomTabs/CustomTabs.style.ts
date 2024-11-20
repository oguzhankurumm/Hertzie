import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { TabTypes } from '_types/index';
import { ThemeType } from '_types/theme';

const CustomTabsStyles = (theme: ThemeType) =>
  StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: scale(28),
    },
    activeButtonStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: verticalScale(3),
      borderBottomColor: theme?.primary[600],
    },
    inactiveButtonStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: verticalScale(3),
      borderBottomColor: theme?.transparent,
    },
    activeButtonTextStyle: {
      color: theme?.white,
      textAlign: 'center',
      marginBottom: verticalScale(8),
    },
    inactiveButtonTextStyle: {
      color: theme?.gray[400],
      textAlign: 'center',
      marginBottom: verticalScale(8),
    },
  });

export const getStyleByStatus = ({
  theme,
  type,
  colored,
  overrideColor,
}: {
  theme: ThemeType;
  type?: TabTypes;
  colored?: boolean;
  overrideColor?: string;
}) => {
  if (type === TabTypes.Secondary) {
    return StyleSheet.create({
      containerStyle: {
        ...CustomTabsStyles(theme).containerStyle,
        backgroundColor: theme?.gray[100],
        borderWidth: scale(2),
        borderColor: theme?.background[800],
        borderRadius: scale(4),
        gap: scale(4),
        overflow: 'hidden',
      },
      activeButtonStyle: {
        ...CustomTabsStyles(theme).activeButtonStyle,
        borderBottomWidth: 0,
        backgroundColor: colored ? overrideColor || theme?.primary[600] : theme?.background[800],
        paddingHorizontal: scale(8),
        paddingVertical: verticalScale(4),
      },
      inactiveButtonStyle: {
        ...CustomTabsStyles(theme).inactiveButtonStyle,
        borderBottomWidth: 0,
        paddingHorizontal: scale(8),
        paddingVertical: verticalScale(4),
      },
      activeButtonTextStyle: {
        ...CustomTabsStyles(theme).activeButtonTextStyle,
        marginBottom: 0,
      },
      inactiveButtonTextStyle: {
        ...CustomTabsStyles(theme).inactiveButtonTextStyle,
        marginBottom: 0,
      },
    });
  }
  return StyleSheet.create({
    containerStyle: {
      ...CustomTabsStyles(theme).containerStyle,
    },
    activeButtonStyle: {
      ...CustomTabsStyles(theme).activeButtonStyle,
    },
    inactiveButtonStyle: {
      ...CustomTabsStyles(theme).inactiveButtonStyle,
    },
    activeButtonTextStyle: {
      ...CustomTabsStyles(theme).activeButtonTextStyle,
    },
    inactiveButtonTextStyle: {
      ...CustomTabsStyles(theme).inactiveButtonTextStyle,
    },
  });
};

export default CustomTabsStyles;

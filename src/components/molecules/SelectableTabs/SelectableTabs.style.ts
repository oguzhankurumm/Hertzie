import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const SelectableTabsStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: scale(10),
    },
    defaultTabStyle: {
      paddingHorizontal: scale(20),
      paddingVertical: verticalScale(7),
      borderRadius: 1000,
      borderWidth: scale(1),
    },
  });

export const getStyleByStatus = (theme: ThemeType, selected: boolean) => {
  const { defaultTabStyle } = SelectableTabsStyles(theme);

  return StyleSheet.create({
    tabStyle: {
      ...defaultTabStyle,
      backgroundColor: selected ? theme?.purple : 'transparent',
      borderColor: selected ? theme?.purple : theme?.purple,
    },
  });
};

export default SelectableTabsStyles;

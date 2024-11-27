import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const SelectLanguageStyles = (_theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      paddingHorizontal: 0,
    },
    listStyle: {
      paddingHorizontal: scale(16),
      paddingTop: verticalScale(32),
      paddingBottom: verticalScale(96),
    },
    actionItemContainer: {
      gap: verticalScale(16),
    },
    actionItemStyle: {
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(8),
      borderRadius: scale(100),
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    actionItemImage: {
      width: scale(36),
      height: scale(36),
    },
  });

export const getStyleByStatus = (theme: ThemeType, active: boolean) => {
  return StyleSheet.create({
    actionItemStyle: {
      ...SelectLanguageStyles(theme).actionItemStyle,
      backgroundColor: active ? `${theme?.purple}10` : 'transparent',
      borderColor: active ? theme?.purple : 'transparent',
      borderWidth: scale(1),
    },
  });
};

export default SelectLanguageStyles;

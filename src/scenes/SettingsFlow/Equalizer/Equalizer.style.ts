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
      paddingTop: verticalScale(48),
      paddingBottom: verticalScale(96),
    },
    equalizerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      transform: [{ rotate: '-90deg' }],
    },
    sliderTopLabel: {},
    topLabelsContainer: {
      marginTop: verticalScale(48),
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingHorizontal: scale(40),
      paddingRight: scale(40),
    },
    sliderBottomLabel: {},
    bottomLabelsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: verticalScale(50),
      width: '100%',
      paddingHorizontal: scale(16),
      paddingRight: scale(40),
      marginStart: scale(12),
    },
    tabsContainer: {
      marginTop: verticalScale(16),
      paddingHorizontal: scale(16),
    },
  });

export const getStyleByStatus = (theme: ThemeType, active: boolean) => {
  return StyleSheet.create({});
};

export default SelectLanguageStyles;

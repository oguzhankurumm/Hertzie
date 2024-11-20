import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    tabsContainer: {
      marginBottom: verticalScale(14),
    },
    headerTextStyle: {
      marginBottom: verticalScale(12),
    },
    dividerStyle: {
      marginVertical: verticalScale(24),
    },
    playlistCardItemContainer: {
      width: scale(110),
      height: scale(110),
      borderRadius: scale(8),
    },
    playlistCardItemBottom: {
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.87)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(8),
      position: 'absolute',
      bottom: 0,
      borderBottomLeftRadius: scale(8),
      borderBottomRightRadius: scale(8),
    },
    artworkPlaceholder: {
      width: '100%',
      height: '100%',
      backgroundColor: theme?.tabBackground,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(8),
    },
    artworkPlaceholderIcon: {
      marginBottom: verticalScale(8),
      width: scale(40),
      height: scale(40),
    },
    songCardItemContainer: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: scale(12),
    },
    songCardItemStyle: {
      width: '48%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme?.black,
      overflow: 'hidden',
      borderRadius: scale(8),
      gap: scale(8),
    },
    songCardItemImageStyle: {
      width: scale(28),
      height: scale(28),
      backgroundColor: theme?.tabBackground,
    },
    songCardItemPlayContainer: {
      width: scale(20),
      height: scale(20),
      backgroundColor: `${theme?.gray2}32`,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(14),
      marginEnd: scale(8),
    },
    songCardItemPlayIcon: {
      left: scale(0.5),
      width: scale(10),
      height: scale(10),
    },
  });

export default styles;

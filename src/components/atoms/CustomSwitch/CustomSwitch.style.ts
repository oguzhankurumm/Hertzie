import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '_styles/scaling';
import { ThemeType } from '_types/theme';

const styles = ({ active = false }: { active: boolean }) =>
  StyleSheet.create({
    containerDefaultStyle: {
      flexDirection: active ? 'row-reverse' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'flex-start',
      minWidth: scale(34),
      height: verticalScale(24),
      borderRadius: scale(12),
    },
    circleDefaultStyle: {
      height: scale(14),
      width: scale(14),
      borderRadius: scale(12),
      marginRight: active ? scale(4) : 0,
      marginLeft: active ? 0 : scale(4),
    },
    textDefaultStyle: {
      paddingHorizontal: scale(12),
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
  if (!disabled) {
    return StyleSheet.create({
      containerStyle: {
        ...styles({ active }).containerDefaultStyle,
        backgroundColor: active ? theme?.background[100] : theme?.background[300],
      },
      circleStyle: {
        ...styles({ active }).circleDefaultStyle,
        backgroundColor: active ? theme?.background[900] : theme?.background[100],
      },
      textStyle: {
        ...styles({ active }).textDefaultStyle,
        color: theme?.gray[600],
      },
    });
  }
  return StyleSheet.create({
    containerStyle: {
      ...styles({ active }).containerDefaultStyle,
      backgroundColor: active ? theme?.background[100] : theme?.background[300],
    },
    circleStyle: {
      ...styles({ active }).circleDefaultStyle,
      backgroundColor: theme?.background[300],
    },
    textStyle: {
      ...styles({ active }).textDefaultStyle,
      color: theme?.gray[400],
    },
  });
};

export default styles;

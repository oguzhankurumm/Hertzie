import { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '_styles/theming';

import styles from './ProgressBar.styles';
import { ProgressBarType } from './ProgressBar.types';

const ProgressBar = ({ progress = 0, progressColor }: ProgressBarType) => {
  const theme = useTheme();
  const progressWidth = useSharedValue(0);
  const { progressBar, progressBarContainer, container } = useMemo(() => styles(theme), [theme]);

  useEffect(() => {
    progressWidth.value = withTiming(progress);
  }, [progress, progressWidth]);

  const progressStyle = useAnimatedStyle(() => {
    const value = interpolate(progressWidth.value, [0, 1], [0, 100]);

    return {
      width: `${value}%`,
    };
  });

  return (
    <View style={container}>
      <View style={progressBarContainer}>
        <Animated.View style={[progressBar, progressStyle, { backgroundColor: progressColor }]} />
      </View>
    </View>
  );
};

export default ProgressBar;

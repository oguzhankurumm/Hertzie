import { FC, useMemo } from 'react';
import { View } from 'react-native';
import { Slider } from 'react-native-awesome-slider';
import { useSharedValue } from 'react-native-reanimated';
import TrackPlayer, { useProgress } from 'react-native-track-player';

import dayjs from 'dayjs';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './PlayerProgressbar.style';
import { PlayerProgressbarPropsTypes } from './PlayerProgressbar.types';

const PlayerProgressbar: FC<PlayerProgressbarPropsTypes> = ({ overrideContainerStyle }) => {
  const theme = useTheme();

  const { sliderContainer, sliderDurationsTextContainer, sliderTrack } = useMemo(
    () => styles(theme),
    [theme]
  );

  const { duration, position } = useProgress(250);

  const isSliding = useSharedValue(false);
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const thumbScaleValue = useSharedValue(1);

  const trackElapsedTime = dayjs(position).format('mm:ss');
  const trackTotalTime = dayjs(duration).format('mm:ss');

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  return (
    <View style={[overrideContainerStyle, sliderContainer]}>
      <Slider
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        containerStyle={sliderTrack}
        thumbWidth={scale(12)}
        renderBubble={() => null}
        theme={{
          minimumTrackTintColor: theme?.purple,
          maximumTrackTintColor: theme?.gray5,
        }}
        onSlidingStart={() => {
          isSliding.value = true;
        }}
        onValueChange={async value => {
          await TrackPlayer.seekTo(value * duration);
        }}
        thumbScaleValue={thumbScaleValue}
        onSlidingComplete={async value => {
          // if the user is not sliding, we should not update the position
          if (!isSliding.value) return;

          isSliding.value = false;

          await TrackPlayer.seekTo(value * duration);
        }}
      />
      <View style={sliderDurationsTextContainer}>
        <CustomText text={trackElapsedTime} textFontStyle='medium12' />
        <CustomText text={trackTotalTime} textFontStyle='medium12' />
      </View>
    </View>
  );
};

export default PlayerProgressbar;

import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomImage } from '_atoms';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { useSongsStore } from '_stores/songsStore';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import PlayerProgressbar from '../PlayerProgressbar/PlayerProgressbar.component';
import styles, { getStyleByStatus } from './FloatingPlayer.style';
import { FloatingPlayerPropsTypes } from './FloatingPlayer.types';

const FloatingPlayer: FC<FloatingPlayerPropsTypes> = ({ overrideContainerStyle }) => {
  const theme = useTheme();

  const {
    currentSong,
    isPlaying,
    togglePlaying,
    shuffleMode,
    toggleShuffleMode,
    repeatMode,
    toggleRepeatMode,
  } = useSongsStore();

  const {
    container,
    trackTitleContainer,
    controlsContainer,
    controlPlayPauseButton,
    controlPlayPauseIcon,
  } = useMemo(() => styles(theme), [theme]);

  if (!currentSong) return null;

  const slicedTitle =
    currentSong?.title.length > 20 ? `${currentSong?.title.slice(0, 20)}...` : currentSong?.title;

  const slicedArtists =
    currentSong?.artists.join(', ').length > 24
      ? `${currentSong?.artists.join(', ').slice(0, 24)}...`
      : currentSong?.artists.join(', ');

  return (
    <TouchableOpacity onPress={() => NavigationServices.navigate(Scenes.player)} activeOpacity={1}>
      <PlayerProgressbar />
      <View style={[container, overrideContainerStyle]}>
        <View style={trackTitleContainer}>
          <CustomText
            text={slicedTitle}
            textFontStyle='semibold14'
            color={theme?.gray2}
            restTextProps={{
              numberOfLines: 1,
            }}
          />
          <CustomText text={slicedArtists} textFontStyle='medium12' color={theme?.gray4} />
        </View>

        <View style={controlsContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={toggleShuffleMode}>
            <CustomImage
              source={iconsObject?.shuffle}
              overrideStyle={getStyleByStatus(theme, shuffleMode)?.controlIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <CustomImage
              source={iconsObject?.skipBack}
              overrideStyle={getStyleByStatus(theme, false)?.controlIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={controlPlayPauseButton}
            onPress={togglePlaying}>
            <CustomImage
              source={isPlaying ? iconsObject?.pauseFill : iconsObject?.playFill}
              overrideStyle={controlPlayPauseIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <CustomImage
              source={iconsObject?.skipForward}
              overrideStyle={getStyleByStatus(theme, false)?.controlIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={toggleRepeatMode}>
            <CustomImage
              source={iconsObject?.repeat}
              overrideStyle={getStyleByStatus(theme, repeatMode)?.controlIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;

import { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomClickableIcon, CustomImage, CustomText } from '_atoms';
import { PlayerProgressbar } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import { useSongsStore } from '_stores/songsStore';
import { useTheme } from '_styles/theming';
import { showToast } from '_utils/helpers';

import styles, { getStyleByStatus } from './Player.style';
import { usePlayer } from './hooks/usePlayer.hook';

const Player = () => {
  const theme = useTheme();

  const {
    currentSong,
    playingFrom,
    isPlaying,
    togglePlaying,
    shuffleMode,
    toggleShuffleMode,
    repeatMode,
    toggleRepeatMode,
  } = useSongsStore();
  const { onDownPress } = usePlayer();

  const {
    container,
    headerContainer,
    headerTextContainer,
    artworkStyle,
    songInfoContainer,
    songDetailsContainer,
    songInfoContainerRight,
    controlsContainer,
    controlPlayPauseButton,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      {/* HEADER */}
      <View style={headerContainer}>
        <CustomClickableIcon iconName='downFill' onPress={onDownPress} />
        <View style={headerTextContainer}>
          <CustomText
            text={String('Playing From').toLocaleUpperCase()}
            // text={translate('player.playingFrom')}
            textFontStyle='bold13'
            color={theme?.gray2}
          />
          <CustomText text={playingFrom} textFontStyle='medium12' color={theme?.gray4} />
        </View>
        <CustomClickableIcon iconName='moreHorizontal' onPress={() => {}} />
      </View>

      {/* ARTWORK OR VIDEO */}
      <CustomImage
        source={{ uri: currentSong?.artwork || undefined }}
        overrideStyle={artworkStyle}
        placeholder={imagesObject?.songPlaceholder}
      />

      {/* SONG INFO */}
      <View style={songInfoContainer}>
        <View style={songDetailsContainer}>
          <CustomText
            text={currentSong?.title}
            textFontStyle='semibold16'
            color={theme?.gray2}
            restTextProps={{
              numberOfLines: 1,
            }}
          />
          {currentSong?.artists && (
            <CustomText text={currentSong?.artists} textFontStyle='medium12' color={theme?.gray4} />
          )}
        </View>
        <View style={songInfoContainerRight}>
          <CustomClickableIcon
            iconName='plus'
            onPress={() => {
              NavigationServices.navigate(Scenes.createPlaylist);
            }}
          />
          <CustomClickableIcon
            iconName='moreVertical'
            onPress={() => {
              showToast({
                title: 'This feature will be available soon',
                type: 'info',
              });
            }}
          />
        </View>
      </View>

      {/* SLIDER */}
      <PlayerProgressbar />

      {/* CONTROLS */}
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
            overrideStyle={getStyleByStatus(theme, false)?.controlIcon}
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
    </AppWrapper>
  );
};

export default Player;

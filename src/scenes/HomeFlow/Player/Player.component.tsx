import { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomImage, CustomText } from '_atoms';
import { PlayerProgressbar } from '_molecules';
import { AppWrapper } from '_organisms';
import { useSongsStore } from '_stores/songsStore';
import { useTheme } from '_styles/theming';

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
    headerIcon,
    artworkStyle,
    songInfoContainer,
    songDetailsContainer,
    songInfoContainerRight,
    songInfoIcon,
    controlsContainer,
    controlPlayPauseButton,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      {/* HEADER */}
      <View style={headerContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={onDownPress}>
          <CustomImage source={iconsObject?.downFill} overrideStyle={headerIcon} />
        </TouchableOpacity>
        <View style={headerTextContainer}>
          <CustomText
            text='PLAYING FROM'
            // text={translate('player.playingFrom')}
            textFontStyle='bold13'
            color={theme?.gray2}
          />
          <CustomText text={playingFrom} textFontStyle='medium12' color={theme?.gray4} />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <CustomImage source={iconsObject?.moreHorizontal} overrideStyle={headerIcon} />
        </TouchableOpacity>
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
          <CustomText text={currentSong?.artists} textFontStyle='medium12' color={theme?.gray4} />
        </View>
        <View style={songInfoContainerRight}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <CustomImage source={iconsObject?.plus} overrideStyle={songInfoIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <CustomImage source={iconsObject?.moreVertical} overrideStyle={songInfoIcon} />
          </TouchableOpacity>
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

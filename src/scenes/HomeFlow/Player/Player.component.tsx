import { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomClickableIcon, CustomImage, CustomText } from '_atoms';
import { SongDetailBottomSheet, SongInfoBottomSheet } from '_modals';
import { PlayerProgressbar } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import { useSongsStore } from '_stores/songsStore';
import { scale } from '_styles/scaling';
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
  const { songDetailBottomSheetRef, songInfoBottomSheetRef, onMorePress, onDownPress } =
    usePlayer();

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
    <BottomSheetModalProvider>
      <AppWrapper overrideStyle={container}>
        {/* HEADER */}
        <View style={headerContainer}>
          <CustomClickableIcon
            iconName='downFill'
            onPress={onDownPress}
            overrideStyle={{
              left: scale(-4),
              paddingRight: scale(24),
            }}
          />
          <View style={headerTextContainer}>
            <CustomText
              text='PLAYING FROM'
              // text={translate('player.playingFrom')}
              textFontStyle='bold13'
              color={theme?.gray2}
            />
            <CustomText text={playingFrom} textFontStyle='medium12' color={theme?.gray4} />
          </View>
          <CustomClickableIcon
            iconName='moreHorizontal'
            onPress={() => {
              songInfoBottomSheetRef?.current?.expand();
            }}
          />
        </View>

        {/* ARTWORK OR VIDEO */}
        <CustomImage
          source={{ uri: currentSong?.artwork || undefined }}
          overrideStyle={artworkStyle}
          placeholder={imagesObject?.songPlaceholder}
        />

        <View style={{ flex: 1, width: '100%' }}>
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
                <CustomText
                  text={currentSong?.artists}
                  textFontStyle='medium12'
                  color={theme?.gray4}
                />
              )}
            </View>
            <View style={songInfoContainerRight}>
              <CustomClickableIcon
                iconName='plus'
                onPress={() => {
                  NavigationServices.navigate(Scenes.addToPlaylist);
                }}
              />
              <CustomClickableIcon iconName='moreVertical' onPress={onMorePress} />
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
        </View>
        <SongDetailBottomSheet
          onInfoPress={() => {
            songDetailBottomSheetRef?.current?.close();
            songInfoBottomSheetRef?.current?.expand();
          }}
          bottomSheetRef={songDetailBottomSheetRef}
        />
        <SongInfoBottomSheet bottomSheetRef={songInfoBottomSheetRef} />
      </AppWrapper>
    </BottomSheetModalProvider>
  );
};

export default Player;

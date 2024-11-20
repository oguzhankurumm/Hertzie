import { useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomImage, CustomText, Divider } from '_atoms';
import { SelectableTabs } from '_molecules';
import { AppWrapper, MediaList } from '_organisms';
import { SongItem, SongType, useSongsStore } from '_stores/songsStore';
import globalStyles from '_styles/globalStyles';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { useHome } from './hooks/useHome.hook';

const Home = () => {
  const theme = useTheme();
  const { songs } = useSongsStore();

  const { pagerRef, tabs, selectedTab, onTabPress, filteredSongs, onItemPress } = useHome();

  const {
    container,
    tabsContainer,
    headerTextStyle,
    dividerStyle,
    playlistCardItemContainer,
    playlistCardItemBottom,
    artworkPlaceholder,
    artworkPlaceholderIcon,
    songCardItemContainer,
    songCardItemStyle,
    songCardItemImageStyle,
    songCardItemPlayContainer,
    songCardItemPlayIcon,
  } = useMemo(() => styles(theme), [theme]);

  const PlayListCardItem = useCallback(
    // eslint-disable-next-line react/no-unused-prop-types
    (songItem: SongItem) => (
      <TouchableOpacity
        activeOpacity={0.8}
        style={playlistCardItemContainer}
        onPress={() => onItemPress(songItem)}>
        {songItem?.artwork ? (
          <CustomImage
            source={{ uri: songItem?.artwork || undefined }}
            overrideResizeMode='cover'
            overrideStyle={playlistCardItemContainer}
          />
        ) : (
          <View style={artworkPlaceholder}>
            <CustomImage source={iconsObject?.bookOpen} overrideStyle={artworkPlaceholderIcon} />
          </View>
        )}
        <View style={playlistCardItemBottom}>
          <CustomText text={songItem?.title} textFontStyle='medium8' />
        </View>
      </TouchableOpacity>
    ),
    [
      playlistCardItemContainer,
      artworkPlaceholder,
      artworkPlaceholderIcon,
      playlistCardItemBottom,
      onItemPress,
    ]
  );

  const SongCardItem = useCallback(
    // eslint-disable-next-line react/no-unused-prop-types
    (songItem: SongItem) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onItemPress(songItem)}
        style={songCardItemStyle}>
        <CustomImage
          source={{ uri: songItem?.artwork || undefined }}
          overrideStyle={songCardItemImageStyle}
          placeholder={imagesObject?.songPlaceholder}
        />
        <CustomText
          text={songItem?.title}
          textFontStyle='medium8'
          overrideStyle={globalStyles(theme)?.flexOne}
        />
        <View style={songCardItemPlayContainer}>
          <CustomImage source={iconsObject?.play} overrideStyle={songCardItemPlayIcon} />
        </View>
      </TouchableOpacity>
    ),
    [
      songCardItemStyle,
      songCardItemImageStyle,
      theme,
      songCardItemPlayContainer,
      songCardItemPlayIcon,
      onItemPress,
    ]
  );

  return (
    <AppWrapper overrideStyle={container}>
      <SelectableTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabPress={onTabPress}
        overrideContainerStyle={tabsContainer}
      />
      <PagerView
        onPageSelected={({ nativeEvent }) => onTabPress(tabs[nativeEvent.position])}
        ref={pagerRef}
        pageMargin={scale(12)}
        style={globalStyles(theme)?.flexOne}
        initialPage={0}
        scrollEnabled>
        <View key='0'>
          <CustomText
            text={String('Featured Playlists').toLocaleUpperCase()}
            textFontStyle='extraBold15'
            color={theme?.white}
            overrideStyle={headerTextStyle}
          />
          <View style={globalStyles(theme)?.rowSpaceBetween}>
            {songs
              ?.slice(0, 3)
              .map(item => <PlayListCardItem key={`playlist-${item.id}`} {...item} />)}
          </View>
          <Divider overrideStyle={dividerStyle} />
          <CustomText
            text={String('Featured Songs').toLocaleUpperCase()}
            textFontStyle='extraBold15'
            color={theme?.white}
            overrideStyle={headerTextStyle}
          />
          <View style={songCardItemContainer}>
            {songs?.slice(0, 10).map(item => <SongCardItem key={`song-${item.id}`} {...item} />)}
          </View>
          <Divider overrideStyle={dividerStyle} />
        </View>
        <View key='1'>
          <MediaList
            data={filteredSongs}
            type={SongType.Audio}
            mode='list'
            onItemPress={onItemPress}
          />
        </View>
        <View key='2'>
          <CustomText text='Playlists' />
        </View>
        <View key='3'>
          <CustomText text='Videos' />
        </View>
      </PagerView>
    </AppWrapper>
  );
};

export default Home;

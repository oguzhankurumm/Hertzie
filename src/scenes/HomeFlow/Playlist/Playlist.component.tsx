import { useMemo } from 'react';
import { ScrollView } from 'react-native';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import imagesObject from '_assets/images/imagesObject';
import { CustomImage } from '_atoms';
import { InnerHeader, SearchBar } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper, MediaList } from '_organisms';
import { SongType, useSongsStore } from '_stores/songsStore';
import globalStyles from '_styles/globalStyles';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import { useHome } from '../Home/hooks/useHome.hook';
import styles from './Playlist.style';

// import { usePlaylist } from './hooks/usePlaylist.hook';

const Playlist = () => {
  const theme = useTheme();

  const { currentSong } = useSongsStore();
  // const { onMorePress } = usePlaylist();
  const { filteredSongs, onItemPress } = useHome();

  const { container, innerHeaderStyle, artworkStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <BottomSheetModalProvider>
      <AppWrapper overrideStyle={container}>
        <InnerHeader
          showBackIcon
          overrideTitleFontStyle='semibold14'
          titlePosition='left'
          showSearchIcon={false}
          overrideContainerStyle={innerHeaderStyle}
        />

        <ScrollView
          style={globalStyles(theme)?.flexOne}
          contentContainerStyle={{ paddingHorizontal: scale(16) }}
          showsVerticalScrollIndicator={false}>
          <SearchBar
            placeholder='FIND THE SONG'
            showFilterButton
            onFilterPress={() => {}}
            showSortButton
            onSortPress={() => {}}
          />

          {/* ARTWORK  */}
          <CustomImage
            source={{ uri: currentSong?.artwork || undefined }}
            overrideStyle={artworkStyle}
            placeholder={imagesObject?.songPlaceholder}
          />

          <MediaList
            data={filteredSongs}
            type={SongType.Audio}
            mode='list'
            customBigTitle='Playlist Name'
            onItemPress={onItemPress}
            showAddButton
            showMoreIcon
            showPlayButton
            scrollEnabled={false}
            onAddPress={() => {
              NavigationServices.navigate(Scenes.addToPlaylist);
            }}
          />
        </ScrollView>
      </AppWrapper>
    </BottomSheetModalProvider>
  );
};

export default Playlist;

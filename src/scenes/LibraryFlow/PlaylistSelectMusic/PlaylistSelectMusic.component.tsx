import { useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { CustomButton, CustomCheckBox, CustomText } from '_atoms';
import { SortByBottomSheet } from '_modals';
import { InnerHeader, SearchBar, SongListCard } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import { useHome } from '_scenes/HomeFlow/Home/hooks/useHome.hook';
import { SongType, useSongsStore } from '_stores/songsStore';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './PlaylistSelectMusic.style';
import { usePlaylistSelectMusic } from './hooks/usePlaylistSelectMusic.hook';

const PlaylistSelectMusic = () => {
  const theme = useTheme();
  const { isPlaying } = useSongsStore();
  const { filteredSongs } = useHome();

  const {
    sortBottomSheetRef,
    filterBottomSheetRef,
    selectedIds,
    handleSelectItem,
    handleSelectAll,
  } = usePlaylistSelectMusic();

  const { container, innerHeaderStyle, selectAllContainer, doneButtonContainer, doneButtonStyle } =
    useMemo(() => styles(theme, isPlaying), [theme, isPlaying]);

  const ItemSeparatorComponent = useCallback(
    () => <View style={{ height: verticalScale(16) }} />,
    []
  );

  return (
    <AppWrapper overrideStyle={container}>
      <InnerHeader
        showBackIcon
        title={selectedIds.length > 0 ? `${selectedIds.length} SELECTED` : 'SELECT MUSIC'}
        overrideTitleFontStyle='semibold14'
        titlePosition='left'
        showSearchIcon={false}
        overrideContainerStyle={innerHeaderStyle}
      />
      <SearchBar
        placeholder='FIND THE SONG'
        showFilterButton
        onFilterPress={() => filterBottomSheetRef.current?.expand()}
        showSortButton
        onSortPress={() => sortBottomSheetRef.current?.expand()}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={handleSelectAll} style={selectAllContainer}>
        <CustomCheckBox
          disabled
          selected={selectedIds.length === filteredSongs.length}
          overrideContainerStyle={{ flex: 0 }}
          overrideCheckBoxStyle={{
            borderColor: theme?.gray6,
          }}
        />
        <CustomText text='Select All' textFontStyle='semibold12' color={theme?.gray6} />
      </TouchableOpacity>
      <FlashList
        data={filteredSongs}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        estimatedItemSize={verticalScale(100)}
        estimatedListSize={{
          height: verticalScale(100),
          width: verticalScale(100),
        }}
        renderItem={({ item }) => {
          return (
            <SongListCard
              {...item}
              type={SongType.Audio}
              mode='compact'
              onItemPress={() => handleSelectItem(item.id)}
              showMoreIcon={false}
              onMorePress={() => {}}
              selectable
              selected={selectedIds.map(id => id).includes(item.id)}
              toggleSelected={() => handleSelectItem(item.id)}
            />
          );
        }}
      />
      <View style={doneButtonContainer}>
        <CustomButton
          title='Done'
          onPress={() => NavigationServices.navigate(Scenes.playlist)}
          overrideStyle={doneButtonStyle}
        />
      </View>
      <SortByBottomSheet bottomSheetRef={filterBottomSheetRef} />
      <SortByBottomSheet bottomSheetRef={sortBottomSheetRef} />
    </AppWrapper>
  );
};

export default PlaylistSelectMusic;

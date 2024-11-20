import { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { PlaylistHeader, SongListCard } from '_molecules';
import { SongType } from '_stores/songsStore';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './MediaList.style';
import { MediaListProps } from './MediaList.types';

const MediaList: FC<MediaListProps> = ({
  data,
  type = SongType.Audio,
  showHeader = true,
  showShuffleButton = true,
  showPlayButton = true,
  showAddButton = false,
  onShufflePress,
  onPlayPress,
  onAddPress,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { containerStyle, listContainer } = useMemo(() => styles(theme), [theme]);

  const ItemSeparatorComponent = useCallback(
    () => <View style={{ height: verticalScale(16) }} />,
    []
  );

  return (
    <View style={[containerStyle, overrideContainerStyle]}>
      {showHeader && (
        <PlaylistHeader
          count={data?.length ?? 0}
          title={type}
          showPlay={showPlayButton}
          showShuffle={showShuffleButton}
          showAdd={showAddButton}
          onShufflePress={onShufflePress}
          onPlayPress={onPlayPress}
          onAddPress={onAddPress}
        />
      )}
      <FlashList
        data={data}
        renderItem={({ item }) => {
          return (
            <SongListCard
              title={item?.title}
              artists={item?.artists}
              artwork={item?.artwork}
              onItemPress={() => {}}
              onMorePress={() => {}}
            />
          );
        }}
        contentContainerStyle={listContainer}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorComponent}
        estimatedItemSize={verticalScale(100)}
        estimatedListSize={{
          height: verticalScale(100),
          width: verticalScale(100),
        }}
      />
    </View>
  );
};

export default MediaList;

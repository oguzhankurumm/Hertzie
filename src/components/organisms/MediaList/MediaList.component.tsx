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
  onItemPress,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { containerStyle, listContentContainerStyle } = useMemo(() => styles(theme), [theme]);

  const ItemSeparatorComponent = useCallback(
    () => <View style={{ height: verticalScale(16) }} />,
    []
  );

  return (
    <View style={[containerStyle, overrideContainerStyle]}>
      {showHeader && (
        <PlaylistHeader
          count={data?.length ?? 0}
          title={type === SongType.Audio ? 'Songs' : type === SongType.Radio ? 'Radios' : 'Videos'}
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
        contentContainerStyle={listContentContainerStyle}
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
              title={item?.title}
              artists={item?.artists}
              artwork={item?.artwork}
              onItemPress={() => onItemPress(item)}
              onMorePress={() => {}}
            />
          );
        }}
      />
    </View>
  );
};

export default MediaList;

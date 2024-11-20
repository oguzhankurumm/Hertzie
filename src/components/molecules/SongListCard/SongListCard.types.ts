import { StyleProp, ViewStyle } from 'react-native';

import type { SongItem } from '_stores/songsStore';

type SongListCardPropsTypes = {
  title: SongItem['title'];
  artwork: SongItem['artwork'];
  artists: SongItem['artists'];
  onMorePress?: () => void;
  onItemPress?: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { SongListCardPropsTypes };

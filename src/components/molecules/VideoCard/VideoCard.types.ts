import { StyleProp, ViewStyle } from 'react-native';

import type { SongItem } from '_stores/songsStore';

type VideoCardPropsTypes = {
  title: SongItem['title'];
  artwork: SongItem['artwork'];
  duration: SongItem['duration'];
  quality: string;
  type?: 'list' | 'grid';
  showMoreIcon?: boolean;
  onMorePress?: () => void;
  onItemPress?: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { VideoCardPropsTypes };

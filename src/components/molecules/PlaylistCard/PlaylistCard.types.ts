import { StyleProp, ViewStyle } from 'react-native';

import type { SongItem } from '_stores/songsStore';

type PlaylistCardPropsTypes = {
  title: SongItem['title'];
  artwork: SongItem['artwork'];
  count?: number;
  type?: 'list' | 'grid';
  showPinIcon?: boolean;
  onItemPress?: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { PlaylistCardPropsTypes };

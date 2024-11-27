import { StyleProp, ViewStyle } from 'react-native';

import type { SongItem } from '_stores/songsStore';

type SongListCardPropsTypes = {
  title: SongItem['title'];
  artwork: SongItem['artwork'];
  artists: SongItem['artists'];
  bitrate?: SongItem['bitrate'];
  location?: SongItem['location'];
  language?: SongItem['language'];
  type?: SongItem['type'];
  showMoreIcon?: boolean;
  onMorePress?: () => void;
  onItemPress?: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { SongListCardPropsTypes };

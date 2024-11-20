import { StyleProp, ViewStyle } from 'react-native';

import { SongItem, SongType } from '_stores/songsStore';
import MainTypes from '_types/index';

type MediaListProps = MainTypes & {
  data: SongItem[];
  type: SongType;
  mode?: 'list' | 'grid';
  showHeader?: boolean;
  showShuffleButton?: boolean;
  showPlayButton?: boolean;
  showAddButton?: boolean;
  onShufflePress?: () => void;
  onPlayPress?: () => void;
  onAddPress?: () => void;
  onItemPress: (song: SongItem) => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { MediaListProps };

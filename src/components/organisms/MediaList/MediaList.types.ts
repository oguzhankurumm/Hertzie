import { StyleProp, ViewStyle } from 'react-native';

import { SongItem, SongType } from '_stores/songsStore';
import MainTypes from '_types/index';

type MediaListProps = MainTypes & {
  data: SongItem[];
  customBigTitle?: string;
  type: SongType;
  mode?: 'list' | 'grid';
  showHeader?: boolean;
  showMoreIcon?: boolean;
  showShuffleButton?: boolean;
  showPlayButton?: boolean;
  showAddButton?: boolean;
  onShufflePress?: () => void;
  onPlayPress?: () => void;
  onAddPress?: () => void;
  onItemPress: (song: SongItem) => void;
  selectable?: boolean;
  selected?: boolean;
  toggleSelected?: () => void;
  scrollEnabled?: boolean;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { MediaListProps };

import { StyleProp, ViewStyle } from 'react-native';

type PlaylistHeaderPropsTypes = {
  count: number;
  title: string;
  showShuffle?: boolean;
  showPlay?: boolean;
  showAdd?: boolean;
  onShufflePress?: () => void;
  onPlayPress?: () => void;
  onAddPress?: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { PlaylistHeaderPropsTypes };

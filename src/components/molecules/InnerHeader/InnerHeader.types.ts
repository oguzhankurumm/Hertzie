import { StyleProp, ViewStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type InnerHeaderProps = MainTypes & {
  title: string;
  titlePosition?: 'center' | 'left';
  showBackIcon?: boolean;
  showSearchIcon?: boolean;
  onSearchIconPress?: () => void;
  showAddIcon?: boolean;
  onAddIconPress?: () => void;
  overrideTitleFontStyle?: TextStyleTypes;
  overrideSubtitleFontStyle?: TextStyleTypes;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { InnerHeaderProps };

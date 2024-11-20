import { StyleProp, ViewStyle } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type InnerHeaderProps = MainTypes & {
  title: string;
  subtitle?: string;
  iconName?: keyof typeof iconsObject;
  overrideTitleFontStyle?: TextStyleTypes;
  overrideSubtitleFontStyle?: TextStyleTypes;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { InnerHeaderProps };

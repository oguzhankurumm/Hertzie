import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type AuthTitlePropsTypes = MainTypes & {
  onPress?: () => void;
  overrideStyle?: StyleProp<ViewStyle>;
  title: string;
  icon?: ImageSourcePropType;
  redirectText?: string;
  overrideFontStyle?: TextStyleTypes;
  overrideTitleStyle?: StyleProp<TextStyle>;
};

export type { AuthTitlePropsTypes };

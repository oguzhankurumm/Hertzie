import type { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native/types';

import { TextStyleTypes } from '_styles/typography';
import type MainTypes from '_types/index';

type RadioButtonPropsTypes = MainTypes & {
  onPress?: () => void;
  disabled?: boolean;
  active?: boolean;
  title?: string;
  icon?: ImageSourcePropType;
  description?: string;
  overrideContainerCircle?: StyleProp<ViewStyle>;
  overrideCircleContainerStyle?: StyleProp<ViewStyle>;
  overrideInnerCircleStyle?: StyleProp<ViewStyle>;
  overrideTextContainerStyle?: StyleProp<ViewStyle>;
  overrideTitleStyle?: StyleProp<TextStyle>;
  overrideDescriptionStyle?: StyleProp<TextStyle>;
  overrideTitleFontStyle?: TextStyleTypes;
  overrideDescriptionFontStyle?: TextStyleTypes;
};

export type { RadioButtonPropsTypes };

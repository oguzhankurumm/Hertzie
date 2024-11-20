import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native/types';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type CustomSwitchPropsTypes = MainTypes & {
  active?: boolean;
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideCircleStyle?: StyleProp<ViewStyle>;
  overrideTextStyle?: StyleProp<TextStyle>;
  overrideTextFontStyle?: TextStyleTypes;
};

export type { CustomSwitchPropsTypes };

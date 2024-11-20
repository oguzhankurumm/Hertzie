import { StyleProp, TextStyle, ViewStyle } from 'react-native/types';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type CustomCheckBoxPropsTypes = MainTypes & {
  touchable?: boolean;
  onPress?: any;
  onPressClickableText?: () => void;
  selected?: boolean;
  error?: string | boolean;
  disabled?: boolean;
  title?: string;
  description?: string;
  clickableTextTitle?: string;
  hintText?: string;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideCheckBoxStyle?: StyleProp<ViewStyle>;
  overrideTextContainerStyle?: StyleProp<ViewStyle>;
  overrideTitleStyle?: StyleProp<TextStyle>;
  overrideDescriptionStyle?: StyleProp<TextStyle>;
  overrideClickableTextStyle?: StyleProp<TextStyle>;
  overrideTitleFontStyle?: TextStyleTypes;
  overrideClickableTextFontStyle?: TextStyleTypes;
  overrideDescriptionFontStyle?: TextStyleTypes;
  overrideTitleAndClickableTextContainerStyle?: StyleProp<ViewStyle>;
  overrideHintTextFontStyle?: TextStyleTypes;
  overrideHintTextStyle?: StyleProp<TextStyle>;
};

export type { CustomCheckBoxPropsTypes };

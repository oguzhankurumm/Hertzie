import { ReactElement, ReactNode } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type CustomTextPropsTypes = MainTypes & {
  text?: string | null | number | boolean | ReactElement | Iterable<ReactNode>;
  color?: string;
  highlightedTexts?: string[];
  highlightColor?: string;
  overrideStyle?: StyleProp<TextStyle>;
  restTextProps?: TextProps;
  textFontStyle?: TextStyleTypes;
  onPress?: () => void;
};

export type { CustomTextPropsTypes };

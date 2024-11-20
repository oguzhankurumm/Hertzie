import { ReactElement, ReactNode } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type CustomTextPropsTypes = MainTypes & {
  text?: string | null | number | boolean | ReactElement | Iterable<ReactNode>;
  color?: string;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  overrideStyle?: StyleProp<TextStyle>;
  restTextProps?: TextProps;
  textFontStyle?: TextStyleTypes;
  onPress?: () => void;
};

export type { CustomTextPropsTypes };

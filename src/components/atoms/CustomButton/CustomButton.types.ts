import { ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type CustomButtonPropsTypes = MainTypes & {
  onPress: () => void;
  overrideStyle?: StyleProp<ViewStyle>;
  title: string;
  overrideFontStyle?: TextStyleTypes;
  overrideTitleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  loaderColor?: string;
  activeOpacity?: number;
  leftChild?: ReactElement;
  centerChild?: ReactElement;
  rightChild?: ReactElement;
};

export type { CustomButtonPropsTypes };

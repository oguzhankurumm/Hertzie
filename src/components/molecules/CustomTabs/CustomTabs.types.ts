import { ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes, { TabTypes } from '_types/index';

type CustomTabsPropsTypes = MainTypes & {
  tabs: { title: string }[];
  onPress?: Function;
  overrideTextFontStyle?: TextStyleTypes;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideButtonStyle?: StyleProp<ViewStyle>;
  overrideActiveButtonStyle?: StyleProp<ViewStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
  inactiveTextStyle?: StyleProp<TextStyle>;
  type?: TabTypes;
  colored?: boolean;
  overrideColor?: string;
  overrideActiveIndex?: number;
  rightChild?: ReactElement;
};

export type { CustomTabsPropsTypes };

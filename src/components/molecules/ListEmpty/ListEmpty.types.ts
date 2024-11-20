import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { CustomTextPropsTypes } from '../../atoms/CustomText/CustomText.types';

type ListEmptyPropsTypes = {
  overrideText?: string;
  overrideTextFontStyle?: CustomTextPropsTypes['textFontStyle'];
  restTextProps?: CustomTextPropsTypes;
  overrideTextStyle?: StyleProp<TextStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { ListEmptyPropsTypes };

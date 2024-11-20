import { ReactElement } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { TextStyleTypes } from '_styles/typography';
import MainTypes from '_types/index';

type LabeledTextInputPropsTypes = MainTypes & {
  title?: string;
  required?: boolean;
  handleChange: (text: string) => void;
  inputValue?: string;
  overrideInputStyle?: StyleProp<TextStyle>;
  overrideInputContainerStyle?: StyleProp<ViewStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overridePlaceholderTextColor?: string;
  error?: string | boolean;
  disabled?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  hintText?: string;
  maxLength?: number;
  showMaxLength?: boolean;
  hasReturnKeyType?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onBlur?: Function;
  onFocus?: Function;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  overrideTitleFontStyle?: TextStyleTypes;
  overrideTitleStyle?: StyleProp<TextStyle>;
  overrideHintTextFontStyle?: TextStyleTypes;
  refProp?: any;
  leftChild?: ReactElement;
  rightChild?: ReactElement;
  overrideHintTextStyle?: StyleProp<TextStyle>;
  customTextInputProps?: TextInputProps;
};

export type { LabeledTextInputPropsTypes };

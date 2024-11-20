import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import MainTypes from '_types/index';

interface Item {
  name?: string | number | boolean;
  value: any;
  label: string;
  color?: string;
  inputLabel?: string;
  key?: string | number;
}

type CustomDropdownPropsTypes = MainTypes & {
  value?: any;
  required?: boolean;
  items?: Item[];
  title?: string;
  errorText?: string;
  placeholder?: string;
  onFocus?: (arg0?: boolean) => void;
  overrideTitleStyle?: StyleProp<TextStyle>;
  overrideErrorTextStyle?: StyleProp<TextStyle>;
  onValueSelected?: (value: any, index: number) => void;
  disabled?: boolean;
  search?: boolean;
  dropdownPosition?: 'top' | 'bottom';
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overridePlaceholderStyle?: StyleProp<TextStyle>;
};

export type { CustomDropdownPropsTypes, Item };

import type { StyleProp, TextStyle } from 'react-native';

import MainTypes from '_types/index';

interface Item {
  value: any;
  label: string;
  color?: string;
  inputLabel?: string;
  key?: string | number;
}

type CustomSelectPropsTypes = MainTypes & {
  value?: any;
  items?: Item[];
  title?: string;
  required?: boolean;
  errorText?: string;
  placeholder?: Item | {};
  onFocus?: (arg0?: boolean) => void;
  overrideContainerStyle?: StyleProp<TextStyle>;
  overrideTitleStyle?: StyleProp<TextStyle>;
  overrideErrorTextStyle?: StyleProp<TextStyle>;
  onValueSelected?: (item: any) => void;
  dropdownPosition?: 'top' | 'bottom';
  disabled?: boolean;
};

export type { CustomSelectPropsTypes, Item };

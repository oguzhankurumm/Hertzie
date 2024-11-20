import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { AndroidNativeProps, IOSNativeProps } from '@react-native-community/datetimepicker';

import MainTypes from '_types/index';

type CustomDateTimePickerPropsTypes = MainTypes & {
  value?: number | Date;
  title?: string;
  required?: boolean;
  customFormat?: string;
  hintText?: string;
  errorText?: string;
  disabled?: boolean;
  placeholder?: string;
  snapPoints?: string;
  minimumDate?: Date;
  maximumDate?: Date;
  overrideModalStyle?: StyleProp<ViewStyle>;
  overrideValueStyle?: StyleProp<TextStyle>;
  overrideTitleStyle?: StyleProp<TextStyle>;
  overrideHandleStyle?: StyleProp<ViewStyle>;
  overrideHintTextStyle?: StyleProp<TextStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideErrorTextStyle?: StyleProp<TextStyle>;
  overrideItemsWrapperStyle?: StyleProp<ViewStyle>;
  overrideItemContainerStyle?: StyleProp<ViewStyle>;
  onValueSelected?: (value: Date) => void;
  mode?: IOSNativeProps['mode'];
  androidMode?: AndroidNativeProps['mode'];
};

export type { CustomDateTimePickerPropsTypes };

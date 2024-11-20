import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputProps,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';

import { CustomTextInputPropsTypes } from 'src/components/atoms/CustomTextInput/CustomTextInput.types';

type SearchBarPropsTypes = {
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideInputStyle?: StyleProp<ViewStyle>;
  searchHandler?: (text: string) => void;
  overrideSearchInputContainerStyle?: StyleProp<ViewStyle>;
  overridePlaceholderTextColor?: string;
  inputValue?: string;
  placeholder?: string;
  restSearchInputProps?: TextInputProps;
  onSubmitSearch?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  showCloseButton?: boolean;
  goBackHandler?: () => void;
  maxLength?: CustomTextInputPropsTypes['maxLength'];
};

export type { SearchBarPropsTypes };

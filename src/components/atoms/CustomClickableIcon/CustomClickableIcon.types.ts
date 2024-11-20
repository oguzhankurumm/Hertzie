import { StyleProp, ViewStyle } from 'react-native/types';

import iconsObject from '_assets/icons/iconsObject';
import MainTypes from '_types/index';

type CustomClickableIconPropsTypes = MainTypes & {
  onPress?: () => void;
  iconName: keyof typeof iconsObject;
  disabled?: boolean | undefined;
  noTint?: boolean | undefined;
  overrideStyle?: StyleProp<ViewStyle> | undefined;
};

export type { CustomClickableIconPropsTypes };

import { StyleProp, ViewStyle } from 'react-native/types';

import { ImageStyle } from 'expo-image';

import iconsObject from '_assets/icons/iconsObject';
import MainTypes from '_types/index';

type CustomClickableIconPropsTypes = MainTypes & {
  onPress?: () => void;
  iconName: keyof typeof iconsObject;
  disabled?: boolean | undefined;
  noTint?: boolean | undefined;
  overrideStyle?: StyleProp<ViewStyle> | undefined;
  overrideIconStyle?: StyleProp<ImageStyle> | undefined;
};

export type { CustomClickableIconPropsTypes };

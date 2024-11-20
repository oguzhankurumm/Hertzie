import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import MainTypes from '_types/index';

type AppWrapperProps = MainTypes & {
  children?: ReactNode;
  overrideMainContainerStyle?: StyleProp<ViewStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideStyle?: StyleProp<ViewStyle>;
  removeSafeAreaView?: boolean;
};

export type { AppWrapperProps };

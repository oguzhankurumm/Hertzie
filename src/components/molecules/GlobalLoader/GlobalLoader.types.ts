import { StyleProp, ViewStyle } from 'react-native';

import { CustomActivityIndicatorPropsTypes } from 'src/components/atoms/CustomActivityIndicator/CustomActivityIndicator.types';

import MainTypes from '_types/index';

type GlobalLoaderPropsTypes = MainTypes & {
  overrideContainerStyle?: StyleProp<ViewStyle> | undefined;
  activityIndicatorProps?: CustomActivityIndicatorPropsTypes | undefined;
};

export type { GlobalLoaderPropsTypes };

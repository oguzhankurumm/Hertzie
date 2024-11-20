import { StyleProp, ViewStyle } from 'react-native';

import MainTypes from '_types/index';

type HeaderMainProps = MainTypes & {
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideMainContainerStyle?: StyleProp<ViewStyle>;
};

export type { HeaderMainProps };

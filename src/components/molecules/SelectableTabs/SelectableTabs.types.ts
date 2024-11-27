import { StyleProp, ViewStyle } from 'react-native';

type SelectableTabsPropsTypes = {
  tabs: string[];
  selectedTab: string;
  onTabPress: (tab: string) => void;
  bounces?: boolean;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { SelectableTabsPropsTypes };

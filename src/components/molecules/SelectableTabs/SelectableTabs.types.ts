import { StyleProp, ViewStyle } from 'react-native';

type SelectableTabsPropsTypes = {
  tabs: string[];
  selectedTab: string;
  onTabPress: (tab: string) => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { SelectableTabsPropsTypes };

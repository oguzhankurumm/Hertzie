import { FC, useMemo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles, { getStyleByStatus } from './SelectableTabs.style';
import { SelectableTabsPropsTypes } from './SelectableTabs.types';

const SelectableTabs: FC<SelectableTabsPropsTypes> = ({
  tabs,
  selectedTab,
  onTabPress,
  bounces = true,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { container } = useMemo(() => styles(theme), [theme]);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={bounces}
        contentContainerStyle={[container, overrideContainerStyle]}>
        {tabs?.map((tab: string) => {
          const isSelected = selectedTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              activeOpacity={0.8}
              style={getStyleByStatus(theme, isSelected).tabStyle}
              onPress={() => onTabPress(tab)}>
              <CustomText text={tab} color={theme?.white} textFontStyle='semibold12' />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SelectableTabs;

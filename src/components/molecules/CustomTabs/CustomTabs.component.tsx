import { FC, ReactNode, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CustomText } from '_atoms';
import { useTheme } from '_styles/theming';
import { TabTypes } from '_types/index';
import { getAutomationTestingProp } from '_utils/helpers';

import { getStyleByStatus } from './CustomTabs.style';
import { CustomTabsPropsTypes } from './CustomTabs.types';

const CustomTabs: FC<CustomTabsPropsTypes> = ({
  tabs,
  onPress = () => {},
  overrideContainerStyle,
  overrideTextFontStyle = 'bodyMedium',
  overrideButtonStyle,
  overrideActiveButtonStyle,
  activeTextStyle,
  inactiveTextStyle,
  overrideActiveIndex = 0,
  type = TabTypes.Default,
  colored = false,
  overrideColor,
  rightChild,
  testId = '',
}) => {
  const theme = useTheme();

  const {
    containerStyle,
    inactiveButtonStyle,
    activeButtonStyle,
    inactiveButtonTextStyle,
    activeButtonTextStyle,
  } = useMemo(
    () =>
      getStyleByStatus({
        theme,
        type,
        colored,
        overrideColor,
      }),
    [theme, type, colored, overrideColor]
  );

  return (
    <View style={[containerStyle, overrideContainerStyle]} {...getAutomationTestingProp(testId)}>
      {tabs.map((item, index) => (
        <TouchableOpacity
          key={`tabs-${item.title}`}
          activeOpacity={1}
          onPress={() => onPress(index)}
          disabled={overrideActiveIndex === index}
          style={
            index === overrideActiveIndex
              ? [activeButtonStyle, overrideActiveButtonStyle]
              : [inactiveButtonStyle, overrideButtonStyle]
          }>
          <CustomText
            textFontStyle={overrideTextFontStyle}
            overrideStyle={
              index === overrideActiveIndex
                ? [activeButtonTextStyle, activeTextStyle]
                : [inactiveButtonTextStyle, inactiveTextStyle]
            }
            text={item?.title}
          />
        </TouchableOpacity>
      ))}
      {rightChild as ReactNode}
    </View>
  );
};

export default CustomTabs;

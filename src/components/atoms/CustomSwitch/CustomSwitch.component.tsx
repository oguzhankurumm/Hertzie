import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomText from '../CustomText/CustomText.component';
import { getStyleByStatus } from './CustomSwitch.style';
import { CustomSwitchPropsTypes } from './CustomSwitch.types';

const CustomSwitch: FC<CustomSwitchPropsTypes> = ({
  active = false,
  text = '',
  onPress = () => {},
  disabled = false,
  overrideContainerStyle,
  overrideCircleStyle,
  overrideTextStyle,
  overrideTextFontStyle = 'body400',
  testId = '',
}) => {
  const theme = useTheme();

  const { containerStyle, circleStyle, textStyle } = useMemo(
    () =>
      getStyleByStatus({
        theme,
        disabled,
        active,
      }),
    [active, disabled, theme]
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[containerStyle, overrideContainerStyle]}
      onPress={onPress}
      {...getAutomationTestingProp(testId)}>
      <View style={[circleStyle, overrideCircleStyle]} />
      <CustomText
        text={text}
        testId={`${testId}.text`}
        overrideStyle={[textStyle, overrideTextStyle]}
        textFontStyle={overrideTextFontStyle}
      />
    </TouchableOpacity>
  );
};

export default CustomSwitch;

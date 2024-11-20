import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getActualImageSize, getAutomationTestingProp } from '_utils/helpers';

import CustomImage from '../CustomImage/CustomImage.component';
import CustomText from '../CustomText/CustomText.component';
import styles, { getStyleByStatus } from './RadioButton.style';
import { RadioButtonPropsTypes } from './RadioButton.types';

const iconHeight = scale(15);

const RadioButton: FC<RadioButtonPropsTypes> = ({
  onPress = () => {},
  disabled = false,
  active = false,
  title,
  icon,
  description,
  overrideContainerCircle,
  overrideCircleContainerStyle,
  overrideInnerCircleStyle,
  overrideTextContainerStyle,
  overrideTitleStyle,
  overrideDescriptionStyle,
  overrideTitleFontStyle = 'bodyRegular',
  overrideDescriptionFontStyle = 'bodyRegular',
  testId = '',
}) => {
  const theme = useTheme();
  const { containerStyle } = useMemo(() => styles(theme), [theme]);
  const {
    iconStyle,
    contentContainerStyle,
    circleContainerStyle,
    innerCircleStyle,
    titleTextStyle,
    descriptionTextStyle,
  } = useMemo(
    () =>
      getStyleByStatus({
        theme,
        disabled,
        active,
      }),
    [active, disabled, theme]
  );

  const iconWidth = useMemo(() => iconHeight * getActualImageSize(icon || {}).aspectRatio, [icon]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      {...getAutomationTestingProp(testId)}
      style={[containerStyle, overrideContainerCircle]}>
      <View style={[circleContainerStyle, overrideCircleContainerStyle]}>
        {active && <View style={[innerCircleStyle, overrideInnerCircleStyle]} />}
      </View>

      <View style={contentContainerStyle}>
        {icon && (
          <CustomImage
            overrideStyle={[
              {
                width: iconWidth,
                height: iconHeight,
              },
              iconStyle,
            ]}
            source={icon}
            testId={`${testId}.icon`}
          />
        )}
        <View style={overrideTextContainerStyle}>
          {title && (
            <CustomText
              text={title}
              testId={`${testId}.title`}
              textFontStyle={overrideTitleFontStyle}
              overrideStyle={[titleTextStyle, overrideTitleStyle]}
            />
          )}
          {description && (
            <CustomText
              text={description}
              testId={`${testId}.description`}
              textFontStyle={overrideDescriptionFontStyle}
              overrideStyle={[descriptionTextStyle, overrideDescriptionStyle]}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;

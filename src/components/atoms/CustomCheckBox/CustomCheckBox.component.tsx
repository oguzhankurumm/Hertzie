/* eslint-disable react/prop-types */
import { FC, useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { IconCheck } from '_assets/icons/svgsObject';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import CustomText from '../CustomText/CustomText.component';
import { RenderHtmlContent } from '../RenderHtmlContent/RenderHtmlContent';
import styles, { getStyleByStatus } from './CustomCheckBox.style';
import { CustomCheckBoxPropsTypes } from './CustomCheckBox.types';

const CustomCheckBox: FC<CustomCheckBoxPropsTypes> = ({
  touchable = true,
  onPress,
  onPressClickableText = () => {},
  selected = false,
  error,
  disabled = false,
  title,
  description,
  clickableTextTitle,
  hintText,
  overrideContainerStyle,
  overrideCheckBoxStyle,
  overrideTextContainerStyle,
  overrideTitleAndClickableTextContainerStyle,
  overrideTitleStyle,
  overrideClickableTextStyle,
  overrideDescriptionStyle,
  overrideHintTextStyle,
  // overrideTitleFontStyle = 'bodyRegular',
  overrideClickableTextFontStyle = 'bodyRegular',
  overrideDescriptionFontStyle = 'bodyRegular',
  overrideHintTextFontStyle = 'bodyRegular',
  testId = '',
}) => {
  const theme = useTheme();

  const {
    mainContainerStyle,
    textContainerStyle,
    titleAndClickableTextContainerStyle,
    errorHintTextStyle,
    hintTextStyle,
  } = useMemo(() => styles(theme), [theme]);

  const { checkboxContainerStyle, titleTextStyle, descriptionTextStyle } = useMemo(
    () => getStyleByStatus({ theme, disabled, selected }),
    [disabled, selected, theme]
  );

  const RenderTouchable = useCallback(
    ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
      if (touchable) {
        return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
      }
      return <View {...props}>{children}</View>;
    },
    [touchable]
  );

  return (
    <>
      <RenderTouchable
        style={[mainContainerStyle, overrideContainerStyle]}
        activeOpacity={1}
        onPress={onPress}
        disabled={disabled}
        {...getAutomationTestingProp(testId)}>
        <View style={[checkboxContainerStyle, overrideCheckBoxStyle]}>
          {selected && !disabled && (
            <IconCheck size={scale(12)} stroke={scale(4)} color={theme?.success[500]} />
          )}
        </View>

        <View style={[textContainerStyle, overrideTextContainerStyle]}>
          <View
            style={[
              titleAndClickableTextContainerStyle,
              overrideTitleAndClickableTextContainerStyle,
            ]}>
            {title && (
              <View style={[overrideTitleStyle]}>
                <RenderHtmlContent html={title} testId='customCheckBox.title.renderHtmlContent' />
              </View>
            )}
            {/* <CustomText
            text={title}
            testId={`${testId}.title`}
            overrideStyle={[titleTextStyle, overrideTitleStyle]}
            textFontStyle={overrideTitleFontStyle}
          /> */}
            {clickableTextTitle && (
              <RenderTouchable onPress={onPressClickableText}>
                <CustomText
                  text={clickableTextTitle}
                  testId={`${testId}.clickableTextTitle`}
                  overrideStyle={[titleTextStyle, overrideClickableTextStyle]}
                  textFontStyle={overrideClickableTextFontStyle}
                />
              </RenderTouchable>
            )}
          </View>
          {description && (
            <CustomText
              text={description}
              testId={`${testId}.description`}
              overrideStyle={[descriptionTextStyle, overrideDescriptionStyle]}
              textFontStyle={overrideDescriptionFontStyle}
            />
          )}
        </View>
      </RenderTouchable>
      {((!!error && typeof error === 'string') || (!!hintText && typeof hintText === 'string')) && (
        <CustomText
          text={(!!error && typeof error === 'string' ? error : hintText) || ''}
          textFontStyle={overrideHintTextFontStyle}
          overrideStyle={[error ? errorHintTextStyle : hintTextStyle, overrideHintTextStyle]}
        />
      )}
    </>
  );
};

export default CustomCheckBox;

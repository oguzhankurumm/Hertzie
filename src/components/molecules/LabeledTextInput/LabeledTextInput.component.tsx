import { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import CustomTextInput from '../../atoms/CustomTextInput/CustomTextInput.component';
import styles from './LabeledTextInput.style';
import { LabeledTextInputPropsTypes } from './LabeledTextInput.types';

const LabeledTextInput: FC<LabeledTextInputPropsTypes> = ({
  title = '',
  required = false,
  handleChange = () => {},
  inputValue,
  overrideInputStyle,
  overrideInputContainerStyle,
  overrideContainerStyle,
  overridePlaceholderTextColor,
  error,
  disabled = false,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  hintText,
  maxLength,
  showMaxLength,
  hasReturnKeyType = true,
  returnKeyType = 'default',
  onBlur = () => {},
  onFocus = () => {},
  autoCapitalize,
  onSubmitEditing = () => {},
  overrideTitleFontStyle = 'bodyMedium',
  overrideTitleStyle,
  overrideHintTextFontStyle = 'bodyRegular',
  refProp,
  leftChild,
  rightChild,
  overrideHintTextStyle,
  customTextInputProps,
}) => {
  const theme = useTheme();
  const {
    container,
    subContainer,
    errorHintTextStyle,
    titleContainer,
    titleStyle,
    hintTextStyle,
    lengthTextStyle,
    inputContainerStyle,
  } = useMemo(() => styles(theme), [theme]);

  const memoizedOnBlur = useCallback(onBlur, [onBlur]);
  const memoizedOnFocus = useCallback(onFocus, [onFocus]);
  const memoizedOnSubmitEditing = useCallback(onSubmitEditing, [onSubmitEditing]);

  return (
    <View style={[container, overrideContainerStyle]}>
      {!!title && typeof title === 'string' && (
        <View style={titleContainer}>
          <CustomText
            text={title}
            textFontStyle={overrideTitleFontStyle}
            overrideStyle={[titleStyle, overrideTitleStyle]}
          />
          {required && (
            <CustomText
              text='*'
              textFontStyle={overrideTitleFontStyle}
              overrideStyle={[
                titleStyle,
                overrideTitleStyle,
                { marginLeft: scale(4), color: theme?.danger[400] },
              ]}
            />
          )}
        </View>
      )}
      <View style={subContainer}>
        <CustomTextInput
          refProp={refProp}
          handleChange={handleChange}
          placeholder={placeholder}
          keyboardType={keyboardType}
          inputValue={inputValue}
          overrideInputStyle={overrideInputStyle}
          overrideContainerStyle={[inputContainerStyle, overrideInputContainerStyle]}
          overridePlaceholderTextColor={overridePlaceholderTextColor}
          error={!!error}
          disabled={disabled}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          hasReturnKeyType={hasReturnKeyType}
          returnKeyType={returnKeyType}
          onSubmitEditing={memoizedOnSubmitEditing}
          autoCapitalize={autoCapitalize}
          leftChild={leftChild}
          rightChild={rightChild}
          onBlur={memoizedOnBlur}
          onFocus={memoizedOnFocus}
          restTextInputProps={customTextInputProps}
        />
      </View>
      {useMemo(() => {
        if (!!error && typeof error === 'string') {
          return (
            <CustomText
              text={error}
              textFontStyle={overrideHintTextFontStyle}
              overrideStyle={[errorHintTextStyle, overrideHintTextStyle]}
            />
          );
        }
        if (!!hintText && typeof hintText === 'string') {
          return (
            <CustomText
              text={hintText}
              textFontStyle={overrideHintTextFontStyle}
              overrideStyle={[hintTextStyle, overrideHintTextStyle]}
            />
          );
        }
        return null;
      }, [
        error,
        errorHintTextStyle,
        hintText,
        hintTextStyle,
        overrideHintTextFontStyle,
        overrideHintTextStyle,
      ])}
      {showMaxLength && maxLength && (
        <CustomText
          text={`${inputValue?.length || 0}/${maxLength}`}
          textFontStyle='bodyRegular'
          overrideStyle={lengthTextStyle}
        />
      )}
    </View>
  );
};

export default LabeledTextInput;

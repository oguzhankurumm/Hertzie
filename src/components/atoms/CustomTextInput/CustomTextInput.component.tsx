import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import iconsObject from '_assets/icons/iconsObject';
import { useTheme } from '_styles/theming';

import CustomImage from '../CustomImage/CustomImage.component';
import styles from './CustomTextInput.style';
import { CustomTextInputPropsTypes } from './CustomTextInput.types';

const { openEye, eyeSlash } = iconsObject;

const CustomTextInput: FC<CustomTextInputPropsTypes> = ({
  restTextInputProps = {},
  handleChange = () => {},
  inputValue,
  overrideInputStyle,
  overrideContainerStyle,
  error = false,
  disabled = false,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  returnKeyType = 'done',
  hasReturnKeyType = false,
  onBlur = () => {},
  onFocus = () => {},
  autoCapitalize = 'none',
  onSubmitEditing = () => {},
  refProp,
  overridePlaceholderTextColor,
  defaultValue = '',
  maxLength,
  leftChild,
  rightChild,
}) => {
  const theme = useTheme();

  const [isSecure, setIsSecure] = useState<boolean>(true);

  const {
    inputContainer,
    inputStyle,
    underlineStyle,
    iconContainer,
    iconStyle,
    errorStyle,
    disabledInput,
  } = useMemo(() => styles(theme), [theme]);

  const memoizedHandleChange = useCallback(handleChange, [handleChange]);

  return (
    <View style={[inputContainer, error && errorStyle, overrideContainerStyle]}>
      {leftChild as ReactNode}
      <TextInput
        defaultValue={defaultValue}
        ref={refProp}
        onFocus={() => {
          onFocus();
        }}
        onBlur={e => {
          onBlur(e);
        }}
        clearButtonMode='never'
        // clearTextOnFocus
        allowFontScaling={false}
        onChangeText={memoizedHandleChange}
        value={inputValue}
        style={[disabled ? disabledInput : inputStyle, overrideInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={overridePlaceholderTextColor ?? theme?.gray[400]}
        keyboardType={keyboardType}
        keyboardAppearance={theme.title}
        secureTextEntry={secureTextEntry ? isSecure : secureTextEntry}
        editable={!disabled}
        returnKeyType={hasReturnKeyType ? returnKeyType : undefined}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        mode='flat'
        dense
        underlineStyle={underlineStyle}
        underlineColor='transparent'
        underlineColorAndroid='transparent'
        activeUnderlineColor='transparent'
        {...restTextInputProps}
        cursorColor={theme?.white}
        selectionColor={theme?.white}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={iconContainer}>
          {isSecure ? (
            <CustomImage source={eyeSlash} overrideStyle={iconStyle} />
          ) : (
            <CustomImage source={openEye} overrideStyle={iconStyle} />
          )}
        </TouchableOpacity>
      )}
      {rightChild as ReactNode}
    </View>
  );
};

export default CustomTextInput;

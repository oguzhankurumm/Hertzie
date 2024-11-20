import { FC, ReactNode, useMemo } from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomActivityIndicator from '../CustomActivityIndicator/CustomActivityIndicator.component';
import CustomText from '../CustomText/CustomText.component';
import styles from './CustomButton.style';
import { CustomButtonPropsTypes } from './CustomButton.types';

const CustomButton: FC<CustomButtonPropsTypes> = ({
  onPress = () => {},
  overrideStyle,
  title = '',
  overrideFontStyle = 'body',
  overrideTitleStyle,
  disabled = false,
  loading = false,
  loaderColor,
  activeOpacity = 0.8,
  leftChild,
  centerChild,
  rightChild,
}) => {
  const theme = useTheme();
  const { containerStyle, gap, textStyle } = useMemo(
    () => styles(theme, disabled),
    [theme, disabled]
  );

  const activityIndicatorSize = Platform.OS === 'android' ? scale(19.5) : scale(17);

  return (
    <TouchableOpacity
      style={[containerStyle, overrideStyle, (leftChild || rightChild) && gap]}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled || loading}>
      {leftChild as ReactNode}
      {Boolean(loading) === true ? (
        <CustomActivityIndicator
          loaderSize={activityIndicatorSize}
          isAnimating={loading}
          hidesWhenStopped
          loaderColor={loaderColor || theme?.gray[500]}
        />
      ) : (
        <CustomText
          overrideStyle={[textStyle, overrideTitleStyle]}
          text={title}
          textFontStyle={overrideFontStyle}
        />
      )}
      {centerChild as ReactNode}
      {rightChild as ReactNode}
    </TouchableOpacity>
  );
};

export default CustomButton;

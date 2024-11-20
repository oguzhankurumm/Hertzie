import { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { useTheme } from '_styles/theming';

import CustomImage from '../CustomImage/CustomImage.component';
import CustomText from '../CustomText/CustomText.component';
import styles from './AuthTitle.style';
import { AuthTitlePropsTypes } from './AuthTitle.types';

export const AuthTitle: FC<AuthTitlePropsTypes> = ({
  onPress,
  title,
  icon = iconsObject?.arrowSwapHorizontal,
  redirectText,
  overrideStyle,
  overrideFontStyle = 'bodyMedium',
  overrideTitleStyle,
}) => {
  const theme = useTheme();

  const { container, buttonStyle, redirectTextStyle, iconStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  return (
    <View style={[container, overrideStyle]}>
      <CustomText
        text={title}
        textFontStyle='h1'
        overrideStyle={[redirectTextStyle, overrideTitleStyle]}
      />
      {!!redirectText && (
        <Pressable style={buttonStyle} onPress={onPress}>
          <CustomImage source={icon} overrideStyle={iconStyle} />
          <CustomText text={redirectText} textFontStyle={overrideFontStyle} />
        </Pressable>
      )}
    </View>
  );
};

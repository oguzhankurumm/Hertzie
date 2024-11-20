import { FC, useMemo } from 'react';

import { Image } from 'expo-image';

import imagesObject from '_assets/images/imagesObject';
import { useTheme } from '_styles/theming';

import styles from './CustomImage.style';
import { CustomImagePropsTypes } from './CustomImage.types';

const defaultPlaceHolder = imagesObject?.userPlaceholder;

const CustomImage: FC<CustomImagePropsTypes> = ({
  source,
  overrideStyle,
  overrideResizeMode = 'cover',
  placeholder,
  restOfProps,
}) => {
  const theme = useTheme();
  const { imageStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <Image
      cachePolicy='none'
      source={source ?? defaultPlaceHolder}
      style={overrideStyle ?? imageStyle}
      contentFit={source ? overrideResizeMode : 'cover'}
      placeholder={placeholder}
      placeholderContentFit={overrideResizeMode}
      priority='high'
      {...restOfProps}
    />
  );
};

export default CustomImage;

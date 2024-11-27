import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomImage } from '_atoms';
import globalStyles from '_styles/globalStyles';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './PlaylistCard.style';
import { PlaylistCardPropsTypes } from './PlaylistCard.types';

const songPlaceholder = imagesObject?.songPlaceholder;
const PlaylistCard: FC<PlaylistCardPropsTypes> = ({
  title,
  artwork,
  count,
  type = 'list',
  onItemPress,
  showPinIcon = false,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const {
    container,
    imageStyle,
    textContainer,
    iconStyle,
    gridContainer,
    gridImageStyle,
    gridTextContainer,
  } = useMemo(() => styles(theme), [theme]);

  const slicedTitle = title.length > 28 ? `${title.slice(0, 28)}...` : title;

  if (type === 'grid') {
    return (
      <TouchableOpacity onPress={onItemPress} activeOpacity={0.8} style={gridContainer}>
        <CustomImage
          source={{ uri: artwork || undefined }}
          overrideStyle={gridImageStyle}
          placeholder={songPlaceholder}
        />
        <View style={gridTextContainer}>
          <CustomText text={slicedTitle} textFontStyle='semibold13' color={theme?.gray2} />
          <View style={[globalStyles(theme)?.rowLeft, { gap: scale(4) }]}>
            {showPinIcon && (
              <CustomImage source={iconsObject?.pinFilled} overrideStyle={iconStyle} />
            )}
            <CustomText
              text={`${count?.toString()} songs`}
              textFontStyle='medium12'
              color={theme?.gray4}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onItemPress}
      activeOpacity={0.8}
      style={[container, overrideContainerStyle]}>
      <CustomImage
        source={{ uri: artwork || undefined }}
        overrideStyle={imageStyle}
        placeholder={songPlaceholder}
      />
      <View style={textContainer}>
        <CustomText text={slicedTitle} textFontStyle='semibold14' color={theme?.gray2} />
        <View style={[globalStyles(theme)?.rowLeft, { gap: scale(4) }]}>
          {showPinIcon && <CustomImage source={iconsObject?.pinFilled} overrideStyle={iconStyle} />}
          <CustomText
            text={`${count?.toString()} songs`}
            textFontStyle='medium12'
            color={theme?.gray4}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistCard;

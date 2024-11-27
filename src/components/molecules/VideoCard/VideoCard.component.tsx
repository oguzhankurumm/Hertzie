import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import dayjs from 'dayjs';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomImage } from '_atoms';
import globalStyles from '_styles/globalStyles';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './VideoCard.style';
import { VideoCardPropsTypes } from './VideoCard.types';

const songPlaceholder = imagesObject?.songPlaceholder;
const VideoCard: FC<VideoCardPropsTypes> = ({
  title,
  artwork,
  quality,
  duration,
  type = 'list',
  onItemPress,
  showMoreIcon = true,
  onMorePress,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const {
    container,
    imageStyle,
    textContainer,
    iconContainer,
    iconStyle,
    gridContainer,
    gridImageStyle,
    gridTopContainer,
    gridIconStyle,
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
        <View style={gridTopContainer}>
          <CustomText
            text={dayjs(duration * 1000).format('mm:ss')}
            textFontStyle='medium10'
            color={theme?.white}
          />
          {showMoreIcon && (
            <TouchableOpacity activeOpacity={0.8} onPress={onMorePress}>
              <CustomImage source={iconsObject?.moreVertical} overrideStyle={gridIconStyle} />
            </TouchableOpacity>
          )}
        </View>
        <View style={gridTextContainer}>
          <CustomText text={slicedTitle} textFontStyle='semibold13' color={theme?.gray2} />
          <View style={[globalStyles(theme)?.rowLeft, { gap: scale(4) }]}>
            <CustomText
              text={dayjs(duration * 1000).format('mm:ss')}
              textFontStyle='medium12'
              color={theme?.gray4}
            />
            <CustomText text='•' textFontStyle='medium12' color={theme?.gray4} />
            <CustomText text={quality} textFontStyle='medium12' color={theme?.gray4} />
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
          <CustomText
            text={dayjs(duration * 1000).format('mm:ss')}
            textFontStyle='medium12'
            color={theme?.gray4}
          />
          <CustomText text='•' textFontStyle='medium12' color={theme?.gray4} />
          <CustomText text={quality} textFontStyle='medium12' color={theme?.gray4} />
        </View>
      </View>
      {showMoreIcon && (
        <TouchableOpacity activeOpacity={0.8} style={iconContainer} onPress={onMorePress}>
          <CustomImage source={iconsObject?.moreVertical} overrideStyle={iconStyle} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default VideoCard;

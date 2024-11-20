import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomImage } from '_atoms';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './SongListCard.style';
import { SongListCardPropsTypes } from './SongListCard.types';

const songPlaceholder = imagesObject?.songPlaceholder;
const SongListCard: FC<SongListCardPropsTypes> = ({
  title,
  artwork,
  artists,
  onItemPress,
  onMorePress,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { container, imageStyle, textContainer, textStyle, iconContainer, iconStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  const slicedTitle = title.length > 28 ? `${title.slice(0, 28)}...` : title;

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
        <CustomText
          text={artists.map(artist => artist).join(', ')}
          textFontStyle='medium12'
          color={theme?.gray4}
          overrideStyle={textStyle}
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={iconContainer} onPress={onMorePress}>
        <CustomImage source={iconsObject?.moreHorizontal} overrideStyle={iconStyle} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SongListCard;

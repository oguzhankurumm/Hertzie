import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomCheckBox, CustomImage } from '_atoms';
import { SongType } from '_stores/songsStore';
import globalStyles from '_styles/globalStyles';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './SongListCard.style';
import { SongListCardPropsTypes } from './SongListCard.types';

const songPlaceholder = imagesObject?.songPlaceholder;
const SongListCard: FC<SongListCardPropsTypes> = ({
  title,
  artwork,
  artists,
  bitrate,
  language,
  location,
  type = SongType.Audio,
  mode = 'full',
  onItemPress,
  showMoreIcon = true,
  onMorePress,
  selectable = false,
  selected = false,
  toggleSelected,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const {
    container,
    imageStyle,
    compactImageStyle,
    textContainer,
    textStyle,
    iconContainer,
    iconStyle,
  } = useMemo(() => styles(theme), [theme]);

  const slicedTitle = title.length > 28 ? `${title.slice(0, 28)}...` : title;

  return (
    <TouchableOpacity
      onPress={onItemPress}
      activeOpacity={0.8}
      style={[container, overrideContainerStyle]}>
      {selectable && (
        <CustomCheckBox
          selected={selected}
          onPress={toggleSelected}
          overrideContainerStyle={{ flex: 0, marginRight: scale(10) }}
        />
      )}
      <CustomImage
        source={{ uri: artwork || undefined }}
        overrideStyle={mode === 'compact' ? compactImageStyle : imageStyle}
        placeholder={songPlaceholder}
      />
      <View style={textContainer}>
        {mode === 'full' ? (
          <CustomText text={slicedTitle} textFontStyle='semibold14' color={theme?.gray2} />
        ) : (
          <CustomText
            text={`${title} - ${artists[0]}`}
            textFontStyle='semibold14'
            color={theme?.gray2}
          />
        )}
        {mode === 'full' && type === SongType.Audio && (
          <CustomText
            text={artists.map(artist => artist).join(', ')}
            textFontStyle='medium12'
            color={theme?.gray4}
            overrideStyle={textStyle}
          />
        )}
        {type === SongType.Radio && (
          <View style={[globalStyles(theme)?.rowLeft, { gap: scale(8) }]}>
            <CustomText text={language} textFontStyle='medium12' color={theme?.gray4} />
            <CustomText text='•' textFontStyle='medium12' color={theme?.gray4} />
            <CustomText text={location} textFontStyle='medium12' color={theme?.gray4} />
            <CustomText text='•' textFontStyle='medium12' color={theme?.gray4} />
            <CustomText text={`${bitrate}k`} textFontStyle='medium12' color={theme?.gray4} />
          </View>
        )}
      </View>
      {showMoreIcon && (
        <TouchableOpacity activeOpacity={0.8} style={iconContainer} onPress={onMorePress}>
          <CustomImage source={iconsObject?.moreHorizontal} overrideStyle={iconStyle} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default SongListCard;

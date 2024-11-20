import { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomImage } from '_atoms';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './PlaylistHeader.style';
import { PlaylistHeaderPropsTypes } from './PlaylistHeader.types';

const PlaylistHeader: FC<PlaylistHeaderPropsTypes> = ({
  count,
  title,
  showShuffle = true,
  showPlay = true,
  showAdd = false,
  onShufflePress,
  onPlayPress,
  onAddPress,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { container, textContainer, textStyle, rightContainer, iconContainer, iconStyle } = useMemo(
    () => styles(theme),
    [theme]
  );

  return (
    <View style={[container, overrideContainerStyle]}>
      <View style={textContainer}>
        <CustomText text={count.toString()} textFontStyle='semibold16' color={theme?.gray2} />
        <CustomText
          text={title.toLocaleUpperCase()}
          textFontStyle='medium12'
          color={theme?.gray2}
          overrideStyle={textStyle}
        />
      </View>
      <View style={rightContainer}>
        {showAdd && (
          <TouchableOpacity activeOpacity={0.8} onPress={onAddPress}>
            <CustomImage source={iconsObject?.plus} overrideStyle={iconStyle} />
          </TouchableOpacity>
        )}
        {showShuffle && (
          <TouchableOpacity activeOpacity={0.8} onPress={onShufflePress}>
            <CustomImage source={iconsObject?.shuffleLinear} overrideStyle={iconStyle} />
          </TouchableOpacity>
        )}
        {showPlay && (
          <TouchableOpacity activeOpacity={0.8} style={iconContainer} onPress={onPlayPress}>
            <CustomImage source={iconsObject?.playFill} overrideStyle={iconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PlaylistHeader;

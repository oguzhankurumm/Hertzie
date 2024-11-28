import { FC, useMemo } from 'react';
import { View } from 'react-native';

import { CustomClickableIcon } from '_atoms';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import CustomText from '../../atoms/CustomText/CustomText.component';
import styles from './PlaylistHeader.style';
import { PlaylistHeaderPropsTypes } from './PlaylistHeader.types';

const PlaylistHeader: FC<PlaylistHeaderPropsTypes> = ({
  count,
  title,
  customBigTitle,
  showShuffle = true,
  showPlay = true,
  showAdd = false,
  onShufflePress,
  onPlayPress,
  onAddPress,
  overrideContainerStyle,
}) => {
  const theme = useTheme();

  const { container, textContainer, textStyle, rightContainer, iconContainer } = useMemo(
    () => styles(theme),
    [theme]
  );

  return (
    <View
      style={[
        container,
        overrideContainerStyle,
        customBigTitle ? { paddingTop: verticalScale(32), paddingBottom: verticalScale(24) } : {},
      ]}>
      <View>
        {customBigTitle && (
          <CustomText text={customBigTitle} textFontStyle='semibold23' color={theme?.gray2} />
        )}
        <View style={textContainer}>
          <CustomText text={count.toString()} textFontStyle='semibold16' color={theme?.gray2} />
          <CustomText
            text={title.toLocaleUpperCase()}
            textFontStyle='medium12'
            color={theme?.gray2}
            overrideStyle={textStyle}
          />
        </View>
      </View>
      <View style={rightContainer}>
        {showAdd && <CustomClickableIcon iconName='plus' onPress={onAddPress} />}
        {showShuffle && <CustomClickableIcon iconName='shuffleLinear' onPress={onShufflePress} />}
        {showPlay && (
          <View style={iconContainer}>
            <CustomClickableIcon iconName='playFill' onPress={onPlayPress} />
          </View>
        )}
      </View>
    </View>
  );
};

export default PlaylistHeader;

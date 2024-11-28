/* eslint-disable react/prop-types */
import { FC, useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import imagesObject from '_assets/images/imagesObject';
import { CustomBottomSheet, CustomClickableIcon, CustomImage, CustomText, Divider } from '_atoms';
import { useSongsStore } from '_stores/songsStore';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './SongDetailBottomSheet.style';
import { SongDetailBottomSheetPropsTypes } from './SongDetailBottomSheet.types';

const SongDetailBottomSheet: FC<SongDetailBottomSheetPropsTypes> = ({
  bottomSheetRef,
  onInfoPress,
  snapPoints = ['85%'],
  testId,
}) => {
  const theme = useTheme();
  const { currentSong } = useSongsStore();

  const {
    container,
    modalStyle,
    headerContainer,
    headerArtworkStyle,
    headerTextContainer,
    headerRight,
    pressableItemContainer,
    pressableItemIcon,
    dividerStyle,
  } = useMemo(() => styles(theme), [theme]);

  const CustomPressableItem = useCallback(
    ({
      iconName,
      title,
      onPress,
    }: {
      iconName: keyof typeof iconsObject;
      title: string;
      onPress: () => void;
    }) => (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={pressableItemContainer}>
        <CustomClickableIcon disabled iconName={iconName} overrideIconStyle={pressableItemIcon} />
        <CustomText text={title} textFontStyle='medium16' color={theme?.gray3} />
      </TouchableOpacity>
    ),
    [theme, pressableItemContainer, pressableItemIcon]
  );

  return (
    <CustomBottomSheet
      {...getAutomationTestingProp(testId)}
      snapPoints={snapPoints}
      overrideStyle={modalStyle}
      // scrollable
      refProp={bottomSheetRef}>
      <View style={container}>
        <View style={headerContainer}>
          <CustomImage
            source={{ uri: currentSong?.artwork || undefined }}
            overrideStyle={headerArtworkStyle}
            placeholder={imagesObject?.songPlaceholder}
          />
          <View style={headerTextContainer}>
            <CustomText
              text={currentSong?.title}
              textFontStyle='medium18'
              color={theme?.gray2}
              restTextProps={{
                numberOfLines: 1,
              }}
            />
            <CustomText
              text={currentSong?.artists.join(', ')}
              textFontStyle='regular14'
              color={theme?.gray6}
              restTextProps={{
                numberOfLines: 1,
              }}
            />
          </View>
          <View style={headerRight}>
            <CustomClickableIcon iconName='infoOutline' onPress={onInfoPress} />
            <CustomClickableIcon iconName='share' onPress={() => {}} />
          </View>
        </View>
        <Divider overrideStyle={dividerStyle} />
        <CustomPressableItem iconName='skipForward' title='Play next' onPress={() => {}} />
        <Divider overrideStyle={dividerStyle} />
        <CustomPressableItem iconName='playlistAdd' title='Add to playlist' onPress={() => {}} />
        <CustomPressableItem iconName='playlistAdd' title='Add to queue' onPress={() => {}} />
        <Divider overrideStyle={dividerStyle} />
        <CustomPressableItem iconName='playlistAdd' title='View album' onPress={() => {}} />
        <CustomPressableItem iconName='playlistAdd' title='View artist' onPress={() => {}} />
        <Divider overrideStyle={dividerStyle} />
        <CustomPressableItem iconName='playlistAdd' title='Edit tags' onPress={() => {}} />
        <CustomPressableItem iconName='playlistAdd' title='Edit cover' onPress={() => {}} />
        <Divider overrideStyle={dividerStyle} />
        <CustomPressableItem iconName='playlistAdd' title='Share' onPress={() => {}} />
        <Divider overrideStyle={dividerStyle} />
        <CustomPressableItem iconName='playlistAdd' title='Delete from device' onPress={() => {}} />
      </View>
    </CustomBottomSheet>
  );
};

export default SongDetailBottomSheet;

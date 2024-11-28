/* eslint-disable react/prop-types */
import { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';

import dayjs from 'dayjs';

import { CustomBottomSheet, CustomButton, CustomText, Divider } from '_atoms';
import { useSongsStore } from '_stores/songsStore';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './SongInfoBottomSheet.style';
import { SongInfoBottomSheetPropsTypes } from './SongInfoBottomSheet.types';

const SongInfoBottomSheet: FC<SongInfoBottomSheetPropsTypes> = ({
  bottomSheetRef,
  snapPoints = ['85%'],
  testId,
}) => {
  const theme = useTheme();
  const { currentSong } = useSongsStore();

  const {
    container,
    modalStyle,
    headerContainer,
    customItemContainer,
    dividerStyle,
    buttonsContainer,
    editButton,
    okButton,
  } = useMemo(() => styles(theme), [theme]);

  const CustomInfoItem = useCallback(
    ({ title, description }: { title: string; description: string }) => (
      <View style={customItemContainer}>
        <CustomText
          text={title}
          textFontStyle='medium18'
          color={theme?.gray3}
          overrideStyle={{ width: scale(100) }}
        />
        <CustomText text={description} textFontStyle='regular15' color={theme?.gray6} />
      </View>
    ),
    [theme, customItemContainer]
  );

  return (
    <CustomBottomSheet
      {...getAutomationTestingProp(testId)}
      snapPoints={snapPoints}
      overrideStyle={modalStyle}
      scrollable
      refProp={bottomSheetRef}>
      <View style={container}>
        <View style={headerContainer}>
          <CustomText text='Song Information' textFontStyle='medium22' color={theme?.gray3} />
        </View>
        <Divider overrideStyle={dividerStyle} />
        <CustomInfoItem description={currentSong!.title} title='Title' />
        <CustomInfoItem description='<unknown>' title='Album' />
        <CustomInfoItem description={currentSong!.artists.join(', ')} title='Artist' />
        <CustomInfoItem description='<unknown>' title='Genre' />
        <CustomInfoItem
          description={dayjs(currentSong!.duration).format('mm:ss')}
          title='Duration'
        />
        <CustomInfoItem description='<unknown>' title='Size' />
        <CustomInfoItem description='<unknown>' title='Location' />

        <View style={buttonsContainer}>
          <CustomButton title='EDIT' onPress={() => {}} overrideStyle={editButton} />
          <CustomButton title='OK' onPress={() => {}} overrideStyle={okButton} />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default SongInfoBottomSheet;

/* eslint-disable react/prop-types */
import { FC, useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomBottomSheet, CustomImage, CustomText } from '_atoms';
import { useTheme } from '_styles/theming';
import { getAutomationTestingProp } from '_utils/helpers';

import styles from './SortByBottomSheet.style';
import { SortByBottomSheetPropsTypes } from './SortByBottomSheet.types';

const SortByBottomSheet: FC<SortByBottomSheetPropsTypes> = ({
  bottomSheetRef,
  snapPoints = ['50%'],
  testId,
}) => {
  const theme = useTheme();

  const { container, modalStyle, pressablesContainer, pressableItemContainer, pressableItemIcon } =
    useMemo(() => styles(theme), [theme]);

  const CustomPressableItem = useCallback(
    ({ selected, title, onPress }: { selected: boolean; title: string; onPress: () => void }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        style={pressableItemContainer}
        onPress={() => {
          onPress();
          bottomSheetRef.current?.close();
        }}>
        <CustomText
          text={title}
          textFontStyle='medium16'
          color={selected ? theme?.purple : theme?.gray2}
        />
        {selected && (
          <CustomImage source={iconsObject.symbolsCheck} overrideStyle={pressableItemIcon} />
        )}
      </TouchableOpacity>
    ),
    [pressableItemContainer, theme?.purple, theme?.gray2, pressableItemIcon, bottomSheetRef]
  );

  return (
    <CustomBottomSheet
      {...getAutomationTestingProp(testId)}
      snapPoints={snapPoints}
      overrideStyle={modalStyle}
      // scrollable
      refProp={bottomSheetRef}>
      <View style={container}>
        <CustomText text='Sort By' textFontStyle='semibold23' color={theme?.gray2} />
        <View style={pressablesContainer}>
          <CustomPressableItem title='Recents' selected onPress={() => {}} />
          <CustomPressableItem title='Recently Added' selected={false} onPress={() => {}} />
          <CustomPressableItem title='Alphabetical' selected={false} onPress={() => {}} />
          <CustomPressableItem title='Creator' selected={false} onPress={() => {}} />
          <CustomPressableItem title='Custom Order' selected={false} onPress={() => {}} />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default SortByBottomSheet;

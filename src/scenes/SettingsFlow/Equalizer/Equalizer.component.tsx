import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

import Slider from '@react-native-community/slider';

import iconsObject from '_assets/icons/iconsObject';
import { CustomButton, CustomImage, CustomText } from '_atoms';
import { InnerHeader, SelectableTabs } from '_molecules';
import { AppWrapper } from '_organisms';
import { scale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles, { getStyleByStatus } from './Equalizer.style';
import { useEqualizer } from './hooks/useEqualizer.hook';

const Equalizer = () => {
  const theme = useTheme();

  const { tabs, selectedTab, onTabPress } = useEqualizer();

  const {
    container,
    listStyle,
    equalizerContainer,
    sliderTopLabel,
    topLabelsContainer,
    sliderBottomLabel,
    bottomLabelsContainer,
    tabsContainer,
  } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader title='Equalizer' showSearchIcon={false} titlePosition='left' />
      <SelectableTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabPress={onTabPress}
        overrideContainerStyle={tabsContainer}
      />
      <View style={topLabelsContainer}>
        {new Array(5).fill(0).map((_, index) => (
          <CustomText
            // eslint-disable-next-line react/no-array-index-key
            key={`label-${index}`}
            text='0.0'
            overrideStyle={sliderTopLabel}
            textFontStyle='medium10'
          />
        ))}
      </View>
      <ScrollView contentContainerStyle={listStyle} showsVerticalScrollIndicator={false}>
        <View style={equalizerContainer}>
          <View style={{ width: '100%', rowGap: scale(20) }}>
            {new Array(5).fill(0).map((_, index) => (
              <Slider
                // eslint-disable-next-line react/no-array-index-key
                key={`slider-${index}`}
                minimumValue={-15}
                maximumValue={15}
                value={0}
                minimumTrackTintColor={theme?.purple}
                maximumTrackTintColor={theme?.gray6}
                vertical
              />
            ))}
          </View>
        </View>
        <View style={bottomLabelsContainer}>
          <CustomText text='60 Hz' overrideStyle={sliderBottomLabel} textFontStyle='medium10' />
          <CustomText text='230 Hz' overrideStyle={sliderBottomLabel} textFontStyle='medium10' />
          <CustomText text='910 Hz' overrideStyle={sliderBottomLabel} textFontStyle='medium10' />
          <CustomText text='4 Khz' overrideStyle={sliderBottomLabel} textFontStyle='medium10' />
          <CustomText text='14 Khz' overrideStyle={sliderBottomLabel} textFontStyle='medium10' />
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default Equalizer;

import { useMemo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import LottieView from 'lottie-react-native';

import { CustomCheckBox, CustomText } from '_atoms';
import { InnerHeader } from '_molecules';
import { AppWrapper } from '_organisms';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './ScanMusic.style';
import { useScanMusic } from './hooks/useScanMusic.hook';

const ScanMusic = () => {
  const theme = useTheme();

  const { durationItems, sizeItems } = useScanMusic();

  const {
    container,
    listStyle,
    lottieContainer,
    lottieStyle,
    actionItemContainer,
    selectFoldersTextStyle,
  } = useMemo(() => styles(theme), [theme]);
  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader title='Scan Music' showSearchIcon={false} />
      <ScrollView contentContainerStyle={listStyle} showsVerticalScrollIndicator={false}>
        <View style={lottieContainer}>
          <LottieView
            source={require('_assets/animations/scanning.json')}
            autoPlay
            loop
            style={lottieStyle}
          />
        </View>
        <View style={{ top: verticalScale(-30) }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <CustomText
              text='Select Folders'
              textFontStyle='medium16'
              color={theme?.gray2}
              overrideStyle={selectFoldersTextStyle}
            />
          </TouchableOpacity>
          <CustomText
            text='Ingore duration less then'
            textFontStyle='semibold14'
            color={theme?.white}
          />
          <View style={actionItemContainer}>
            {durationItems.map(item => (
              <CustomCheckBox
                key={item.id}
                title={item.title}
                selected={item.active}
                onPress={() => {}}
              />
            ))}
          </View>
          <CustomText
            text='Ingore size less then'
            textFontStyle='semibold14'
            color={theme?.white}
          />
          <View style={actionItemContainer}>
            {sizeItems.map(item => (
              <CustomCheckBox
                key={item.id}
                title={item.title}
                selected={item.active}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default ScanMusic;

import { useMemo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { CustomSwitch, CustomText } from '_atoms';
import { InnerHeader } from '_molecules';
import { AppWrapper } from '_organisms';
import { useTheme } from '_styles/theming';

import styles from './PlaybackAndHertz.style';
import { usePlaybackAndHertz } from './hooks/usePlaybackAndHertz.hook';

const PlaybackAndHertz = () => {
  const theme = useTheme();

  const { switchItems, onSwitchChange } = usePlaybackAndHertz();

  const { container, listStyle, actionItemContainer, actionItem } = useMemo(
    () => styles(theme),
    [theme]
  );
  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader title='Playback And Hertz' showSearchIcon={false} />
      <ScrollView contentContainerStyle={listStyle} showsVerticalScrollIndicator={false}>
        <CustomText text='Set Default Hertz' textFontStyle='semibold14' color={theme?.gray2} />
        <View style={actionItemContainer}>
          {switchItems.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              style={actionItem}
              onPress={() => onSwitchChange(item.id)}>
              <CustomText text={item.title} textFontStyle='semibold14' color={theme?.gray2} />
              <CustomSwitch active={item.active} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity activeOpacity={0.8} style={actionItem} onPress={() => {}}>
            <CustomText text='Clear cache' textFontStyle='semibold14' color={theme?.gray2} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default PlaybackAndHertz;

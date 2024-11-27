import { useMemo } from 'react';
import { View } from 'react-native';

import { InnerHeader } from '_molecules';
// import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper, MediaList } from '_organisms';
import { SongType } from '_stores/songsStore';
import { useTheme } from '_styles/theming';

import styles from './Radio.style';
import { useRadio } from './hooks/useRadio.hook';

const Radio = () => {
  const theme = useTheme();
  // const { translate } = useTranslate();
  const { filteredRadios } = useRadio();

  const { container, innerHeaderStyle, listStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container} removeSafeAreaView>
      <InnerHeader
        title='Radios'
        titlePosition='left'
        showBackIcon={false}
        showAddIcon
        overrideContainerStyle={innerHeaderStyle}
      />

      <View style={listStyle}>
        {/* <CustomText text='Header Here' /> */}
        <MediaList
          data={filteredRadios.filter(radio => radio.type === SongType.Radio)}
          type={SongType.Radio}
          mode='list'
          showHeader={false}
          onItemPress={() => {}}
          showMoreIcon={false}
        />
      </View>
    </AppWrapper>
  );
};

export default Radio;

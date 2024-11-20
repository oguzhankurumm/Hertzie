import { useMemo } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { CustomText } from '_atoms';
import { SelectableTabs } from '_molecules';
import { AppWrapper, MediaList } from '_organisms';
import { SongType } from '_stores/songsStore';
import globalStyles from '_styles/globalStyles';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { useHome } from './hooks/useHome.hook';

const Home = () => {
  const theme = useTheme();

  const { pagerRef, tabs, selectedTab, onTabPress, filteredSongs, onItemPress } = useHome();

  const { container, tabsContainer } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <SelectableTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabPress={onTabPress}
        overrideContainerStyle={tabsContainer}
      />
      <PagerView
        onPageSelected={({ nativeEvent }) => onTabPress(tabs[nativeEvent.position])}
        ref={pagerRef}
        style={globalStyles(theme)?.flexOne}
        initialPage={0}
        scrollEnabled>
        <View key='0'>
          <CustomText text='For You' />
        </View>
        <View key='1'>
          <MediaList
            data={filteredSongs}
            type={SongType.Audio}
            mode='list'
            onItemPress={onItemPress}
          />
        </View>
        <View key='2'>
          <CustomText text='Playlists' />
        </View>
        <View key='3'>
          <CustomText text='Videos' />
        </View>
      </PagerView>
    </AppWrapper>
  );
};

export default Home;

import { useMemo } from 'react';

import { SelectableTabs } from '_molecules';
import { AppWrapper, MediaList } from '_organisms';
import { SongType } from '_stores/songsStore';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { useHome } from './hooks/useHome.hook';

const Home = () => {
  const theme = useTheme();

  const { tabs, selectedTab, onTabPress, filteredSongs, onItemPress } = useHome();

  const { container, tabsContainer } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <SelectableTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabPress={onTabPress}
        overrideContainerStyle={tabsContainer}
      />
      <MediaList data={filteredSongs} type={SongType.Audio} mode='list' onItemPress={onItemPress} />
    </AppWrapper>
  );
};

export default Home;

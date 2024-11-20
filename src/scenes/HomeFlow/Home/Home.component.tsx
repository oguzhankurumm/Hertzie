import { useMemo } from 'react';

import { AppWrapper, MediaList } from '_organisms';
import { SongType } from '_stores/songsStore';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { useHome } from './hooks/useHome.hook';

const Home = () => {
  const theme = useTheme();

  const { filteredSongs, onItemPress } = useHome();

  const { container } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <MediaList data={filteredSongs} type={SongType.Audio} mode='list' onItemPress={onItemPress} />
    </AppWrapper>
  );
};

export default Home;

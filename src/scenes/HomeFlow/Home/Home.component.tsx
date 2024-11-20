import { useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { CustomText } from '_atoms';
// import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper, MediaList } from '_organisms';
import { SongType } from '_stores/songsStore';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { useHome } from './hooks/useHome.hook';

const Home = () => {
  const theme = useTheme();
  // const { translate } = useTranslate();

  const { filteredSongs } = useHome();

  const { container } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <MediaList data={filteredSongs} type={SongType.Audio} mode='list' />
    </AppWrapper>
  );
};

export default Home;

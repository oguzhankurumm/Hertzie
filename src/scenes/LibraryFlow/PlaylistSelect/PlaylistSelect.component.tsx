import { useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { InnerHeader, PlaylistCard } from '_molecules';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { AppWrapper } from '_organisms';
import { useHome } from '_scenes/HomeFlow/Home/hooks/useHome.hook';
import { scale, verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './PlaylistSelect.style';

const PlaylistSelect = () => {
  const theme = useTheme();
  const { playlistItems } = useHome();

  const { container, innerHeaderStyle } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <InnerHeader
        showBackIcon
        title='SELECT PLAYLIST'
        overrideTitleFontStyle='semibold14'
        titlePosition='left'
        showSearchIcon={false}
        overrideContainerStyle={innerHeaderStyle}
      />
      <FlatList
        data={playlistItems}
        renderItem={({ item, index }) => (
          <PlaylistCard
            key={item.id}
            showPinIcon={index === 0}
            type='grid'
            {...item}
            onItemPress={() => {
              NavigationServices.navigate(Scenes.playlistSelectMusic);
            }}
          />
        )}
        columnWrapperStyle={{ gap: scale(15) }}
        keyExtractor={item => item.id}
        numColumns={3}
        horizontal={false}
        onEndReachedThreshold={0.5}
        onEndReached={() => {}}
      />
    </AppWrapper>
  );
};

export default PlaylistSelect;

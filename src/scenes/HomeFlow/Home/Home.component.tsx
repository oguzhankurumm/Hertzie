import { useCallback, useMemo } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { CustomText } from '_atoms';
import { SongListCard } from '_molecules';
// import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper, HeaderMain } from '_organisms';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { useHome } from './hooks/useHome.hook';

const Home = () => {
  const theme = useTheme();
  // const { translate } = useTranslate();

  const { filteredSongs } = useHome();

  const { container } = useMemo(() => styles(theme), [theme]);

  const ItemSeparatorComponent = useCallback(
    () => <View style={{ height: verticalScale(16) }} />,
    []
  );

  return (
    <AppWrapper overrideStyle={container}>
      <FlashList
        data={filteredSongs}
        renderItem={({ item }) => (
          <SongListCard
            title={item?.title}
            artists={item?.artists}
            artwork={item?.artwork}
            onItemPress={() => {}}
            onMorePress={() => {}}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorComponent}
        estimatedItemSize={verticalScale(100)}
        estimatedListSize={{
          height: verticalScale(100),
          width: verticalScale(100),
        }}
      />
    </AppWrapper>
  );
};

export default Home;

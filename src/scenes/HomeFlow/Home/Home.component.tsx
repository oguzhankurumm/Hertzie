import { useMemo } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

// import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper, HeaderMain } from '_organisms';
import { useTheme } from '_styles/theming';

import styles from './Home.style';
import { useHome } from './hooks/useHome.hook';

const Home = () => {
  const theme = useTheme();
  // const { translate } = useTranslate();

  const {} = useHome();

  const { container } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <HeaderMain />
    </AppWrapper>
  );
};

export default Home;

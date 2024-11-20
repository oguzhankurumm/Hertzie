import { useMemo } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

import iconsObject from '_assets/icons/iconsObject';
import { CustomImage, CustomText } from '_atoms';
// import { useTranslate } from '_hooks/useTranslate';
import { AppWrapper } from '_organisms';
import { verticalScale } from '_styles/scaling';
import { useTheme } from '_styles/theming';

import styles from './Library.style';
import { useLibrary } from './hooks/useLibrary.hook';

const Library = () => {
  const theme = useTheme();
  // const { translate } = useTranslate();

  const { container, scrollView } = useMemo(() => styles(theme), [theme]);

  return (
    <AppWrapper overrideStyle={container}>
      <CustomText text='Library' />
    </AppWrapper>
  );
};

export default Library;

import { useCallback, useMemo, useState } from 'react';

import NavigationServices from '_navigations/NavigationServices';
import { useSongsStore } from '_stores/songsStore';

const usePlayer = () => {
  const { currentSong } = useSongsStore();

  const onDownPress = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  return {
    onDownPress,
  };
};

export { usePlayer };

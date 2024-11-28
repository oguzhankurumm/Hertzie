import { useCallback } from 'react';

import NavigationServices from '_navigations/NavigationServices';

const usePlaylist = () => {
  const onDownPress = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  const onMorePress = useCallback(() => {}, []);

  return {
    onMorePress,
    onDownPress,
  };
};

export { usePlaylist };

import { useCallback } from 'react';

import NavigationServices from '_navigations/NavigationServices';

const usePlayer = () => {
  const onDownPress = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  return {
    onDownPress,
  };
};

export { usePlayer };

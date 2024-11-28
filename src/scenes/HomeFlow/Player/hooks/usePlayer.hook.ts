import { RefObject, useCallback, useRef } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

import NavigationServices from '_navigations/NavigationServices';

const usePlayer = () => {
  const songDetailBottomSheetRef: RefObject<BottomSheet> = useRef(null);
  const songInfoBottomSheetRef: RefObject<BottomSheet> = useRef(null);

  const onDownPress = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  const onMorePress = useCallback(() => {
    songDetailBottomSheetRef.current?.expand();
  }, []);

  return {
    songDetailBottomSheetRef,
    songInfoBottomSheetRef,
    onMorePress,
    onDownPress,
  };
};

export { usePlayer };

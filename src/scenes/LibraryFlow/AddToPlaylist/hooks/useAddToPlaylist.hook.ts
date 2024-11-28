import { RefObject, useCallback, useRef, useState } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

const useAddToPlaylist = () => {
  const [playlistName, setPlaylistName] = useState<string>('');
  const SortByBottomSheetRef: RefObject<BottomSheet> = useRef(null);

  const onSortByPress = useCallback(() => {
    SortByBottomSheetRef.current?.expand();
  }, []);

  return {
    SortByBottomSheetRef,
    onSortByPress,
    playlistName,
    setPlaylistName,
  };
};

export { useAddToPlaylist };

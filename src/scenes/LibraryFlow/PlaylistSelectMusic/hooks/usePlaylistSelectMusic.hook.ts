import { RefObject, useCallback, useRef, useState } from 'react';

import BottomSheet from '@gorhom/bottom-sheet';

const usePlaylistSelectMusic = () => {
  const sortBottomSheetRef: RefObject<BottomSheet> = useRef(null);
  const filterBottomSheetRef: RefObject<BottomSheet> = useRef(null);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelectItem = useCallback((id: string) => {
    setSelectedIds(prevSelectedIds => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter(selectedId => selectedId !== id);
      }
      return [...prevSelectedIds, id];
    });
  }, []);

  const handleSelectAll = useCallback(() => {}, []);

  return {
    sortBottomSheetRef,
    filterBottomSheetRef,
    selectedIds,
    setSelectedIds,
    handleSelectItem,
    handleSelectAll,
  };
};

export { usePlaylistSelectMusic };

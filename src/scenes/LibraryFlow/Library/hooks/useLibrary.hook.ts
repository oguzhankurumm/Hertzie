import { RefObject, useCallback, useMemo, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';

import BottomSheet from '@gorhom/bottom-sheet';

import { useTranslate } from '_hooks/useTranslate';
import { useSongsStore } from '_stores/songsStore';

export enum LibraryShownType {
  Grid = 'grid',
  List = 'list',
}

const useLibrary = () => {
  const { translate } = useTranslate();
  const { songs, setCurrentSong } = useSongsStore();
  const sortBottomSheetRef: RefObject<BottomSheet> = useRef(null);

  const tabs: string[] = useMemo(() => ['Playlists', 'Videos', 'Radios'], []);
  const [selectedTab, setSelectedTab] = useState<string>('Playlists');

  const [shownType, setShownType] = useState<LibraryShownType>(LibraryShownType.Grid);

  const pagerRef = useRef<PagerView>(null);

  const onTabPress = useCallback(
    (tab: string) => {
      setSelectedTab(tab);
      const index = tabs.indexOf(tab);
      pagerRef.current?.setPage(index);
    },
    [tabs]
  );

  return {
    pagerRef,
    tabs,
    selectedTab,
    onTabPress,
    shownType,
    setShownType,
    songs,
    sortBottomSheetRef,
  };
};

export { useLibrary };

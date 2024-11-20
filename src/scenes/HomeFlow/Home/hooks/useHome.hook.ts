import { useCallback, useMemo, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';

import { useTranslate } from '_hooks/useTranslate';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { SongItem, useSongsStore } from '_stores/songsStore';

const useHome = () => {
  const { translate } = useTranslate();
  const { songs, setCurrentSong } = useSongsStore();

  const pagerRef = useRef<PagerView>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const tabs: string[] = useMemo(() => ['For You', 'Songs', 'Playlists', 'Videos'], []);
  const [selectedTab, setSelectedTab] = useState<string>('For You');

  const onTabPress = useCallback(
    (tab: string) => {
      setSelectedTab(tab);
      const index = tabs.indexOf(tab);
      pagerRef.current?.setPage(index);
    },
    [tabs]
  );

  const filteredSongs = useMemo(() => {
    if (!songs) return [];
    if (!searchTerm) return songs;

    return songs.filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [songs, searchTerm]);

  const onItemPress = useCallback(
    (song: SongItem) => {
      setCurrentSong(song);
      NavigationServices.navigate(Scenes.player);
    },
    [setCurrentSong]
  );

  return {
    pagerRef,
    filteredSongs,
    onItemPress,
    tabs,
    selectedTab,
    onTabPress,
  };
};

export { useHome };

import { useCallback, useMemo, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';

import { useTranslate } from '_hooks/useTranslate';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { SongItem, SongType, useSongsStore } from '_stores/songsStore';

export enum VideoShownType {
  Grid = 'grid',
  List = 'list',
}

const useHome = () => {
  const { translate } = useTranslate();
  const { songs, setCurrentSong } = useSongsStore();

  const playlistItems = [
    {
      id: '1',
      title: 'Liked Songs',
      artwork: 'https://static-cse.canva.com/blob/1806489/1600w-wK95f3XNRaM.jpg',
      count: 12,
    },
    {
      id: '2',
      title: 'Playlist 2',
      artwork: 'https://static-cse.canva.com/blob/1806489/1600w-wK95f3XNRaM.jpg',
      count: 12,
    },
    {
      id: '3',
      title: 'Playlist 3',
      artwork: 'https://static-cse.canva.com/blob/1806489/1600w-wK95f3XNRaM.jpg',
      count: 12,
    },
    {
      id: '4',
      title: 'Playlist 4',
      artwork: 'https://static-cse.canva.com/blob/1806489/1600w-wK95f3XNRaM.jpg',
      count: 12,
    },
  ];

  const videoItems = [
    {
      id: '1',
      title: 'Video 1',
      artwork: 'https://static-cse.canva.com/blob/1806489/1600w-wK95f3XNRaM.jpg',
      quality: '1080p',
      duration: 120,
    },
    {
      id: '2',
      title: 'Video 2',
      artwork: 'https://static-cse.canva.com/blob/1806489/1600w-wK95f3XNRaM.jpg',
      quality: '1080p',
      duration: 120,
    },
  ];
  const [videoShownType, setVideoShownType] = useState<VideoShownType>(VideoShownType.Grid);

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

    return songs
      .filter(song => song.type === SongType.Audio)
      .filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));
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
    videoItems,
    videoShownType,
    setVideoShownType,
    playlistItems,
  };
};

export { useHome };

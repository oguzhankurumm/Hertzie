import { useCallback, useMemo, useState } from 'react';

import { useTranslate } from '_hooks/useTranslate';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';
import { SongItem, useSongsStore } from '_stores/songsStore';

const useHome = () => {
  const { translate } = useTranslate();
  const { songs, setCurrentSong } = useSongsStore();

  const [searchTerm, setSearchTerm] = useState<string>('');

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
    filteredSongs,
    onItemPress,
  };
};

export { useHome };

import { useCallback, useMemo, useState } from 'react';

import { useTranslate } from '_hooks/useTranslate';
import { useSongsStore } from '_stores/songsStore';

const useHome = () => {
  const { translate } = useTranslate();
  const { songs } = useSongsStore();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSongs = useMemo(() => {
    if (!songs) return [];
    if (!searchTerm) return songs;

    return songs.filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [songs, searchTerm]);

  return {
    filteredSongs,
  };
};

export { useHome };

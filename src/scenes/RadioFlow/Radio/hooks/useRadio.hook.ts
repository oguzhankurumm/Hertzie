import { useMemo, useState } from 'react';

import { useTranslate } from '_hooks/useTranslate';
import { SongType, useSongsStore } from '_stores/songsStore';

const useRadio = () => {
  const { translate } = useTranslate();
  const { songs } = useSongsStore();

  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredRadios = useMemo(() => {
    if (!songs) return [];
    if (!searchTerm) return songs;

    return songs
      .filter(song => song.type === SongType.Radio)
      .filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [songs, searchTerm]);

  return {
    filteredRadios,
  };
};

export { useRadio };

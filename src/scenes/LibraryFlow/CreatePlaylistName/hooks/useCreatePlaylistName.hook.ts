import { useState } from 'react';

const useCreatePlaylistName = () => {
  const [playlistName, setPlaylistName] = useState<string>('');
  return {
    playlistName,
    setPlaylistName,
  };
};

export { useCreatePlaylistName };

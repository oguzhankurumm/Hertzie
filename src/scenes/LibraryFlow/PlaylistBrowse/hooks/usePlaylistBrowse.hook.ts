import { useState } from 'react';

const usePlaylistBrowse = () => {
  const categories = [
    {
      title: 'Browse all songs',
    },
    {
      title: 'Browse playlists',
    },
    {
      title: 'Browse albums',
    },
    {
      title: 'Browse albums',
    },
    {
      title: 'Browse artists',
    },
    {
      title: 'Browse genres',
    },
    {
      title: 'Browse folders without hierarchical view',
    },
    {
      title: 'Browse folders with hierarchical view',
    },
  ];

  return {
    categories,
  };
};

export { usePlaylistBrowse };

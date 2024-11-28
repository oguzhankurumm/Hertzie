import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';

const usePlaylistBrowse = () => {
  const categories = [
    {
      title: 'Browse all songs',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
    {
      title: 'Browse playlists',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
    {
      title: 'Browse albums',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
    {
      title: 'Browse albums',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
    {
      title: 'Browse artists',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
    {
      title: 'Browse genres',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
    {
      title: 'Browse folders without hierarchical view',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
    {
      title: 'Browse folders with hierarchical view',
      onPress: () => NavigationServices.navigate(Scenes.playlistSelect),
    },
  ];

  return {
    categories,
  };
};

export { usePlaylistBrowse };

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import CreatePlaylist from '_scenes/LibraryFlow/CreatePlaylist/CreatePlaylist.component';
import CreatePlaylistName from '_scenes/LibraryFlow/CreatePlaylistName/CreatePlaylistName.component';
import Library from '_scenes/LibraryFlow/Library/Library.component';
import PlaylistBrowse from '_scenes/LibraryFlow/PlaylistBrowse/PlaylistBrowse.component';
import PlaylistInside from '_scenes/LibraryFlow/PlaylistInside/PlaylistInside.component';

const LibraryStackNavigator = createNativeStackNavigator();

const LibraryStack = () => {
  return (
    <LibraryStackNavigator.Navigator
      initialRouteName={Scenes.library}
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <LibraryStackNavigator.Screen name={Scenes.library} component={Library} />
      <LibraryStackNavigator.Screen name={Scenes.createPlaylist} component={CreatePlaylist} />
      <LibraryStackNavigator.Screen
        name={Scenes.createPlaylistName}
        component={CreatePlaylistName}
      />
      <LibraryStackNavigator.Screen name={Scenes.playlistInside} component={PlaylistInside} />
      <LibraryStackNavigator.Screen name={Scenes.playlistBrowse} component={PlaylistBrowse} />
    </LibraryStackNavigator.Navigator>
  );
};

export default LibraryStack;

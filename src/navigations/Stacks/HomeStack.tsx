import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Home from '_scenes/HomeFlow/Home/Home.component';
import Playlist from '_scenes/HomeFlow/Playlist/Playlist.component';

const HomeStackNavigator = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName={Scenes.home}
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <HomeStackNavigator.Screen name={Scenes.home} component={Home} />
      <HomeStackNavigator.Screen name={Scenes.playlist2} component={Playlist} />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;

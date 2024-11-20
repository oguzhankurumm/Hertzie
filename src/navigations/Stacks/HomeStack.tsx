import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Home from '_scenes/HomeFlow/Home/Home.component';

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
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;

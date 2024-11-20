import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Home from '_scenes/HomeFlow/Home/Home.component';
import Settings from '_scenes/SettingsFlow/Settings/Settings.component';

const SettingsStackNavigator = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <SettingsStackNavigator.Navigator
      initialRouteName={Scenes.settings}
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <SettingsStackNavigator.Screen name={Scenes.settings} component={Settings} />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsStack;

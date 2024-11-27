import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Account from '_scenes/SettingsFlow/Account/Account.component';
import Equalizer from '_scenes/SettingsFlow/Equalizer/Equalizer.component';
import Feedback from '_scenes/SettingsFlow/Feedback/Feedback.component';
import PlaybackAndHertz from '_scenes/SettingsFlow/PlaybackAndHertz/PlaybackAndHertz.component';
import ScanMusic from '_scenes/SettingsFlow/ScanMusic/ScanMusic.component';
import SelectLanguage from '_scenes/SettingsFlow/SelectLanguage/SelectLanguage.component';
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
      <SettingsStackNavigator.Screen name={Scenes.account} component={Account} />
      <SettingsStackNavigator.Screen name={Scenes.playbackAndHertz} component={PlaybackAndHertz} />
      <SettingsStackNavigator.Screen name={Scenes.selectLanguage} component={SelectLanguage} />
      <SettingsStackNavigator.Screen name={Scenes.scanMusic} component={ScanMusic} />
      <SettingsStackNavigator.Screen name={Scenes.feedback} component={Feedback} />
      <SettingsStackNavigator.Screen name={Scenes.equalizer} component={Equalizer} />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsStack;

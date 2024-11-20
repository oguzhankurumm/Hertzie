import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Splash from '_scenes/Splash/Splash.component';

const SplashStackNavigator = createNativeStackNavigator();

const SplashStack = () => {
  return (
    <SplashStackNavigator.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
      <SplashStackNavigator.Screen name={Scenes.splash} component={Splash} />
    </SplashStackNavigator.Navigator>
  );
};

export default SplashStack;

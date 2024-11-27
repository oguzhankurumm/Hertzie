import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Radio from '_scenes/RadioFlow/Radio/Radio.component';

const RadioStackNavigator = createNativeStackNavigator();

const RadioStack = () => {
  return (
    <RadioStackNavigator.Navigator
      initialRouteName={Scenes.radio}
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <RadioStackNavigator.Screen name={Scenes.radio} component={Radio} />
    </RadioStackNavigator.Navigator>
  );
};

export default RadioStack;

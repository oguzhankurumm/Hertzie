import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Login from '_scenes/AuthenticationFlow/Login/Login.component';
import Home from '_scenes/HomeFlow/Home/Home.component';
import { useAuthStore } from '_stores/authStore';

const HomeStackNavigator = createNativeStackNavigator();

const HomeStack = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <HomeStackNavigator.Navigator
      initialRouteName={Scenes.home}
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      {isLoggedIn ? (
        <HomeStackNavigator.Screen name={Scenes.login} component={Login} />
      ) : (
        <HomeStackNavigator.Screen name={Scenes.home} component={Home} />
      )}
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;

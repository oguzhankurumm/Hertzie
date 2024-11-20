import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Login from '_scenes/AuthenticationFlow/Login/Login.component';
import Register from '_scenes/AuthenticationFlow/Register/Register.component';
import { useTheme } from '_styles/theming';

const AuthenticationStackNavigator = createNativeStackNavigator();

const AuthStack = () => {
  const theme = useTheme();

  return (
    <AuthenticationStackNavigator.Navigator
      initialRouteName={Scenes.login}
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        headerStyle: {
          backgroundColor: theme?.gray[100],
        },
        headerTitle: '',
        headerShadowVisible: false, // applied here
        headerBackTitleVisible: false,
      }}>
      <AuthenticationStackNavigator.Screen name={Scenes.login} component={Login} />
      <AuthenticationStackNavigator.Screen name={Scenes.register} component={Register} />
    </AuthenticationStackNavigator.Navigator>
  );
};

export default AuthStack;

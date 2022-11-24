import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GUIDE_ROUTE, HOME_ROUTE} from './src/constants/routes';
import {Home, Guide} from './src/screens';

export type RootStackParamList = {
  HOME_ROUTE: undefined;
  GUIDE_ROUTE: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={HOME_ROUTE}>
        <Stack.Screen name={HOME_ROUTE} component={Home} />
        <Stack.Screen name={GUIDE_ROUTE} component={Guide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

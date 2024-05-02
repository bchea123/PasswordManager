import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Vault from './screens/Vault';
import Settings from './screens/Settings';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      // TODO
    </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Vault"
        component={Vault}
        options={{}}
      />
      <Tab.Screen 
        name="Settings"
        component={Settings}
        options={{}}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}
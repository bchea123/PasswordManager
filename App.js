import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Vault from './screens/Vault';
import Settings from './screens/Settings';

import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

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
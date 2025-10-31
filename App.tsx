import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import MinhasPartidas from './screens/MinhasPartidas';
import EditarPartida from './screens/EditarPartida';
import BuscarPartidas from './screens/BuscarPartidas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MinhasPartidas" component={MinhasPartidas} />
        <Stack.Screen name="BuscarPartidas" component={BuscarPartidas} />
        <Stack.Screen 
          name="EditarPartida" 
          component={EditarPartida}
          options={{ presentation: 'transparentModal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Busca from './screens/Buscar';
import Perfil from './screens/Perfil';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={{
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, 
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Início', 
            tabBarIcon: ({ color, size }) => (
              <Icon name={'home-outline'} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Buscar"
          component={Busca}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size }) => (
              <Icon name="magnify" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size, }) => (
              <Icon name={'account-outline'} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
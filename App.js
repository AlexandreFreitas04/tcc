import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Busca from './screens/Buscar';
import Perfil from './screens/Perfil';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavegacaoPrincipal() {
  return (
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
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
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
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? 'account' : 'account-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {

  const [usuarioLogado, setUsuarioLogado] = useState(false);

  const handleLogin = () => {
    setUsuarioLogado(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {usuarioLogado ? (
          <Stack.Screen name="Principal" component={NavegacaoPrincipal} />
        ) : (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
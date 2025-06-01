import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './screens/Home';
import Buscar from './screens/Buscar'
import MeuPerfil from './screens/MeuPerfil'
import HistPartida from './screens/HistPartida'
import Estatisticas from './screens/Estatisticas';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#2c2c2c',
            height: 90,
            paddingTop: 5,
            borderTopWidth: 0
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle:{
            fontSize: 12,
            fontFamily: 'bold'
          }
        }}
      >
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => <Icon name='home' size={30} color={'white'} />             
        }} />
        <Tab.Screen name="Historico" component={HistPartida}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name='soccer-field' size={30} color={'white'}/>             
        }} />
        <Tab.Screen name="Buscar" component={Buscar}
        options={{
          tabBarIcon: () => <Icon name='search' size={30} color={'white'}/>             
        }} />
        <Tab.Screen name="Estatisticas" component={Estatisticas}
        options={{
          tabBarIcon: () => <Icon name='analytics' size={30} color={'white'}/>             
        }} />
        <Tab.Screen name="Meu Perfil" component={MeuPerfil}
        options={{
          tabBarIcon: () => <Icon name='home' size={30} color={'white'}/>             
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React, { useState } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import styles from '../estilo';
import BuscarPartidas from '../screens/BuscarPartidas';
import MinhasPartidas from '../screens/MinhasPartidas';
import Perfil from '../screens/Perfil';
import CriarPartidaModal from '../screens/modalCadastroPartida';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.floatingTabBar,
                    tabBarItemStyle: styles.tabBarItem,
                    tabBarActiveTintColor: '#10B981',
                    tabBarInactiveTintColor: '#9CA3AF',
                }}
            >
                    <Tab.Screen
                        name="BuscarPartidas"
                        component = {BuscarPartidas}
                        options ={{
                            tabBarIcon: ({color, focused}) => (
                                <Ionicons name ={focused ? 'football' : 'football-outline'} size={26} color={color}/>
                            ),
                        }}
                    />
                    <Tab.Screen 
                        name="CriarPartida"
                        component={View}
                        listeners={{
                            tabPress:(e) => {
                                e.preventDefault();
                                setModalVisible(true);
                            },
                        }}
                    options={{
                        tabBarIcon: () => (
                            <View style={styles.botaoCentralCriar}>
                                <Ionicons name = "add" size ={32} color = "#FFF9F0" />
                            </View>
                        ),
                    }}
                    />

                    <Tab.Screen 
                        name="MinhasPartidas"
                        component={MinhasPartidas}
                        options={{
                            tabBarIcon:({color, focused}) => (
                                <Ionicons name={focused ? 'trophy' : 'trophy-outline'} size={25} color = {color}/>
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Perfil"
                        component={Perfil}
                        options={{
                            tabBarIcon: ({ color, focused}) => (
                                <Ionicons name={focused ? 'person' : 'person-outline'} size={25} color={color}/>
                            ),
                        }}
                    />
            </Tab.Navigator>

            <CriarPartidaModal 
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </>
    );
}


import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// 1. A importação mudou para 'expo-status-bar'
import { StatusBar } from 'expo-status-bar';
import styles from '../estilos/homeStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
  return (
    <View style={styles.container}>

      <StatusBar style="light"/>

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Deu Jogo!</Text>
        <TouchableOpacity>
          <Icon name="bell-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </View>
  );
}
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../estilos/homeStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Deu Jogo!</Text>
        <TouchableOpacity>
          <Icon name="bell-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.menuContainer}>

          <TouchableOpacity style={styles.menuBotao}>
            <Icon name="plus-circle-outline" size={40} color="#2563EB" />
            <Text style={styles.menuTitulo}>Criar Partida</Text>
            <Text style={styles.menuSubtitulo}>Organize um novo jogo e chame a galera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuBotao}>
            <Icon name="calendar-check-outline" size={40} color="#2563EB" />
            <Text style={styles.menuTitulo}>Minhas Partidas</Text>
            <Text style={styles.menuSubtitulo}>Veja os jogos que você já confirmou</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
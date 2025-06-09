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

          {/* Criar Partida */}
          <TouchableOpacity style={styles.menuBotao}>
            <Icon name="plus-circle-outline" size={40} color="#2563EB" />
            <Text style={styles.menuTitulo}>Criar Partida</Text>
            <Text style={styles.menuSubtitulo}>Organize um novo jogo e chame a galera</Text>
          </TouchableOpacity>

          {/* Minhas Partidas */}
          <TouchableOpacity style={styles.menuBotao}>
            <Icon name="calendar-check-outline" size={40} color="#2563EB" />
            <Text style={styles.menuTitulo}>Minhas Partidas</Text>
            <Text style={styles.menuSubtitulo}>Veja os jogos que você já confirmou</Text>
          </TouchableOpacity>

          {/* Estatisticas */}
          <TouchableOpacity style={styles.menuBotao}>
            <Icon name="poll" size={40} color="#2563EB" />
            <Text style={styles.menuTitulo}>Minhas Estatísticas</Text>
            <Text style={styles.menuSubtitulo}>Acompanhe seu desempenho e histórico</Text>
          </TouchableOpacity>

          {/* Histórico de Partida */}   
          <TouchableOpacity style={styles.menuBotao}>
            <Icon name="history" size={40} color="#2563EB" />
            <Text style={styles.menuTitulo}>Histórico de Partida</Text>
            <Text style={styles.menuSubtitulo}>Reveja os resultados dos seus jogos passados</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}
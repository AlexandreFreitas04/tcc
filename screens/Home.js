import React from 'react';
import {Text, View, SafeAreaView } from 'react-native';
import styles from '../estilos/homeStyle';

export default function Home() {
  return (
    // SafeAreaView garante que o conteúdo não fique sob as barras do sistema
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Tela Home</Text>

      </View>
    </SafeAreaView>
  );
}



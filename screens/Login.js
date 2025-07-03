import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ onLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Deu Jogo!</Text>
      

      <TouchableOpacity style={styles.botao} onPress={onLogin}>
        <Text style={styles.textoBotao}>Entrar (Simulação)</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
  },
  titulo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2563EB',
    fontFamily: 'sans-serif-condensed',
    marginBottom: 50,
  },
  botao: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#2563EB',
    fontSize: 16,
  },
});
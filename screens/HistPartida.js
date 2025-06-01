import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../estilos/histPartidaStyle';
import Texto from '../meuTexto';

export default function HistPartida () {
  return (
    <View style={styles.container}>
      <Texto>Suas ultimas partidas</Texto>
    </View>
  )
}


  
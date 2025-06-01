import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../estilos/histPartidaStyle';
import Texto from '../meuTexto';
const Partidas= [
  {
    id: '1',
    data: '01/06/2025',
    meuTime: 'Time A',
    adversario: 'Time B',
    meuPlacar: '9',
    advPlacar: '5',
    resultado: 'Vitória'
  },
  {
    id: '1',
    data: '01/06/2025',
    meuTime: 'Time A',
    adversario: 'Time B',
    meuPlacar: '9',
    advPlacar: '9',
    resultado: 'Empate'
  },
  {
    id: '3',
    data: '11/05/2025',
    meuTime: 'Time A',
    adversario: 'Time B',
    meuPlacar: '15',
    advPlacar: '9',
    resultado: 'Vitória'
  },
  {
    id: '4',
    data: '01/05/2025',
    meuTime: 'Time A',
    adversario: 'Time B',
    meuPlacar: '4',
    advPlacar: '12',
    resultado: 'Derrota'
  },
  
]
export default function HistPartida () {
  return (
    <View style={styles.container}>
      <Texto>Suas ultimas partidas</Texto>
    </View>
  )
}


  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {
  useFonts({
    'Jersey20': require('./assets/fonts/Jersey20-Regular.ttf'),
    'Exo2-Bold': require('./assets/fonts/Exo_2/static/Exo2-Bold.ttf')
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTexto}>Bem vindo Jogador!</Text>
      </View>

      {/*Seção Próxima partida*/}
      <View>

      </View>

      {/*Meus Rachões*/}
      <View style={styles.proxJogoSec}>
        <Text style={styles.titulosSecao}> Próxima Partida </Text>
      </View>

      {/*Meu Ultimo Jogo*/}
      <View>

      </View>

      {/*Footer*/}
      <View>

      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerTexto:{
    color: '#ffc107',
    fontSize: 40,
    fontFamily: 'Exo2-Bold',
  },
  header:{
    marginTop: 150, 
    alignItems: 'center'
  },
  proxJogoSec:{
    alignItems: 'center'
  }
});

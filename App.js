import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';
import Texto from './meuTexto';

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Texto style={styles.headerTexto}>Bem vindo Jogador!</Texto>
      </View>

      {/*Próxima partida*/}
      <View style={styles.proxJogoSec}>
        <Texto style={styles.titulosSecao}> Próxima Partida </Texto>
        <Texto style={styles.nomeRachao}>  Futebol de Domingo {/*futuramente aqui vai ser uma variavel*/} </Texto>
          <View style={styles.linhaCronometro}>
            <Texto style={styles.textoFaltam}> FALTAM: </Texto>
          </View>
      </View>

      {/*Meus Rachões*/}
      <View>

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
  },
  header:{
    marginTop: 150, 
    alignItems: 'center'
  },
  proxJogoSec:{
    alignItems: 'center'
  },
  titulosSecao:{
    fontSize: 30,
    marginTop: 20
  },
  linhaCronometro: { 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  textoFaltam: {
    fontSize: 17,
    marginTop: 20,
    marginLeft: 12
  },
  nomeRachao:{
    marginTop: 10
  }
});

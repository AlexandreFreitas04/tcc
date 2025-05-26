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

            <View style={styles.blocoTempo}>
              <Texto style={styles.numeroTempo}>72</Texto> 
              <Texto style={styles.unidadeTempo}>HORAS</Texto>
            </View>

            <View style={styles.blocoTempo}>
              <Texto style={styles.numeroTempo}>00</Texto> 
              <Texto style={styles.unidadeTempo}>Minutos</Texto>
            </View>

            <View style={styles.blocoTempo}>
              <Texto style={styles.numeroTempo}>00</Texto> 
              <Texto style={styles.unidadeTempo}>Segundos</Texto>
            </View>

            <TouchableOpacity>
              <Texto style={styles.verDetalheProxJogo}>Ver{'\n'}Detalhes</Texto>
            </TouchableOpacity>
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
    marginTop: 100, 
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
    marginLeft: 8
  },
  nomeRachao:{
    marginTop: 10
  },
   blocoTempo: {
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10 
  }, 
  numeroTempo: {
    fontSize: 20,
  },
  unidadeTempo: {
    fontSize: 8,
    textTransform: 'uppercase',
  },
  verDetalheProxJogo:{
    color: '#ffc107',
    marginLeft: 20,
    fontSize: 16
  }
});

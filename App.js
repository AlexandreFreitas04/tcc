import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
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

          <View style={styles.linha}>
            <Texto style={styles.textoFaltam}> FALTAM: </Texto>

            <View style={styles.blococronometro}>
              <Texto style={styles.numeroTempo}>72</Texto> 
              <Texto style={styles.unidadeTempo}>HORAS</Texto>
            </View>

            <View style={styles.blococronometro}>
              <Texto style={styles.numeroTempo}>00</Texto> 
              <Texto style={styles.unidadeTempo}>Minutos</Texto>
            </View>

            <View style={styles.blococronometro}>
              <Texto style={styles.numeroTempo}>00</Texto> 
              <Texto style={styles.unidadeTempo}>Segundos</Texto>
            </View>

            <TouchableOpacity>
              <Texto style={styles.verDetalheProxJogo}>    Ver{'\n'}Detalhes</Texto>
            </TouchableOpacity>
          </View>


      </View>

      // ... (código anterior) ...
      <View style={styles.proxJogoSec}> 
        <Texto style={styles.titulosSecao}> Meus Rachões </Texto>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollRachoesContainer}>
          <TouchableOpacity style={styles.bloco}>
            <Texto style={styles.textoMeusRachoes}>Criar {'\n'} Rachão</Texto>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Texto style={styles.textoMeusRachoes}>Futebol {'\n'} de Domingo</Texto>
            <Texto style={styles.verDetalhe}>Ver Detalhes</Texto>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Texto style={styles.textoMeusRachoes}>Futebol {'\n'} de Quarta</Texto> 
            <Texto style={styles.verDetalhe}>Ver detalhes</Texto>
          </TouchableOpacity>
            <TouchableOpacity style={styles.bloco}>
            <Texto style={styles.textoMeusRachoes}>Futebol {'\n'} de Segunda</Texto> 
            <Texto style={styles.verDetalhe}>Ver detalhes</Texto>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bloco}>
            <Texto style={styles.textoMeusRachoes}>Futebol {'\n'} de Sábado</Texto> 
            <Texto style={styles.verDetalhe}>Ver detalhes</Texto>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/*Meu Ultimo Jogo*/}
      <View>

      </View>

      {/*Bottom Tabs*/}
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
    marginTop: 40
  },
  linha: { 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  textoFaltam: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 8
  },
  nomeRachao:{
    marginTop: 10
  },
   blococronometro: {
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10 
  },
  bloco:{

    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginRight: 15,
    marginLeft: 5, 
    width: 95, 
    height: 95, 
    padding: 8,       
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
  },
  verDetalhe:{
    color:'#ffc107',
    fontSize: 12,
  },
  textoMeusRachoes:{
    fontSize: 14,
    textAlign: 'center'
  },
  scrollRachoesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    
  },
});

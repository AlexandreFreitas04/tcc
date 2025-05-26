import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {useFonts} from 'expo-font';
import Texto from './meuTexto';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  useFonts({
    'Jersey20': require('./assets/fonts/Jersey20-Regular.ttf'),
    'Exo2-Bold': require('./assets/fonts/Exo_2/static/Exo2-Bold.ttf')
  });

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

      <View style={styles.proxJogoSec}> 
        <Texto style={styles.titulosSecao}> Meus Rachões </Texto>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollRachoesContainer}>
          <TouchableOpacity style={styles.bloco}>
            <View style={styles.blococriar}>
              <AntDesign name="pluscircle" size={24} color="white" style={styles.corIconAdd} />
              <Texto style={styles.textoCriarRachao}>Criar {'\n'} Rachão</Texto>
            </View>
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
      <View style={styles.proxJogoSec}>
        <Texto style={styles.titulosSecao}> Meu Ultimo Jogo </Texto>

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
    fontSize: 28,
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
    width: 75, 
    height: 80,
    paddingTop:18,
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
  blococriar:{
    flexDirection:'row',
    alignItems: 'center',    
    justifyContent: 'center',
    width: '100%',          
    height: '100%',          
  },
  numeroTempo: {
    fontSize: 18,
  },
  unidadeTempo: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
  verDetalheProxJogo:{
    color: '#ffc107',
    marginLeft: 18,
    fontSize: 14
  },
  verDetalhe:{
    color:'#ffc107',
    fontSize: 10,
  },
  textoMeusRachoes:{
    fontSize: 12,
    textAlign: 'center', 
    marginLeft: 5
  },
  scrollRachoesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  corIconAdd:{
    color: '#ffc107'
  },
  textoCriarRachao:{
    color: '#ffc107',
    fontSize: 12,
    textAlign: 'center', 
    marginLeft: 5
  }
});

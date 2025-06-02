import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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
    resultado: 'Vitoria'
  },
  {
    id: '2',
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
    resultado: 'Vitoria'
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

const ItemPartida = ({ data, meuTime, meuPlacar, adversario, placarAdversario, resultado }) => {

  let estiloMeuPlacar;
  let estiloAdvPlacar;
  let estiloResultadoTexto;
  
  if (resultado === 'Vitoria') {
    estiloMeuPlacar = styles.textoVitoria; 
    estiloAdvPlacar = styles.textoDerrota;
    estiloResultadoTexto = styles.textoVitoria;
  } else if (resultado === 'Derrota') {
    estiloMeuPlacar = styles.textoDerrota;
    estiloAdvPlacar = styles.textoVitoria;
    estiloResultadoTexto = styles.textoDerrota;
  } else { 
    estiloMeuPlacar = styles.textoEmpate;
    estiloAdvPlacar = styles.textoEmpate;
    estiloResultadoTexto = styles.textoEmpate;
  }

  return(
  <View style={styles.itemPartidaContainer}>
    <Texto style={styles.dataPartida}>{data}</Texto>
      <TouchableOpacity style={styles.placar}> 
        <Texto style={styles.time}>{meuTime}</Texto>
        <Texto style={[styles.placarNumero, estiloMeuPlacar]}>{meuPlacar} </Texto>
        <Texto style={styles.vsTexto}>X</Texto>
        <Texto style={[styles.placarNumero, estiloAdvPlacar]}>{placarAdversario} </Texto>
        <Texto style={styles.time}>{adversario}</Texto>   
      </TouchableOpacity>
        <Texto style={[styles.resultadoTexto, estiloResultadoTexto]}>{resultado.toUpperCase()} </Texto>
  </View>
  );


}
export default function HistPartida () {
const renderItem = ({ item }) => (
    <ItemPartida
      data={item.data}
      meuTime={item.meuTime}
      meuPlacar={item.meuPlacar}
      adversario={item.adversario}
      placarAdversario={item.advPlacar}
      resultado={item.resultado}
    />
  );
  return (
   <View style={styles.container}>
      <Texto style={styles.tituloPagina}>Suas últimas partidas</Texto> 
      <FlatList
        data={Partidas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


  

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerTexto: {
    color: '#ffc107',
    fontSize: 38,
  },
  header: {
    marginTop: 100,
    alignItems: 'center'
  },
  proxJogoSec: {
    alignItems: 'center'
  },
  titulosSecao: {
    fontSize: 26,
    marginTop: 60,
    width: '100%',
    textAlign: 'center'
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
  nomeRachao: {
    marginTop: 20
  },
  blococronometro: {
    backgroundColor: '#2C2C2C',
    width: 80,
    height: 100,
    paddingTop: 18,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10
  },
  bloco: {
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginRight: 15,
    marginLeft: 5,
    width: 140,
    height: 140,
    padding: 16,
  },
  blococriar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  numeroTempo: {
    fontSize: 16,
  },
  unidadeTempo: {
    paddingTop: 20,
    fontSize: 13,
    textTransform: 'uppercase',
  },
  verDetalheProxJogo: {
    color: '#ffc107',
    marginLeft: 18,
    fontSize: 12
  },
  verDetalhe: {
    color: '#ffc107',
    fontSize: 10,
  },
  textoMeusRachoes: {
    fontSize: 12,
    textAlign: 'center',
    marginLeft: 5
  },
  scrollRachoesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textoCriarRachao: {
    color: '#ffc107',
    fontSize: 12,
    textAlign: 'center',
    marginLeft: 5
  },
  linhaUltimoJogo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 30
  },
  textoPlacarVit: {
    fontSize: 24,
    textAlign: 'center',
    color: 'green'
  },
  textoPlacarDer: {
    fontSize: 24,
    textAlign: 'center',
    color: 'red'
  },
  textoSeparador: {
    fontSize: 20
  },
  textoVerTodos: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    color: '#ffc107'
  }
});
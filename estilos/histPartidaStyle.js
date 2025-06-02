import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  tituloPagina: {
    fontSize: 24, 
    textAlign: 'center',
    marginBottom: 20,
  },
  itemPartidaContainer: {
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  dataPartida: {
    fontSize: 13, 
    textAlign: 'right',
    marginBottom: 8,
  },
  placar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  time: {
    fontSize: 17, 
    flex: 2,
    textAlign: 'center',
  },
  placarNumero: {
    fontSize: 22, 
  },
  vsTexto: {
    fontSize: 15, 
    marginHorizontal: 8,
  },
  resultadoTexto: {
    fontSize: 15, 
    textAlign: 'center',
    marginTop: 5,
    textTransform: 'uppercase',
  },
  textoVitoria: {
    color: 'green',
  },
  textoDerrota: {
    color: 'red',
  },
  textoEmpate: {
    color: 'gray',
  }
});
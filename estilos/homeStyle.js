import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  cabecalho: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 20,
    paddingTop: 40,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titulo: {
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    fontSize: 36,
    color: '#FFFFFF',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  menuBotao: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 30,
    paddingHorizontal: 20, 
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,

  },
  menuTitulo: {
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1f2937',
    marginTop: 10,
  },
  menuSubtitulo: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default styles;
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
  sino:{
    justifyContent: 'flex-end'
  }
});

export default styles;
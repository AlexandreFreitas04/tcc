import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },

  cabecalho: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingTop: 60,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#2563EB',
  },
  nomePerfil: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },
  botaoEditar: {
    backgroundColor: '#EFF6FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  textoBotaoEditar: {
    color: '#2563EB',
    fontWeight: 'bold',
    fontSize: 14,
  },

  secao: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },

  containerEstatisticas: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  itemEstatistica: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  labelEstatistica: {
    fontSize: 16,
    color: '#6B7280',
  },
  valorEstatistica: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },

  containerBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    width: '31%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  badgeIconeContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  nomeBadge: {
    fontSize: 12,
    color: '#374151',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
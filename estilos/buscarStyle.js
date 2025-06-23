import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // --- ESTRUTURA GERAL ---
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    paddingTop: 50,
  },
  containerSuperior: {
    paddingHorizontal: 20,
    zIndex: 1,
  },
  areaDaLista: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // --- COMPONENTES DA PARTE SUPERIOR ---
  caixaDeBusca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  campoDeBusca: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    fontSize: 16,
    color: '#1f2937',
  },
  containerAbas: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    marginBottom: 20,
    padding: 4,
  },
  botaoAba: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoAbaAtivo: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  textoAba: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b7280',
  },
  textoAbaAtivo: {
    color: '#2563EB',
  },

  // --- MENUS DE FILTRO / ORGANIZAÇÃO (Apenas para partidas) ---
  containerDeFiltros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  containerMenuFiltro: {
    flex: 1,
  },
  botaoGatilho: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  textoGatilho: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#374151',
  },
  opcoesContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'absolute',
    top: '100%',
    width: '100%',
    elevation: 5,
  },
  opcaoBotao: {
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  opcaoTexto: {
    fontSize: 15,
    color: '#374151',
  },
  
  // --- CARD DE PARTIDA (Layout Original) ---
  cardPartida: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  cardVagas: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  cardVagasLotado: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  cardCorpo: {
    paddingVertical: 12,
  },
  cardInfo: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 5,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 12,
    alignItems: 'flex-end',
  },
  botaoVerDetalhes: {
    backgroundColor: '#EFF6FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  textoBotaoVerDetalhes: {
    color: '#2563EB',
    fontWeight: 'bold',
    fontSize: 13,
  },
  
  // --- CARD DE JOGADOR (Layout que gostou) ---
  cardJogador: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textoAvatar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  infoJogador: {
    flex: 1,
  },
  nomeJogador: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  esporteJogador: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },

  // --- AVISOS ---
  textoAviso: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 16,
    marginTop: 40,
  },
});

export default styles;
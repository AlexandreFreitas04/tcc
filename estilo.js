import { StyleSheet } from "react-native";

export default StyleSheet.create({

  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  width: '95%',              // 🔹 antes era 90%, agora ocupa mais da tela
  maxHeight: '90%',
  backgroundColor: '#FFF9F0',
  borderRadius: 20,
  padding: 25,               // 🔹 mais respiro interno
  alignItems: 'center',
},

modalTitle: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 24,
  marginBottom: 20,
  textAlign: 'center',
},

// Inputs maiores e mais largos
modalInput: {
  width: '90%',              // 🔹 ocupa 90% da largura do modal
  height: 50,
  borderRadius: 10,
  marginBottom: 15,
  fontFamily: 'Montserrat-Regular',
  fontSize: 16,
  color: '#333',
  borderWidth: 1,
  borderColor: '#7bacec',
  backgroundColor: '#fff',
  paddingHorizontal: 15,
  textAlignVertical: 'center',
},

// Pickers seguem o mesmo padrão visual
modalPickerContainer: {
  width: '90%',
  height: 50,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#7bacec',
  backgroundColor: '#fff',
  justifyContent: 'center',
  marginBottom: 15,
  overflow: 'hidden',
},

modalPicker: {
  width: '100%',
  height: 50,
  backgroundColor: 'transparent',
  color: '#333',
  fontFamily: 'Montserrat-Regular',
  fontSize: 16,
  paddingHorizontal: 10,
},

modalDateTimePicker: {
  width: '90%',
  height: 50,
  borderRadius: 10,
  marginBottom: 15,
  borderWidth: 1,
  borderColor: '#7bacec',
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
},

modalButtonRow: {
  width: '90%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
},

modalButton: {
  width: '48%',
  height: 45,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
},

modalButtonClose: { backgroundColor: '#ccc' },
modalButtonCreate: { backgroundColor: '#7bacec' },
modalButtonText: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 16,
  color: '#000',
},

  fundoApp: {
    flex: 1,
    backgroundColor: '#7bacec',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 180,
  },

  homeHeader: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    overflow: 'visible',
  },

  homeLogo: {
    width: 150,
    height: 150,
    marginRight: 15,
  },

  homeTitleContainer: {
    flexDirection: 'column',
  },

  homeTitleDeu: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 60,
    color: '#FFF9F0',
    lineHeight: 70,
  },

  homeTitleJogo: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 60,
    color: '#FFF9F0',
    lineHeight: 70,
  },

  homeButtonContainer: {
    width: '80%',
  },

  homeButton: {
    width: '100%',
    backgroundColor: '#FFF9F0',
    paddingVertical: 45,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  homeButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: '#333',
  },

  fundoLogin: {
    flex: 1,
    backgroundColor: '#7bacec',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoLogin: {
    marginTop: 20,
    width: '60%',
    height: '30%',
  },

  cardLogin: {
    backgroundColor: '#FFF9F0',
    width: '85%',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 20,
    paddingBottom: 30,
  },

  textLogin: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 25,
    textAlign: 'center',
    width: '90%',
    flexWrap: 'wrap',
  },

  subtextLogin: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    paddingTop: 1,
    textAlign: 'center',
    width: '90%',
    flexWrap: 'wrap',
  },

  inputTextLogin: {
    width: '80%',
    height: 45,
    borderRadius: 10,
    marginBottom: 15,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#666666',
    borderWidth: 1,
    borderColor: '#7bacec',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },

  botaoLogin: {
    width: '50%',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#7bacec',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBotao: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    color: '#000',
  },

  textCadastrar: {
    color: '#7bacec',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    width: '90%',
    flexWrap: 'wrap',
  },

  preTextCadastrar: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 20,
    textAlign: 'center',
    width: '90%',
    flexWrap: 'wrap',
  },

    minhasPartidasTitulo: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 26,
    color: '#FFF9F0',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },

  listaPartidasContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  cardPartida: {
    backgroundColor: '#FFF9F0',
    borderRadius: 15,
    padding: 15,
    width: '90%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardPartidaTitulo: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: '#333',
    marginBottom: 5,
  },

  cardPartidaInfo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#444',
  },

  semPartidasContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  semPartidasTexto: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#FFF9F0',
    textAlign: 'center',
  },

  botaoVoltarPartidas: {
    backgroundColor: '#FFF9F0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 20,
  },

  textoBotaoVoltarPartidas: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#000',
  },
});


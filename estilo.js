import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    height: '75%',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 20,
  },

  textLogin: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    marginTop: 50,
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
    borderRadius: 10,
    width: '80%',
    height: 45,
    marginBottom: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#7bacec',
    paddingHorizontal: 15,
  },

  botaoLogin: {
    backgroundColor: '#7bacec',
    width: '50%',
    height: 45,
    borderRadius: 5,
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
});

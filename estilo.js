import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fundoLogin: {
    flex: 1,
    backgroundColor: '#F5D488',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLogin:{
    marginTop: 20,
    width: '60%',
    height: '30%'
  },
  cardLogin:{
    backgroundColor:'#FFF9F0',
    width: '85%',
    height: '75%',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 20

  },
  textLogin:{
    fontFamily:'Montserrat-Bold',
    fontSize: 24,
    marginTop: 50,
    marginBottom: 25
  },
  subtextLogin:{
    fontFamily:'Montserrat-Regular',
    fontSize: 16,
    paddingTop: 1
  },
  inputTextLogin:{
    borderRadius: 10,
    width: '80%',
    height: 40,
    marginBottom: 15,
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#F5D488',
    paddingHorizontal: 15,
  },
  botaoLogin:{
    backgroundColor: '#F5D488',
    width: '50%',
    height: '5%',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBotao:{
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center'
  },
  textCadastrar:{
    color: '#F5D488',
    fontFamily: 'Montserrat-Bold'
  },
  preTextCadastrar:{
    fontFamily: 'Montserrat-Regular',
    marginTop: 20

  }

})
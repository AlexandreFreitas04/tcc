import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export default StyleSheet.create({
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
    backgroundColor: '#FFF9F0', 
    paddingVertical: 45,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    marginBottom: 25, 

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
    height: 'auto', 
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
    backgroundColor: '#fff',
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
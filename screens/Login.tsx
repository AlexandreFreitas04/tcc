import {Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo'
import {auth} from '../config/firebase'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation()

  const logar = () => {
    auth
    .signInWithEmailAndPassword(email, senha)
    .then (userCredentials =>{
      console.log ("Logado como: " + userCredentials.user?.email)
      navigation.replace('Home')
    })
    .catch(erro=>alert(erro.message))
  }

  return (
    <View style={styles.fundoLogin}>
      <View style={styles.cardLogin}>
        <Image 
        source={require('../assets/logo_nome.png')}
        style={styles.logoLogin}
        resizeMode="contain"/>
        <Text style={styles.subtextLogin}>Seu jogo começa aqui.</Text>
        <Text style={styles.textLogin}> Faça seu Login</Text>


        <TextInput 
        placeholder='E-mail'
        onChangeText = {texto => setEmail(texto)}
        style={styles.inputTextLogin}
        />

        <TextInput 
        placeholder = 'Senha'
        onChangeText = {texto => setSenha (texto)}
        style={styles.inputTextLogin}
        />

        <TouchableOpacity style={styles.botaoLogin} onPress={logar}> 
          <Text style={styles.textBotao}> Entrar </Text>
        </TouchableOpacity>
        <Text style={styles.preTextCadastrar}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.textCadastrar}
          onPress={() => navigation.replace('Register')}>Cadastre-se</Text>
        </TouchableOpacity>
       </View>
    </View>
  );
}


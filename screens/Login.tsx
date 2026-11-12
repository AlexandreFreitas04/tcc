import {Text, TouchableOpacity, View, TextInput, Image, Alert, ActivyIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo'
import {auth} from '../config/firebase'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false); 

  const navigation = useNavigation()

  const logar = async () => {
    if (!email.trim() || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setCarregando(true);
  
    try{
      const userCredentials = await auth.signInWithEmailAndPassword(email.trim(), senha);
      console.log('Logado como: ', userCredentials.user.email);

      navigation.replace('Home');
    } catch (error: any) {
      console.error('Erro ao logar:', error);

      let mensagem = 'Não foi possível realizar o login. Verifique sua conexão.';
      if (
          erro.code === 'auth/inavalid-credential'  ||
          erro.code === 'auth/user-not-found' ||
          erro.code === 'auth/wrong-password'
      ){
        mensagem = 'E-mail ou senha incorretos.';
      } else if (erro.code == 'auth/invalid-email') {
        mensagem = 'Digite um endereço de email válido.';
      } else if (erro.code == 'auth/too-many-requests') {
        mensagem = 'Muitas tentativas de login. Tente novamente mais tarde.';
      }

      Alert.alert('Erro no Login', mensagem);
    } finally {
      setCarregando(false);
    }
    }
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
        secureTextEntry
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


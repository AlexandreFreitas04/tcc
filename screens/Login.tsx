import {Text, TouchableOpacity, View, TextInput, Image, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo'
import {auth} from '../config/firebase'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false); 

  const navigation = useNavigation<any>()

  const logar = async () => {
    if (!email.trim() || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setCarregando(true);
  
    try{
      const userCredentials = await auth.signInWithEmailAndPassword(email.trim(), senha);
      console.log('Logado como: ', userCredentials.user?.email);

      navigation.replace('Home');
    } catch (erro: any) {
      console.error('Erro ao logar:', erro);

      let mensagem = 'Não foi possível realizar o login. Verifique sua conexão.';
      if (
          erro.code === 'auth/invalid-credential'  ||
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

  const recuperarSenha = async () => {
    if (!email.trim()) {
      Alert.alert(
        'Recuperar Senha',
        'Digite seu email no campo de login acima para enviarmos o link de redefinição de senha.'
      );
      return;
    }
    try {
      await auth.sendPasswordResetEmail(email.trim());
      Alert.alert(
        'Email enviado',
        'Verifique sua caixa de entrada para redefinir sua senha.'
      )
    } catch (erro: any) {
      Alert.alert('Erro', 'Não foi possível enviar o email. Verifique se o endereço de email está correto.')
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
        value={email}
        onChangeText = {texto => setEmail(texto)}
        style={styles.inputTextLogin}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        />

        <TextInput 
        placeholder = 'Senha'
        value = {senha}
        onChangeText = {texto => setSenha (texto)}
        style={styles.inputTextLogin}
        secureTextEntry
        />

        {/* Botão ESQUECEU A SENHA */}  
        <TouchableOpacity
          onPress={recuperarSenha}
          style={styles.botaoEsqueceuSenha}
        >
          <Text style={styles.textEsqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        {/* Botão LOGIN */}    
        <TouchableOpacity 
          style={styles.botaoLogin} 
          onPress={logar}
          disabled={carregando}
        > 
          {carregando ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.textBotao}>Entrar</Text>
        )}
        </TouchableOpacity>

        {/* Botão CADASTRAR*/}  
        <Text style={styles.preTextCadastrar}>Não tem uma conta?</Text>

        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.textCadastrar}>Cadastre-se</Text>
        </TouchableOpacity>
       </View>
    </View>
  );
}


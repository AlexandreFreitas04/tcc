
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation()


  return (
    <View style={styles.container}>
       <Text> Tela Login</Text>

       <TextInput 
       placeholder='E-mail'
       onChangeText = {texto => setEmail(texto)}
       />

       <TextInput 
       placeholder = 'Senha'
       onChangeText = {texto => setSenha (texto)}
       />

       <TouchableOpacity> 
        <Text> Entrar </Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

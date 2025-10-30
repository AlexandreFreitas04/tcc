import { Text, TouchableOpacity, View, TextInput, Alert, Platform } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../estilo';
import { handleRegister } from '../controllers/registerController';
import { maskCPF, maskTelefone } from   '../utils/masks'; 

export default function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setDataNascimento(selectedDate);
  };

  const registrar = async () => {
    const dataFormatada = dataNascimento
      ? dataNascimento.toLocaleDateString('pt-BR')
      : '';

    const resultado = await handleRegister({
      email,
      senha,
      confirmarSenha,
      cpf,
      telefone,
      dataNascimento: dataFormatada,
    });

    if (resultado.sucesso) {
      Alert.alert('Sucesso', resultado.mensagem);
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', resultado.mensagem);
    }
  };

  return (
    <View style={styles.fundoLogin}>
      <View style={styles.cardLogin}>
        <Text style={styles.textLogin}>Crie sua conta</Text>

        <TextInput
          placeholder='E-mail'
          value={email}
          onChangeText={setEmail}
          style={styles.inputTextLogin}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <TextInput
          placeholder='CPF (000.000.000-00)'
          value={cpf}
          onChangeText={(texto) => {
            setCpf(maskCPF(texto)); 
          }}
          style={styles.inputTextLogin}
          keyboardType='numeric'
          maxLength={14} 
        />

        <TouchableOpacity
          style={[styles.inputTextLogin, { justifyContent: 'center' }]}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={{ color: dataNascimento ? '#000' : '#666' }}>
            {dataNascimento
              ? dataNascimento.toLocaleDateString('pt-BR')
              : 'Selecione a data de nascimento'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={dataNascimento || new Date(2000, 0, 1)}
            mode="date"
            display="spinner"
            maximumDate={new Date()}
            onChange={onChangeDate}
          />
        )}

        <TextInput
          placeholder='Telefone ((00) 00000-0000)'
          value={telefone}
          onChangeText={(texto) => {
            setTelefone(maskTelefone(texto));
          }}
          style={styles.inputTextLogin}
          keyboardType='phone-pad'
          maxLength={15} 
        />

        <TextInput
          placeholder='Senha'
          value={senha}
          onChangeText={setSenha}
          style={styles.inputTextLogin}
          secureTextEntry
        />
        <TextInput
          placeholder='Confirmar senha'
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          style={styles.inputTextLogin}
          secureTextEntry
        />
        <TouchableOpacity style={styles.botaoLogin} onPress={registrar}>
          <Text style={styles.textBotao}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.preTextCadastrar}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textCadastrar}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
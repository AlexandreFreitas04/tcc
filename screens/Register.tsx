import { Text, TouchableOpacity, View, TextInput, Alert, Platform, ScrollView, Image, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
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
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const navigation = useNavigation<any>();

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setDataNascimento(selectedDate);
  };

  const registrar = async () => {
    const dataFormatada = dataNascimento
      ? dataNascimento.toLocaleDateString('pt-BR')
      : '';

    setCarregando(true);

    try{
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
     } finally { 
    setCarregando(false);
    };
  }
  return (
    <View style={styles.fundoLogin}>
      <View style={styles.headerRegister}>
        <Image
          source={require('../assets/logo_nome.png')}
          style={styles.logoRegister}
          resizeMode='contain'
        />
      </View>  

      <View style={styles.cardRegister}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollRegisterContent}
        >
          <Text style={styles.textLogin}>Crie sua conta</Text>
          <Text style={styles.subtextLogin}>Preencha seus dados para começar.</Text>

          {/*EMAIL*/}
          <View style={styles.inputContainerLogin}>
            <Ionicons name="mail-outline" size={20} color="#10B981" style={styles.inputIconLogin}/>
            <TextInput
              placeholder='E-mail'
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              style={styles.inputTextLogin}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />
          </View>

          {/*CPF*/}
          <View style={styles.inputContainerLogin}>
            <Ionicons name="card-outline" size={20} color="#10B981" style={styles.inputIconLogin} />
            <TextInput
              placeholder='000.000.000-00'
              placeholderTextColor="#999"
              value={cpf}
              onChangeText={(texto) => {
                setCpf(maskCPF(texto)); 
              }}
              style={styles.inputTextLogin}
              keyboardType='numeric'
              maxLength={14} 
            />
          </View>
          
          {/*Data de Nascimento*/}
          <TouchableOpacity
            style={[styles.inputContainerLogin]}
            onPress={() => setShowDatePicker(true)}
          >
            <Ionicons name="calendar-outline" size={20} color="#10b981" style={styles.inputIconLogin}/>
            <Text style={[styles.inputTextLogin, {color: dataNascimento ? '#333' : '#999'}]}>
              {dataNascimento
                ? dataNascimento.toLocaleDateString('pt-BR')
                : 'Selecione a data de nascimento'}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={dataNascimento || new Date(2000, 0, 1)}
              mode="date"
              display="default"
              maximumDate={new Date()}
              onChange={onChangeDate}
            />
          )}

          {/* Telefone */}
          <View style={styles.inputContainerLogin} >
            <Ionicons name="call-outline" size={20} color="#10B981" style={styles.inputIconLogin}/>
            <TextInput
              placeholder='Telefone (00) 00000-0000'
              placeholderTextColor="#999"
              value={telefone}
              onChangeText={(texto) => {
                setTelefone(maskTelefone(texto));
              }}
              style={styles.inputTextLogin}
              keyboardType='phone-pad'
              maxLength={15} 
            />
          </View>

          {/* Senha */}
          <View style={styles.inputContainerLogin}>
            <Ionicons name="lock-closed-outline" size={20} color="#10B981" style={styles.inputIconLogin} />

            <TextInput
              placeholder='Senha'
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              style={styles.inputTextLogin}
              secureTextEntry={!mostrarSenha}
            />

            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
              <Ionicons
              name={mostrarSenha ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#999"
              />
            </TouchableOpacity>
          </View>

          {/*Confirmar Senha*/}
          <View style={styles.inputContainerLogin}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#10B981" style={styles.inputIconLogin} />
            <TextInput
              placeholder='Confirmar senha'
              placeholderTextColor="#999"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              style={styles.inputTextLogin}
              secureTextEntry={!mostrarConfirmarSenha}
            />
            <TouchableOpacity onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
              <Ionicons
                name={mostrarConfirmarSenha ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Cadastrar */}
          <TouchableOpacity style={[styles.botaoLogin, {marginTop: 5}]} onPress={registrar} disabled={carregando}>
            {carregando ? (
              <ActivityIndicator color = "#FFF9F0" />
            ) : (
              <Text style={styles.textBotao}>Cadastrar</Text>
            )}
          </TouchableOpacity>
          
          <View style ={styles.rodapeCadastroContainer}>
            <Text style={styles.preTextCadastrar}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textCadastrar}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
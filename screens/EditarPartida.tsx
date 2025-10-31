import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { buscarPartidaPorId, atualizarPartida } from '../controllers/partidaController';
import styles from '../estilo';

const parseData = (strData: string) => {
  const [dia, mes, ano] = strData.split('/').map(Number);
  return new Date(ano, mes - 1, dia);
};

const parseHora = (strHora: string) => {
  const [hora, minuto] = strHora.split(':').map(Number);
  const data = new Date();
  data.setHours(hora, minuto);
  return data;
};

export default function EditarPartida({ route, navigation }) {
  const { partidaId } = route.params;
  const [loading, setLoading] = useState(true);

  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [piso, setPiso] = useState('sintetico');
  const [vagasJogadores, setVagasJogadores] = useState('');
  const [vagasGoleiros, setVagasGoleiros] = useState('');
  const [nivel, setNivel] = useState('amador');
  const [valor, setValor] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const [data, setData] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    async function carregarDadosPartida() {
      const resultado = await buscarPartidaPorId(partidaId);
      if (resultado.sucesso) {
        const partida = resultado.partida;
        setNome(partida.nome);
        setLocal(partida.local);
        setPiso(partida.piso);
        setVagasJogadores(String(partida.vagasJogadores));
        setVagasGoleiros(String(partida.vagasGoleiros));
        setNivel(partida.nivel);
        setValor(partida.valor);
        setObservacoes(partida.observacoes);
        setData(parseData(partida.data));
        setHora(parseHora(partida.hora));
      } else {
        Alert.alert('Erro', 'Não foi possível carregar os dados da partida.');
        navigation.goBack();
      }
      setLoading(false);
    }
    carregarDadosPartida();
  }, [partidaId]);

  const onChangeDate = (_: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setData(selectedDate);
  };

  const onChangeTime = (_: any, selectedTime?: Date) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedTime) setHora(selectedTime);
  };

  const fecharPickersIOS = () => {
    if (Platform.OS === 'ios') {
      setShowDatePicker(false);
      setShowTimePicker(false);
    }
  }

  const apenasNumeros = (texto: string) => /^[0-9]*$/.test(texto);

  const handleSalvar = async () => {
    const dadosPartida = {
      nome,
      local,
      data: data.toLocaleDateString('pt-BR'),
      hora: hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      piso,
      vagasJogadores: Number(vagasJogadores),
      vagasGoleiros: Number(vagasGoleiros),
      nivel,
      valor,
      observacoes,
    };

    const resultado = await atualizarPartida(partidaId, dadosPartida);

    if (resultado.sucesso) {
      Alert.alert('Sucesso', resultado.mensagem);
      navigation.goBack();
    } else {
      Alert.alert('Erro', resultado.mensagem);
    }
  };

  if (loading) {
    return (
      <View style={[styles.modalOverlay, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#FFF9F0" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.modalOverlay}
      contentContainerStyle={styles.modalScrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity 
        activeOpacity={1} 
        onPress={fecharPickersIOS} 
        style={styles.modalContainer}
      >
        <Text style={styles.modalTitle}>Editar Partida</Text>

        <TextInput
          placeholder="Nome da Partida"
          value={nome}
          onChangeText={setNome}
          style={styles.modalInput}
          placeholderTextColor="#666"
        />

        <TextInput
          placeholder="Local"
          value={local}
          onChangeText={setLocal}
          style={styles.modalInput}
          placeholderTextColor="#666"
        />

        <TouchableOpacity
          style={styles.modalDateTimePicker}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.modalPickerText}>{data.toLocaleDateString('pt-BR')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalDateTimePicker}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={styles.modalPickerText}>
            {hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display="spinner"
            onChange={onChangeDate}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            value={hora}
            mode="time"
            display="spinner"
            onChange={onChangeTime}
          />
        )}

        <TextInput
          placeholder="Vagas Jogadores (4-22)"
          value={vagasJogadores}
          onChangeText={(t) => apenasNumeros(t) && setVagasJogadores(t)}
          style={styles.modalInput}
          keyboardType="number-pad"
          maxLength={2}
          placeholderTextColor="#666"
        />

        <TextInput
          placeholder="Vagas Goleiros (0-4)"
          value={vagasGoleiros}
          onChangeText={(t) => apenasNumeros(t) && setVagasGoleiros(t)}
          style={styles.modalInput}
          keyboardType="number-pad"
          maxLength={1}
          placeholderTextColor="#666"
        />

        <View style={styles.modalPickerContainer}>
          <Picker
            selectedValue={piso}
            onValueChange={(v) => setPiso(v)}
            style={styles.modalPicker}
          >
            <Picker.Item label="Piso: Sintético" value="sintetico" />
            <Picker.Item label="Piso: Quadra (Salão)" value="quadra" />
            <Picker.Item label="Piso: Grama (Campo)" value="grama" />
          </Picker>
        </View>

        <View style={styles.modalPickerContainer}>
          <Picker
            selectedValue={nivel}
            onValueChange={(v) => setNivel(v)}
            style={styles.modalPicker}
          >
            <Picker.Item label="Nível: Amador" value="amador" />
            <Picker.Item label="Nível: Intermediário" value="intermediario" />
            <Picker.Item label="Nível: Avançado" value="avancado" />
          </Picker>
        </View>

        <TextInput
          placeholder="Valor por pessoa (ex: 20,00)"
          value={valor}
          onChangeText={setValor}
          style={styles.modalInput}
          keyboardType="numeric"
          placeholderTextColor="#666"
        />

        <TextInput
          placeholder="Observações (opcional)"
          value={observacoes}
          onChangeText={setObservacoes}
          style={[styles.modalInput, { height: 80, paddingTop: 10 }]}
          multiline
          placeholderTextColor="#666"
        />

        <View style={styles.modalButtonRow}>
          <TouchableOpacity
            style={[styles.modalButton, styles.modalButtonClose]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.modalButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, styles.modalButtonCreate]}
            onPress={handleSalvar}
          >
            <Text style={styles.modalButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
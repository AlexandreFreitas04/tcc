import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
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
    async function carregar() {
      const resultado = await buscarPartidaPorId(partidaId);
      if (resultado.sucesso) {
        const p = resultado.partida;
        setNome(p.nome);
        setLocal(p.local);
        setPiso(p.piso);
        setVagasJogadores(String(p.vagasJogadores));
        setVagasGoleiros(String(p.vagasGoleiros));
        setNivel(p.nivel);
        setValor(p.valor);
        setObservacoes(p.observacoes);
        setData(parseData(p.data));
        setHora(parseHora(p.hora));
      } else {
        Alert.alert('Erro', 'Não foi possível carregar a partida.');
        navigation.goBack();
      }
      setLoading(false);
    }
    carregar();
  }, [partidaId]);

  const apenasNumeros = (texto: string) => /^[0-9]*$/.test(texto);

  const handleSalvar = async () => {
    const partidaAtualizada = {
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
    const resultado = await atualizarPartida(partidaId, partidaAtualizada);
    if (resultado.sucesso) {
      Alert.alert('Sucesso', resultado.mensagem);
      navigation.goBack();
    } else {
      Alert.alert('Erro', resultado.mensagem);
    }
  };

  if (loading) {
    return (
      <View style={styles.fundoApp}>
        <ActivityIndicator size="large" color="#FFF9F0" />
      </View>
    );
  }

  return (
    <View style={styles.fundoApp}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.telaFormularioScroll}
      >
        <View style={styles.telaFormularioContainer}>
          <Text style={styles.tituloFormulario}>Editar Partida</Text>

          <TextInput
            style={styles.inputFormulario}
            placeholder="Nome da Partida"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.inputFormulario}
            placeholder="Local"
            value={local}
            onChangeText={setLocal}
            placeholderTextColor="#666"
          />

          <TouchableOpacity
            style={styles.inputFormulario}
            onPress={() => setShowDatePicker(true)}
          >
            <Text>{data.toLocaleDateString('pt-BR')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputFormulario}
            onPress={() => setShowTimePicker(true)}
          >
            <Text>{hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={data}
              mode="date"
              display="default"
              onChange={(_, d) => {
                setShowDatePicker(false);
                if (d) setData(d);
              }}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              value={hora}
              mode="time"
              display="default"
              onChange={(_, h) => {
                setShowTimePicker(false);
                if (h) setHora(h);
              }}
            />
          )}

          <TextInput
            style={styles.inputFormulario}
            placeholder="Vagas Jogadores (4-22)"
            value={vagasJogadores}
            onChangeText={(t) => apenasNumeros(t) && setVagasJogadores(t)}
            keyboardType="number-pad"
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.inputFormulario}
            placeholder="Vagas Goleiros (0-4)"
            value={vagasGoleiros}
            onChangeText={(t) => apenasNumeros(t) && setVagasGoleiros(t)}
            keyboardType="number-pad"
            placeholderTextColor="#666"
          />

          <View style={styles.pickerFormularioContainer}>
            <Picker
              selectedValue={piso}
              onValueChange={(v) => setPiso(v)}
              style={styles.pickerFormulario}
            >
              <Picker.Item label="Piso: Sintético" value="sintetico" />
              <Picker.Item label="Piso: Quadra (Salão)" value="quadra" />
              <Picker.Item label="Piso: Grama (Campo)" value="grama" />
            </Picker>
          </View>

          <View style={styles.pickerFormularioContainer}>
            <Picker
              selectedValue={nivel}
              onValueChange={(v) => setNivel(v)}
              style={styles.pickerFormulario}
            >
              <Picker.Item label="Nível: Amador" value="amador" />
              <Picker.Item label="Nível: Intermediário" value="intermediario" />
              <Picker.Item label="Nível: Avançado" value="avancado" />
            </Picker>
          </View>

          <TextInput
            style={styles.inputFormulario}
            placeholder="Valor por pessoa (ex: 20,00)"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
            placeholderTextColor="#666"
          />

          <TextInput
            style={[styles.inputFormulario, { height: 80, paddingTop: 10 }]}
            placeholder="Observações (opcional)"
            value={observacoes}
            onChangeText={setObservacoes}
            multiline
            placeholderTextColor="#666"
          />

          <View style={styles.botoesFormulario}>
            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.textoBotaoFormulario}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoSalvar}
              onPress={handleSalvar}
            >
              <Text style={styles.textoBotaoFormulario}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

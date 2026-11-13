import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { criarPartida } from '../controllers/partidaController';
import styles from '../estilo';

interface CriarPartidaModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function CriarPartidaModal({ visible, onClose }: CriarPartidaModalProps) {
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [modalidade, setModalidade] = useState('Futebol Society');
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

  const onChangeDate = (_: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) setData(selectedDate);
  };

  const onChangeTime = (_: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) setHora(selectedTime);
  };

  const apenasNumeros = (texto: string) => /^[0-9]*$/.test(texto);

  const handleCriarPartida = async () => {
    const dadosPartida = {
      nome: nome.trim(),
      local: local.trim(),
      modalidade,
      data: data.toLocaleDateString('pt-BR'),
      hora: hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      piso,
      vagasJogadores: Number(vagasJogadores),
      vagasGoleiros: Number(vagasGoleiros),
      nivel,
      valor,
      observacoes,
      criadoEm: new Date(),
    };

    const resultado = await criarPartida(dadosPartida);

    if (resultado.sucesso) {
      Alert.alert('Sucesso', resultado.mensagem);
      limparCampos();
      onClose();
    } else {
      Alert.alert('Erro', resultado.mensagem);
    }
  };

  const limparCampos = () => {
    setNome('');
    setLocal('');
    setPiso('sintetico');
    setVagasJogadores('');
    setVagasGoleiros('');
    setNivel('amador');
    setValor('');
    setObservacoes('');
    setData(new Date());
    setHora(new Date());
    setModalidade('Futebol Society');
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Criar Nova Partida</Text>

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

            <Picker
                selectedValue={modalidade}
                onValueChange={(v) => setModalidade(v)}
                style={styles.modalPicker}
              >
              <Picker.Item label="Modalidade: Futebol Society" value="Futebol Society" />
              <Picker.Item label="Modalidade: Futsal" value="Futsal" />
              <Picker.Item label="Modalidade: Futebol de Campo" value="Futebol de Campo" />
              <Picker.Item label="Modalidade: Vôlei" value="Vôlei" />
              <Picker.Item label="Modalidade: Basquete" value="Basquete" />
              <Picker.Item label="Modalidade: Beach Tennis" value="Beach Tennis" />
            <Picker.Item label="Modalidade: Handebol" value="Handebol" />
            </Picker>
            
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
                display="default"
                onChange={onChangeDate}
              />
            )}
            {showTimePicker && (
              <DateTimePicker
                value={hora}
                mode="time"
                display="default"
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
                onPress={onClose}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCreate]}
                onPress={handleCriarPartida}
              >
                <Text style={styles.modalButtonText}>Criar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

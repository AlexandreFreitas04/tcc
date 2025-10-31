
import React from 'react'; 
import { Modal, View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../estilo';


import { useCriarPartidaForm } from '../utils/modalCadastroPartida';

interface CriarPartidaModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function CriarPartidaModal({ visible, onClose }: CriarPartidaModalProps) {
  
  const { formState, formHandlers } = useCriarPartidaForm(onClose);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', width: '100%', alignItems: 'center'}}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Criar Nova Partida</Text>

            <FormTextInput
              placeholder="Nome da Partida (ex: Racha de Terça)"
              value={formState.nome}
              onChangeText={formHandlers.setNome}
            />
            <FormTextInput
              placeholder="Local (ex: Quadra do Zé)"
              value={formState.local}
              onChangeText={formHandlers.setLocal}
            />

            <FormDateTimeRow
              dataLabel={formState.data.toLocaleDateString('pt-BR')}
              horaLabel={formState.hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              onPressData={() => formHandlers.setShowDatePicker(true)}
              onPressHora={() => formHandlers.setShowTimePicker(true)}
            />

            <View style={styles.modalPickerRow}> 
              <FormTextInput
                placeholder="Vagas Jogadores"
                value={formState.vagasJogadores}
                onChangeText={formHandlers.setVagasJogadores}
                style={styles.modalInputHalf} 
                keyboardType="numeric"
                maxLength={2}
              />
              <FormTextInput
                placeholder="Vagas Goleiros"
                value={formState.vagasGoleiros}
                onChangeText={formHandlers.setVagasGoleiros}
                style={styles.modalInputHalf}
                keyboardType="numeric"
                maxLength={1}
              />
            </View>

            <FormPicker
              selectedValue={formState.piso}
              onValueChange={formHandlers.setPiso}
            >
              <Picker.Item label="Piso: Sintético" value="sintetico" />
              <Picker.Item label="Piso: Quadra (Salão)" value="quadra" />
              <Picker.Item label="Piso: Grama (Campo)" value="grama" />
            </FormPicker>
            
            <FormPicker
              selectedValue={formState.nivel}
              onValueChange={formHandlers.setNivel}
            >
              <Picker.Item label="Nível: Amador" value="amador" />
              <Picker.Item label="Nível: Intermediário" value="intermediario" />
              <Picker.Item label="Nível: Avançado" value="avancado" />
            </FormPicker>

            <FormTextInput
              placeholder="Valor por pessoa (ex: 20,00)"
              value={formState.valor}
              onChangeText={formHandlers.setValor}
              keyboardType="numeric"
            />
            <FormTextInput
              placeholder="Observações (opcional)"
              value={formState.observacoes}
              onChangeText={formHandlers.setObservacoes}
              style={{ height: 80, paddingTop: 10 }} 
              multiline
            />

            {/* Botões de Ação */}
            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonClose]}
                onPress={onClose} 
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCreate]}
                onPress={formHandlers.handleCriarPartida} // Usa o handler do hook
              >
                <Text style={styles.modalButtonText}>Criar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      
      {/* Modais de Data e Hora */}
      {formState.showDatePicker && (
        <DateTimePicker
          value={formState.data}
          mode="date"
          display="default"
          onChange={formHandlers.onChangeDate}
        />
      )}
      {formState.showTimePicker && (
        <DateTimePicker
          value={formState.hora}
          mode="time"
          display="default"
          onChange={formHandlers.onChangeTime}
        />
      )}
    </Modal>
  );
}
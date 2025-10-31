import { useState } from 'react';
import { Platform, Alert } from 'react-native';

export const useCriarPartidaForm = (onClose: () => void) => {
  
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

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setData(selectedDate);
  };

  const onChangeTime = (event: any, selectedTime?: Date) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedTime) setHora(selectedTime);
  };

  const handleCriarPartida = () => {
    console.log({ 
      nome, 
      local, 
      piso, 
      vagasJogadores, 
      vagasGoleiros, 
      nivel, 
      valor, 
      observacoes 
    });
    Alert.alert('Sucesso', 'Partida criada (simulação)!');
    onClose();
  };
  return {
    formState: {
      nome, local, piso, vagasJogadores, vagasGoleiros, nivel,
      valor, observacoes, data, hora, showDatePicker, showTimePicker
    },
    formHandlers: {
      setNome, setLocal, setPiso, setVagasJogadores, setVagasGoleiros,
      setNivel, setValor, setObservacoes,
      onChangeDate, onChangeTime,
      setShowDatePicker, setShowTimePicker,
      handleCriarPartida
    }
  };
};
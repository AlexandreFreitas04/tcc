import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { listarMinhasPartidas, excluirPartida } from '../controllers/partidaController';
import styles from '../estilo';

export default function MinhasPartidas({ navigation }) {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarPartidas();
  }, []);

  const carregarPartidas = async () => {
    setLoading(true);
    const resultado = await listarMinhasPartidas();
    if (resultado.sucesso) {
      setPartidas(resultado.partidas);
    } else {
      Alert.alert('Erro', resultado.mensagem);
    }
    setLoading(false);
  };

  const handleExcluirPartida = async (id) => {
    Alert.alert(
      'Excluir Partida',
      'Tem certeza que deseja excluir esta partida?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const resultado = await excluirPartida(id);
            if (resultado.sucesso) {
              Alert.alert('Sucesso', 'Partida excluída.');
              carregarPartidas();
            } else {
              Alert.alert('Erro', resultado.mensagem);
            }
          },
        },
      ]
    );
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
      <Text style={styles.minhasPartidasTitulo}>Minhas Partidas</Text>

      {partidas.length === 0 ? (
        <View style={styles.semPartidasContainer}>
          <Text style={styles.semPartidasTexto}>Você ainda não criou nenhuma partida.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.listaPartidasContainer}>
          {partidas.map((p) => (
            <View key={p.id} style={styles.cardPartida}>
              <Text style={styles.cardPartidaTitulo}>{p.nome}</Text>
              <Text style={styles.cardPartidaInfo}>{p.local}</Text>
              <Text style={styles.cardPartidaInfo}>
                {`${p.data} - ${p.hora}`}
              </Text>
              <Text style={styles.cardPartidaInfo}>
                {`${p.piso} • Nível: ${p.nivel} • Valor: ${p.valor}`}
              </Text>

              <View style={styles.botoesCardContainer}>
                <TouchableOpacity
                  style={styles.botaoEditarPartida}
                  onPress={() => navigation.navigate('EditarPartida', { partidaId: p.id })}
                >
                  <Text style={styles.textoBotaoPartida}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.botaoExcluirPartida}
                  onPress={() => handleExcluirPartida(p.id)}
                >
                  <Text style={styles.textoBotaoPartida}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      <TouchableOpacity
        style={styles.botaoVoltarPartidas}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textoBotaoVoltarPartidas}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { listarMinhasPartidas, excluirPartida } from '../controllers/partidaController';
import styles from '../estilo';

export default function MinhasPartidas({ navigation }) {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);

  async function carregarPartidas() {
    const resultado = await listarMinhasPartidas();
    if (resultado.sucesso) {
      setPartidas(resultado.partidas);
    } else {
      console.log(resultado.mensagem);
    }
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      carregarPartidas();
    });

    return unsubscribe;
  }, [navigation]);

  const handleEditar = (id: string) => {
    navigation.navigate('EditarPartida', { partidaId: id });
  };

  const handleExcluir = (id: string) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir esta partida?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const resultado = await excluirPartida(id);
            if (resultado.sucesso) {
              Alert.alert('Sucesso', resultado.mensagem);
              setPartidas(partidasAtuais =>
                partidasAtuais.filter(partida => partida.id !== id)
              );
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
              <Text style={styles.cardPartidaInfo}>{`${p.data} - ${p.hora}`}</Text>
              <Text style={styles.cardPartidaInfo}>
                {`${p.piso} • Nível: ${p.nivel} • Valor: ${p.valor}`}
              </Text>

              <View style={styles.cardPartidaBotoesContainer}>
                <TouchableOpacity
                  style={[styles.cardPartidaBotao, styles.cardPartidaBotaoEditar]}
                  onPress={() => handleEditar(p.id)}
                >
                  <Text style={styles.cardPartidaBotaoTexto}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.cardPartidaBotao, styles.cardPartidaBotaoExcluir]}
                  onPress={() => handleExcluir(p.id)}
                >
                  <Text style={styles.cardPartidaBotaoTexto}>Excluir</Text>
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
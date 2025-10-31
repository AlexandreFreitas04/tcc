import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { buscarTodasPartidas } from '../controllers/partidaController';
import styles from '../estilo';

export default function BuscarPartidas({ navigation }) {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [termoBusca, setTermoBusca] = useState('');
  const [partidasFiltradas, setPartidasFiltradas] = useState([]);

  async function carregarPartidas() {
    setLoading(true);
    const resultado = await buscarTodasPartidas();
    if (resultado.sucesso) {
      setPartidas(resultado.partidas);
      setPartidasFiltradas(resultado.partidas);
    } else {
      console.log(resultado.mensagem);
    }
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarPartidas();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (termoBusca === '') {
      setPartidasFiltradas(partidas);
    } else {
      const novasPartidasFiltradas = partidas.filter(partida =>
        partida.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        partida.local.toLowerCase().includes(termoBusca.toLowerCase())
      );
      setPartidasFiltradas(novasPartidasFiltradas);
    }
  }, [termoBusca, partidas]);

  if (loading) {
    return (
      <View style={styles.fundoApp}>
        <ActivityIndicator size="large" color="#FFF9F0" />
      </View>
    );
  }

  return (
    <View style={styles.fundoAppScroll}>
      <Text style={styles.buscaTitulo}>Buscar Partidas</Text>

      <TextInput
        style={styles.buscaInput}
        placeholder="Digite o nome da partida ou local..."
        placeholderTextColor="#666"
        value={termoBusca}
        onChangeText={setTermoBusca}
      />

      {partidasFiltradas.length === 0 ? (
        <View style={styles.semPartidasContainer}>
          <Text style={styles.semPartidasTexto}>Nenhuma partida encontrada.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.listaPartidasContainer}>
          {partidasFiltradas.map((p) => (
            <View key={p.id} style={styles.cardPartida}>
              <Text style={styles.cardPartidaTitulo}>{p.nome}</Text>
              <Text style={styles.cardPartidaInfo}>{p.local}</Text>
              <Text style={styles.cardPartidaInfo}>{`${p.data} - ${p.hora}`}</Text>
              <Text style={styles.cardPartidaInfo}>
                {`${p.piso} • Nível: ${p.nivel} • Valor: ${p.valor}`}
              </Text>
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
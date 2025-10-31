import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { listarMinhasPartidas } from '../controllers/partidaController';
import styles from '../estilo';

export default function MinhasPartidas({ navigation }) {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarPartidas() {
      const resultado = await listarMinhasPartidas();
      if (resultado.sucesso) {
        setPartidas(resultado.partidas);
      } else {
        console.log(resultado.mensagem);
      }
      setLoading(false);
    }
    carregarPartidas();
  }, []);

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

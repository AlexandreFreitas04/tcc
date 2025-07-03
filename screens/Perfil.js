import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../estilos/perfilStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const perfilMock = {
  nome: 'Alexandre',
  fotoUrl: '#', 

  estatisticas: {
    partidas: 13,
    esporteFavorito: 'Futebol',
    esporteMaisJogado: 'Futebol',
  },
  badges: [
    { nome: 'Capitão', icone: 'shield-star', cor: '#FBBF24' },
    { nome: 'Motorzinho', icone: 'engine', cor: '#10B981' },
    { nome: 'Mão de Alface', icone: 'hand-okay', cor: '#6B7280' },
    { nome: 'Matador', icone: 'soccer', cor: '#EF4444' },
    { nome: 'Muralha', icone: 'security', cor: '#3B82F6' },
    { nome: 'Camisa 10', icone: 'tshirt-crew', cor: '#A855F7' },
  ],
};

const ItemEstatistica = ({ label, valor }) => (
    <View style={styles.itemEstatistica}>
        <Text style={styles.labelEstatistica}>{label}</Text>
        <Text style={styles.valorEstatistica}>{valor}</Text>
    </View>
);


export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cabecalho}>
        <Image source={{ url: perfilMock.fotoUrl }} style={styles.fotoPerfil} />
        <Text style={styles.nomePerfil}>{perfilMock.nome}</Text>
        <TouchableOpacity style={styles.botaoEditar}>
          <Text style={styles.textoBotaoEditar}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Estatísticas</Text>
        <View style={styles.containerEstatisticas}>
          <ItemEstatistica label="Partidas Jogadas" valor={perfilMock.estatisticas.partidas} />
          <ItemEstatistica label="Esporte Favorito" valor={perfilMock.estatisticas.esporteFavorito} />
          <ItemEstatistica label="Esporte Mais Jogado" valor={perfilMock.estatisticas.esporteMaisJogado} />
        </View>
      </View>

      {/* Seção de Badges */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Badges</Text>
        <View style={styles.containerBadges}>
          {perfilMock.badges.map((badge) => (
            <View key={badge.nome} style={styles.itemBadge}>
              <View style={[styles.badgeIconeContainer, { backgroundColor: `${badge.cor}20` }]}>
                <Icon name={badge.icone} size={30} color={badge.cor} />
              </View>
              <Text style={styles.nomeBadge}>{badge.nome}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
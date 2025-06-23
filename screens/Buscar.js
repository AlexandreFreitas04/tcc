import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../estilos/buscarStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const partidasMock = [
  { id: '1', esporte: 'Futebol', local: 'Ginásio Cerveira', horario: 'Hoje, 19:00', vagas: 2, data: new Date('2025-06-23T19:00:00') },
  { id: '2', esporte: 'Vôlei', local: 'Arena Velho Mão', horario: 'Amanhã, 17:30', vagas: 4, data: new Date('2025-06-24T17:30:00') },
  { id: '3', esporte: 'Basquete', local: 'Quadra Municipal', horario: '28/06, 20:00', vagas: 0, data: new Date('2025-06-28T20:00:00') },
  { id: '4', esporte: 'Futebol', local: 'Quadra Laranjeiras', horario: '29/06, 21:00', vagas: 5, data: new Date('2025-06-29T21:00:00') },
];
const jogadoresMock = [
  { id: 'j1', nome: 'Leonel Ronaldo', esporteFavorito: 'Futebol' },
  { id: 'j2', nome: 'Fernanda Medeiros', esporteFavorito: 'Vôlei' },
  { id: 'j3', nome: 'LeBron James Santos', esporteFavorito: 'Basquete' },
  { id: 'j4', nome: 'Formiga', esporteFavorito: 'Futebol' },
];


const MenuFiltroEsporte = ({ filtroSelecionado, onFiltroChange }) => {
  const [visivel, setVisivel] = useState(false);
  const esportes = ['Todos', 'Futebol', 'Basquete', 'Vôlei'];
  return (
    <View style={styles.containerMenuFiltro}>
      <TouchableOpacity style={styles.botaoGatilho} onPress={() => setVisivel(!visivel)}>
        <Text style={styles.textoGatilho}>{filtroSelecionado}</Text>
        <Icon name={visivel ? 'chevron-up' : 'chevron-down'} size={24} color="#374151" />
      </TouchableOpacity>
      {visivel && (
        <View style={styles.opcoesContainer}>
          {esportes.map((esporte) => (
            <TouchableOpacity key={esporte} style={styles.opcaoBotao} onPress={() => { onFiltroChange(esporte); setVisivel(false); }}>
              <Text style={styles.opcaoTexto}>{esporte}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const MenuOrganizarPor = ({ ordemSelecionada, onOrdemChange }) => {
  const [visivel, setVisivel] = useState(false);
  const opcoes = ['Data (mais recente)', 'Vagas restantes'];
  return (
    <View style={styles.containerMenuFiltro}>
      <TouchableOpacity style={styles.botaoGatilho} onPress={() => setVisivel(!visivel)}>
        <Text style={styles.textoGatilho}>{ordemSelecionada}</Text>
        <Icon name={visivel ? 'chevron-up' : 'chevron-down'} size={24} color="#374151" />
      </TouchableOpacity>
      {visivel && (
        <View style={styles.opcoesContainer}>
          {opcoes.map((opcao) => (
            <TouchableOpacity key={opcao} style={styles.opcaoBotao} onPress={() => { onOrdemChange(opcao); setVisivel(false); }}>
              <Text style={styles.opcaoTexto}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const CardPartida = ({ item }) => (
  <View style={styles.cardPartida}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitulo}>{item.esporte}</Text>
      <Text style={item.vagas > 0 ? styles.cardVagas : styles.cardVagasLotado}>
        {item.vagas > 0 ? `${item.vagas} vagas` : 'Lotado!'}
      </Text>
    </View>
    <View style={styles.cardCorpo}>
      <Text style={styles.cardInfo}>📍 {item.local}</Text>
      <Text style={styles.cardInfo}>🗓️ {item.horario}</Text>
    </View>
    <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.botaoVerDetalhes}>
            <Text style={styles.textoBotaoVerDetalhes}>Ver detalhes</Text>
        </TouchableOpacity>
    </View>
  </View>
);

const CardJogador = ({ item }) => {
  const iniciais = (item.nome && typeof item.nome === 'string')
    ? item.nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : '??';

  return (
    <View style={styles.cardJogador}>
      <View style={styles.avatar}>
        <Text style={styles.textoAvatar}>{iniciais}</Text>
      </View>
      <View style={styles.infoJogador}>
        <Text style={styles.nomeJogador}>{item.nome || 'Jogador Desconhecido'}</Text>
        <Text style={styles.esporteJogador}>Esporte: {item.esporteFavorito}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="chevron-right" size={28} color="#9CA3AF" />
      </TouchableOpacity>
    </View>
  );
};


export default function BuscaScreen() {
  const [abaAtiva, setAbaAtiva] = useState('partidas');
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroEsporte, setFiltroEsporte] = useState('Todos');
  const [ordem, setOrdem] = useState('Data (mais recente)');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    let dadosFiltrados;

    if (abaAtiva === 'partidas') {
      dadosFiltrados = [...partidasMock];
      if (filtroEsporte !== 'Todos') {
        dadosFiltrados = dadosFiltrados.filter(p => p.esporte === filtroEsporte);
      }
      if (termoBusca.length > 0) {
        dadosFiltrados = dadosFiltrados.filter(p => p.local.toLowerCase().includes(termoBusca.toLowerCase()));
      }
      switch (ordem) {
        case 'Vagas restantes':
          dadosFiltrados.sort((a, b) => b.vagas - a.vagas);
          break;
        case 'Data (mais recente)':
        default:
          dadosFiltrados.sort((a, b) => a.data - b.data);
          break;
      }
    } else { 
      dadosFiltrados = [...jogadoresMock];
      if (termoBusca.length > 0) {
        dadosFiltrados = dadosFiltrados.filter(j => j.nome.toLowerCase().includes(termoBusca.toLowerCase()));
      }
      dadosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    
    setResultados(dadosFiltrados);
  }, [termoBusca, filtroEsporte, ordem, abaAtiva]);

  
  const renderizarItem = ({ item }) => {
    return abaAtiva === 'partidas' ? <CardPartida item={item} /> : <CardJogador item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSuperior}>
        <View style={styles.caixaDeBusca}>
          <Icon name="magnify" size={24} color="#6b7280" />
          <TextInput 
            style={styles.campoDeBusca} 
            placeholder="Procurar..." 
            placeholderTextColor="#6b7280"
            value={termoBusca}
            onChangeText={setTermoBusca}
          />
        </View>

        <View style={styles.containerAbas}>
          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === 'partidas' && styles.botaoAbaAtivo]}
            onPress={() => setAbaAtiva('partidas')}
          >
            <Text style={[styles.textoAba, abaAtiva === 'partidas' && styles.textoAbaAtivo]}>Partidas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === 'jogadores' && styles.botaoAbaAtivo]}
            onPress={() => setAbaAtiva('jogadores')}
          >
            <Text style={[styles.textoAba, abaAtiva === 'jogadores' && styles.textoAbaAtivo]}>Jogadores</Text>
          </TouchableOpacity>
        </View>
        
        {abaAtiva === 'partidas' && (
          <View style={styles.containerDeFiltros}>
            <MenuFiltroEsporte filtroSelecionado={filtroEsporte} onFiltroChange={setFiltroEsporte} />
            <MenuOrganizarPor ordemSelecionada={ordem} onOrdemChange={setOrdem} />
          </View>
        )}
      </View>
      
      <FlatList
        data={resultados}
        renderItem={renderizarItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.areaDaLista}
        ListEmptyComponent={<Text style={styles.textoAviso}>Nenhum resultado encontrado.</Text>}
      />
    </View>
  );
}
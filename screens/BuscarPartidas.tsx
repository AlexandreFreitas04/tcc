import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo';
import { listarPartidasDisponiveis } from '../controllers/partidaController';
import { Partida } from '../types/partida';

export default function BuscarPartidas() {

    const [partidas, setPartidas] = useState<Partida[]>([]);
    const [carregando, setCarregando] = useState(true);
    const navigation = useNavigation<any>();

    const carregarPartidas = async () => {
        setCarregando(true);
        try{
            const resultado = await listarPartidasDisponiveis();
            if (resultado.sucesso){
                setPartidas(resultado.partidas as any[]);
            } else {
                Alert.alert('Erro', resultado.mensagem);
            }
        } catch (erro) {
            console.error(erro);
            Alert.alert('Erro', 'Não foi possível carregar as partidas disponíveis.')
        } finally{
            setCarregando(false);
        }
    };

    useEffect(() => {
        carregarPartidas();
    }, []);

    const formatarDataHora = (timestamp: any) => {
        if (!timestamp || !timestamp.toDate) return 'Data não informada';

        const data = timestamp.toDate();
        return `${data.toLocaleDateString('pt-BR')} às ${data.toLocaleTimeString('pt-BR', {
           hour: '2-digit',
           minute: '2-digit',    
        })}`;
    };
    return (
        <View style ={[styles.fundoApp, { paddingBottom: 20}]}>
            <Text style = {styles.minhasPartidasTitulo}>Partidas Disponíveis</Text>

            {carregando ? (
                <ActivityIndicator size = "large" color = "#FFF9F0" style = {{ marginTop: 40}}/>
            ):(
                <FlatList
                    data={partidas}
                    keyExtractor={(item) => item.id!}
                    style={{width: '100%'}}
                    contentContainerStyle = {styles.listaPartidasContainer}
                    ListEmptyComponent = {
                        <View style={styles.semPartidasContainer}>
                            <Text style = {styles.semPartidasTexto}> Nenhuma partida disponível no momento. </Text>   
                        </View>
                    }
                    renderItem={({ item }) => (
                        <View style={styles.cardPartida}>
                            <Text style={styles.cardPartidaTitulo}>
                                {item.nome} - {item.modalidade}
                            </Text>
                            <Text style={styles.cardPartidaInfo}>
                                Local: {item.local}
                            </Text>
                            <Text style={styles.cardPartidaInfo}>
                                Data: {formatarDataHora(item.dataHora)}
                            </Text>
                            <Text style={styles.cardPartidaInfo}>
                                Nível: {item.nivel} | Piso: {item.piso}
                            </Text>
                            <Text style={styles.cardPartidaInfo}>
                                Vagas: {item.vagasOcupadas || 1}/{item.vagasJogadores}
                            </Text>
                            <Text style={styles.cardPartidaInfo}>
                                Valor: R$ {Number(item.valor || 0).toFixed(2)}
                            </Text>
                            <Text style={styles.cardPartidaInfo}>
                                Organizador: {item.nomeCriador}
                            </Text>
                        </View>
                    )}
                />
            )}

            <TouchableOpacity
                style={styles.botaoVoltarPartidas}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textoBotaoVoltarPartidas}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Texto from '../meuTexto';
import styles from '../estilos/homeStyle';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Texto style={styles.headerTexto}>Bem vindo Jogador!</Texto>
      </View>

{/*PROXIMO JOGO*/}
      <View style={styles.proxJogoSec}>
        <Texto style={styles.titulosSecao}> Próxima Partida </Texto>
        <Texto style={styles.nomeRachao}>Futebol de Domingo</Texto>

        <View style={styles.linha}>
          <Texto style={styles.textoFaltam}>FALTAM:</Texto>

          <View style={styles.blococronometro}>
            <Texto style={styles.numeroTempo}>72</Texto>
            <Texto style={styles.unidadeTempo}>HORAS</Texto>
          </View>

          <View style={styles.blococronometro}>
            <Texto style={styles.numeroTempo}>00</Texto>
            <Texto style={styles.unidadeTempo}>MINUTOS</Texto>
          </View>

          <View style={styles.blococronometro}>
            <Texto style={styles.numeroTempo}>00</Texto>
            <Texto style={styles.unidadeTempo}>SEGUNDOS</Texto>
          </View>

          <TouchableOpacity>
            <Texto style={styles.verDetalheProxJogo}>Ver{'\n'}Detalhes</Texto>
          </TouchableOpacity>
        </View>
      </View>
{/*MEUS RACHOES*/}
      <View style={styles.proxJogoSec}>
        <Texto style={styles.titulosSecao}> Meus Rachões </Texto>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollRachoesContainer}>
          <TouchableOpacity style={styles.bloco}>
            <View style={styles.blococriar}>
              <AntDesign name="pluscircle" size={24} color="#ffc107" />
              <Texto style={styles.textoCriarRachao}>Criar {'\n'} Rachão</Texto>
            </View>
          </TouchableOpacity>

          {['Domingo', 'Quarta', 'Segunda'].map((dia, idx) => (
            <TouchableOpacity key={idx} style={styles.bloco}>
              <Texto style={styles.textoMeusRachoes}>Futebol {'\n'} de {dia}</Texto>
              <Texto style={styles.verDetalhe}>Ver detalhes</Texto>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.bloco}>
            <Texto style={styles.textoVerTodos}>Ver {'\n'} Todos</Texto>
          </TouchableOpacity>
        </ScrollView>
      </View>
{/*RES ULTIMO JOGO*/}
      <View style={styles.proxJogoSec}>
        <Texto style={styles.titulosSecao}> Meu Ultimo Jogo </Texto>
        <View style={styles.linhaUltimoJogo}>
          <TouchableOpacity>
            <AntDesign name="left" size={36} color="white" />
          </TouchableOpacity>
          <Texto style={styles.textoPlacarVit}>Time A{'\n'}10</Texto>
          <Texto style={styles.textoSeparador}> - </Texto>
          <Texto style={styles.textoPlacarDer}>Time B{'\n'}7</Texto>
          <TouchableOpacity>
            <AntDesign name="right" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


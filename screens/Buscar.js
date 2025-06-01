import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../estilos/buscarStyle';
import { Ionicons } from '@expo/vector-icons';

export default function Buscar () {
  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Ionicons name="search" size={20} color='gray' style={styles.iconeBusca}/>
        <TextInput 
        style={styles.inputBuscar}
        placeholder='Buscar'
        placeholderTextColor='gray'
        />
      </View>
    </View>
  )
}


  
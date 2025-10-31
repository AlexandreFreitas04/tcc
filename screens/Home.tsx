// screens/Home.tsx
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../estilo';   

export default function Home() {
  return (
    <View style={styles.fundoApp}>
      
      <View style={styles.homeHeader}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.homeLogo}
          resizeMode="contain"
        />
        <View style={styles.homeTitleContainer}>
          <Text style={styles.homeTitleDeu}>Deu</Text>
          <Text style={styles.homeTitleJogo}>Jogo!</Text>
        </View>
      </View>

      <View style={styles.homeButtonContainer}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Criar Partidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Minhas Partidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Buscar Partidas</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
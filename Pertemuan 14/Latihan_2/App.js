import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* ScrollView ditambahkan agar konten bisa di-scroll */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Bagian Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
          <Text style={styles.headerSubtitle}>
            Aplikasi Monitoring Gudang
          </Text>
        </View>

        {/* Bagian Konten Utama */}
        <View style={styles.content}>

          <Image
            source={require('./logo.png')}
            style={styles.logo}
          />

          <Text style={styles.welcomeText}>
            Selamat Datang, Operator!
          </Text>

          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              Alert.alert(
                'Info',
                'Membuka Detail Stok Gudang A...'
              )
            }
          >
            <Text style={styles.cardTitle}>
              Status Gudang A
            </Text>

            <Text style={styles.cardValue}>
              Kapasitas: 85%
            </Text>

            <Text style={styles.cardStatus}>
              TEKAN UNTUK DETAIL
            </Text>
          </TouchableOpacity>

          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>
              Status Gudang B
            </Text>

            <Text style={styles.cardValue}>
              Kapasitas: 95%
            </Text>

            <Text style={styles.cardStatus}>
              PENUH
            </Text>
          </View>

          {/* Tambahan card agar konten lebih panjang */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Status Gudang C
            </Text>

            <Text style={styles.cardValue}>
              Kapasitas: 70%
            </Text>

            <Text style={styles.cardStatus}>
              TERSEDIA
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Status Gudang D
            </Text>

            <Text style={styles.cardValue}>
              Kapasitas: 60%
            </Text>

            <Text style={styles.cardStatus}>
              AMAN
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Status Gudang E
            </Text>

            <Text style={styles.cardValue}>
              Kapasitas: 40%
            </Text>

            <Text style={styles.cardStatus}>
              TERSEDIA
            </Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    elevation: 5,
  },

  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
  },

  content: {
    padding: 20,
  },

  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },

  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },

  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
    textAlign: 'right',
  },
});
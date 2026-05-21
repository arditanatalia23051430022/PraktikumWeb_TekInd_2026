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
  ScrollView,
  Modal,
} from 'react-native';

import { useState } from 'react';

export default function App() {

  // STATE MODAL
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedMachine, setSelectedMachine] = useState({
    nama: '',
    tahun: '',
    lokasi: '',
    status: '',
    gambar: null,
  });

  // FUNCTION DETAIL MESIN
  const showMachineDetail = (
    nama,
    tahun,
    lokasi,
    status,
    gambar
  ) => {
    setSelectedMachine({
      nama,
      tahun,
      lokasi,
      status,
      gambar,
    });

    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>

          <Text style={styles.headerTitle}>
            PT. Manufaktur Maju
          </Text>

          <Text style={styles.headerSubtitle}>
            Aplikasi Monitoring Gudang
          </Text>

          {/* IDENTITAS */}
          <View style={styles.identityBox}>
            <Text style={styles.identityText}>
              Ardita Natalia
            </Text>

            <Text style={styles.identityText}>
              23051430022
            </Text>
          </View>

        </View>

        {/* CONTENT */}
        <View style={styles.content}>

          {/* LOGO */}
          <Image
            source={require('./logo.png')}
            style={styles.logo}
          />

          <Text style={styles.welcomeText}>
            Selamat Datang, Operator!
          </Text>

          {/* GUDANG A */}
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

          {/* GUDANG B */}
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

          {/* GUDANG C */}
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

          {/* PROFIL MESIN */}
          <Text style={styles.machineHeader}>
            Profil Mesin Produksi
          </Text>

          {/* MESIN 1 */}
          <View style={styles.machineCard}>

            <Image
              source={require('./mesin1.jpg')}
              style={styles.machineImage}
            />

            <View style={styles.machineInfo}>

              <Text style={styles.machineTitle}>
                CNC Milling Machine
              </Text>

              <Text style={styles.machineText}>
                Tahun: 2020
              </Text>

              <Text style={styles.machineText}>
                Lokasi: Area Produksi A
              </Text>

              <Text style={styles.machineStatus}>
                Status: AKTIF
              </Text>

              <TouchableOpacity
                onPress={() =>
                  showMachineDetail(
                    'CNC Milling Machine',
                    '2020',
                    'Area Produksi A',
                    'AKTIF',
                    require('./mesin1.jpg')
                  )
                }
              >
                <Text style={styles.detailButton}>
                  TEKAN UNTUK DETAIL
                </Text>
              </TouchableOpacity>

            </View>
          </View>

          {/* MESIN 2 */}
          <View style={styles.machineCard}>

            <Image
              source={require('./mesin2.jpg')}
              style={styles.machineImage}
            />

            <View style={styles.machineInfo}>

              <Text style={styles.machineTitle}>
                Forklift Gudang
              </Text>

              <Text style={styles.machineText}>
                Tahun: 2022
              </Text>

              <Text style={styles.machineText}>
                Lokasi: Gudang Utama
              </Text>

              <Text style={styles.machineStatus}>
                Status: SIAP
              </Text>

              <TouchableOpacity
                onPress={() =>
                  showMachineDetail(
                    'Forklift Gudang',
                    '2022',
                    'Gudang Utama',
                    'SIAP DIGUNAKAN',
                    require('./mesin2.jpg')
                  )
                }
              >
                <Text style={styles.detailButton}>
                  TEKAN UNTUK DETAIL
                </Text>
              </TouchableOpacity>

            </View>
          </View>

          {/* MESIN 3 */}
          <View style={styles.machineCard}>

            <Image
              source={require('./mesin3.jpg')}
              style={styles.machineImage}
            />

            <View style={styles.machineInfo}>

              <Text style={styles.machineTitle}>
                DB-FMA Series
              </Text>

              <Text style={styles.machineText}>
                Tahun: 2023
              </Text>

              <Text style={styles.machineText}>
                Lokasi: Area Cutting
              </Text>

              <Text style={styles.machineStatus}>
                Status: BEROPERASI
              </Text>

              <TouchableOpacity
                onPress={() =>
                  showMachineDetail(
                    'DB-FMA Series',
                    '2023',
                    'Area Cutting',
                    'BEROPERASI',
                    require('./mesin3.jpg')
                  )
                }
              >
                <Text style={styles.detailButton}>
                  TEKAN UNTUK DETAIL
                </Text>
              </TouchableOpacity>

            </View>
          </View>

        </View>

      </ScrollView>

      {/* MODAL DETAIL */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >

        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>
              Detail Mesin
            </Text>

            {/* FOTO MESIN */}
            <Image
              source={selectedMachine.gambar}
              style={styles.modalImage}
            />

            <Text style={styles.modalText}>
              Nama Mesin: {selectedMachine.nama}
            </Text>

            <Text style={styles.modalText}>
              Tahun: {selectedMachine.tahun}
            </Text>

            <Text style={styles.modalText}>
              Lokasi: {selectedMachine.lokasi}
            </Text>

            <Text style={styles.modalText}>
              Status: {selectedMachine.status}
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>
                TUTUP
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
    marginBottom: 20,
  },

  identityBox: {
    backgroundColor: '#34495e',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  identityText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
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
    borderRadius: 20,
    marginBottom: 15,
    elevation: 5,
  },

  cardWarning: {
    borderLeftWidth: 6,
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

  machineHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    color: '#2c3e50',
  },

  machineCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
  },

  machineImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginRight: 15,
    resizeMode: 'contain',
  },

  machineInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  machineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },

  machineText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },

  machineStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
  },

  detailButton: {
    marginTop: 10,
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: 13,
  },

  /* MODAL */
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  modalImage: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 15,
  },

  modalText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

});
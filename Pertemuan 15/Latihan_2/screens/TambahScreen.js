import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

function TambahScreen({ navigation }) {

  // STATE FORM
  const [namaBarang, setNamaBarang] = useState('');
  const [stokBarang, setStokBarang] = useState('');
  const [lokasiBarang, setLokasiBarang] = useState('');

  return (

    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >

      <View style={styles.container}>

        <Text style={styles.header}>
          Form Tambah Barang
        </Text>

        <TextInput
          placeholder="Nama Barang"
          style={styles.input}
          value={namaBarang}
          onChangeText={setNamaBarang}
        />

        <TextInput
          placeholder="Jumlah Stok"
          style={styles.input}
          keyboardType="numeric"
          value={stokBarang}
          onChangeText={setStokBarang}
        />

        <TextInput
          placeholder="Lokasi Penyimpanan"
          style={styles.input}
          value={lokasiBarang}
          onChangeText={setLokasiBarang}
        />

        <Button
          title="Simpan Barang"
          onPress={() =>
            alert('Data barang berhasil disimpan!')
          }
        />

        <View style={styles.resultBox}>

          <Text style={styles.resultTitle}>
            Hasil Input:
          </Text>

          <Text>
            Nama Barang: {namaBarang}
          </Text>

          <Text>
            Jumlah Stok: {stokBarang}
          </Text>

          <Text>
            Lokasi: {lokasiBarang}
          </Text>

        </View>

        <View style={{ marginTop: 10 }}>

          <Button
            title="Kembali"
            onPress={() => navigation.goBack()}
          />

        </View>

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
  },

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  resultBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

});

export default TambahScreen;
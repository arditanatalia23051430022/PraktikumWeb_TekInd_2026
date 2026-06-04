import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function DetailScreen({ route, navigation }) {
    const { item } = route.params;

    const [stok, setStok] = useState(item.stok);

    const tambah = () => setStok(prev => prev + 1);

    const kurang = () => setStok(prev => (prev > 0 ? prev - 1 : 0));

    const isKritis = stok < 5;

    return (
        <ScrollView
        style={style.container}
        contentContainerStyle={style.content}
        >

            {isKritis && (
                <View style={style.alertBox}>
                    <Text style={style.alertText}>
                        STOK KRITIS! SEGERA LAKUKAN PERMINTAAN PENGADAAN!!!
                    </Text>
                </View>
            )}

            <View style={style.card}>
                <Text style={style.label}>Nama Barang</Text>
                <Text style={style.value}>{item.namaBarang}</Text>

                <Text style={style.label}>Kategori</Text>
                <Text style={style.value}>{item.kategori}</Text>

                <Text style={style.label}>Stok Saat Ini</Text>
                <Text style={[
                    style.stokValue,
                    isKritis && style.stokKritis
                ]}>
                    {stok} unit
                </Text>

                <Text style={style.label}>Lokasi Rak</Text>
                <Text style={style.value}>{item.lokasiRak}</Text>
            </View>

            <View style={style.kontrolBox}>
                <Text style={style.kontrolLabel}>Update Stok:</Text>

                <View style={style.btnRow}>

                    <TouchableOpacity
                    style={style.btnKurang}
                    onPress={kurang}
                    >
                        <Text style={style.btnText}>-</Text>
                    </TouchableOpacity>

                    <Text style={[
                        style.stokAngka,
                        isKritis && style.stokAngkaKritis
                    ]}>
                        {stok}
                    </Text>

                    <TouchableOpacity
                    style={style.btnTambah}
                    onPress={tambah}
                    >
                        <Text style={style.btnText}>+</Text>
                    </TouchableOpacity>

                </View>

                {stok === 0 && (
                    <Text style={style.warningText}>
                        Stok 0, Tidak Bisa Dikurangi Lagi!
                    </Text>
                )}

            </View>

            <TouchableOpacity
            style={style.btnKembali}
            onPress={() => navigation.goBack()}
            >
                <Text style={style.btnKembaliText}>
                    Kembali ke Daftar
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f6fa' },

    content: { padding: 16, paddingBottom: 40 },

    alertBox: { backgroundColor: '#c62828',
        borderRadius: 8, padding: 12, marginBottom: 14 },

    alertText: { color: '#fff',
        fontWeight: 'bold', fontSize: 14 },

    card: { backgroundColor: '#fff',
        borderRadius: 12, padding: 18,
        elevation: 3, marginBottom: 16 },

    label: { fontSize: 12,
        color: '#90a4ae', marginTop: 10 },

    value: { fontSize: 17,
        fontWeight: '600', color: '#1a237e' },

    stokValue: { fontSize: 17,
        fontWeight: '600', color: '#2e7d32' },

    stokKritis: { color: '#c62828' },

    kontrolBox: { backgroundColor: '#fff',
        borderRadius: 12, padding: 18,
        elevation: 2, marginBottom: 16 },

    kontrolLabel: { fontSize: 14,
        fontWeight: 'bold', color: '#37474f',
        marginBottom: 12 },

    btnRow: { flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' },

    btnKurang: { backgroundColor: '#ef9a9a',
        width: 52, height: 52,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center' },

    btnTambah: { backgroundColor: '#a5d6a7',
        width: 52, height: 52,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center' },

    btnText: { fontSize: 26,
        fontWeight: 'bold', color: '#212121' },

    stokAngka: { fontSize: 32,
        fontWeight: 'bold', color: '#1a237e',
        marginHorizontal: 24 },

    stokAngkaKritis: { color: '#c62828' },

    warningText: { textAlign: 'center',
        color: '#c62828', fontSize: 12,
        marginTop: 8 },

    btnKembali: { backgroundColor: '#1565c0',
        borderRadius: 10, padding: 15,
        alignItems: 'center' },

    btnKembaliText: { color: '#fff',
        fontSize: 16, fontWeight: 'bold' },
});
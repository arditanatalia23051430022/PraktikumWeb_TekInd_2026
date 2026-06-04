import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Platform, } from 'react-native' ;
import { DATA_GUDANG } from "../data/gudang";

export default function HomeScreen({ navigation }) {
    const [query, setQuery] = useState('');
    const [isSorted, setIsSorted] = useState(false);

    let filtered = DATA_GUDANG.filter(item =>
        item.namaBarang.toLowerCase().includes(query.toLowerCase())
    );

    if (isSorted) {
        filtered = [...filtered].sort((a, b) =>
            a.namaBarang.localeCompare(b.namaBarang)
        );
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
        style={style.card}
        onPress={() => navigation.navigate('Detail', { item })}
        >
            <View style={style.cardRow}>
                <Text style={style.namaBarang}>{item.namaBarang}</Text>

                <Text style={[
                    style.stokBadge,
                    item.stok < 5 ? style.stokKritis : style.stokAman
                ]}>
                    {item.stok} unit
                </Text>
            </View>

            <Text style={style.subText}>
                {item.kategori} | Rak: {item.lokasiRak}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={style.container}>

            <View style={style.topBar}>

                <TextInput
                style={style.searchInput}
                placeholder='Cari Nama Barang...'
                placeholderTextColor={'#999'}
                value={query}
                onChangeText={setQuery}
                />

                <TouchableOpacity
                style={[
                    style.sortBtn,
                    isSorted && style.sortBtnActive
                ]}
                onPress={() => setIsSorted(!isSorted)}
                >
                    <Text style={style.sortBtnText}>
                        {isSorted ? 'Sort: A-Z' : 'Sort: Off'}
                    </Text>
                </TouchableOpacity>

            </View>

            <Text style={style.countText}>
                Menampilkan {filtered.length} dari {DATA_GUDANG.length} Barang
            </Text>

            <FlatList
            data={filtered}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={
                <Text style={style.emptyText}>
                    Barang Tidak Ditemukan
                </Text>
            }
            />

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f6fa'},

    topBar: { flexDirection: 'row', alignItems: 'center',
        padding: 12, backgroundColor: '#1565c0', gap: 8 },

    searchInput: { backgroundColor: '#fff', borderRadius: 8,
        paddingHorizontal: 12, paddingVertical: 10,
        fontSize: 15, color: '#212121', flex: 1 },

    sortBtn: { backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 8, paddingHorizontal: 12,
        paddingVertical: 10, borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)' },

    sortBtnActive: { backgroundColor: '#ffd54f' },

    sortBtnText: { color: '#fff',
        fontWeight: 'bold', fontSize: 13 },

    countText: { fontSize: 12,
        color: '#90a4ae', marginHorizontal: 12,
        marginTop: 10 },

    card: { backgroundColor: '#fff', marginHorizontal: 12,
        marginTop: 10, borderRadius: 10,
        padding: 14, elevation: 2 },

    cardRow: { flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center' },

    namaBarang: { fontSize: 16,
        fontWeight: 'bold',
        color: '#1a237e', flex: 1 },

    stokBadge: { fontSize: 13,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        overflow: 'hidden' },

    stokKritis: { backgroundColor: '#ffcdd2',
        color: '#c62828' },

    stokAman: { backgroundColor: '#c8e6c9',
        color: '#1b5e20' },

    subText: { fontSize: 12,
        color: '#607d8b',
        marginTop: 4 },

    emptyText: { textAlign: 'center',
        marginTop: 40,
        fontSize: 15,
        color: '#999' },
});
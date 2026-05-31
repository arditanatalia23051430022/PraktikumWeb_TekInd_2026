import React, { useState } from 'react'; 

import { 
View, 
Text, 
FlatList, 
TouchableOpacity, 
StyleSheet 
} from 'react-native'; 

function HomeScreen({ navigation }) { 

const [dataQC, setDataQC] = useState([

{
id: '1',
nama: 'Baut',
lokasi: 'Area Fastener',
status: 'Pending',
gambar: 'produk1',
},

{
id: '2',
nama: 'Kunci Inggris',
lokasi: 'Area Maintenance',
status: 'Pending',
gambar: 'produk2',
},

]);

const updateStatus = (id, statusBaru) => {

const dataBaru = dataQC.map((item) => {

if (item.id === id) {

return {
...item,
status: statusBaru,
};

}

return item;

});

setDataQC(dataBaru);

};

const renderItem = ({ item }) => (

<TouchableOpacity
style={styles.itemContainer}

onPress={() =>
navigation.navigate('Detail', {
itemData: item,
updateStatus: updateStatus,
})
}
>

<Text
style={[
styles.itemTitle,

item.status === 'Gagal'
? styles.gagalText
: styles.normalText

]}
>

{item.nama}

</Text>

<Text style={styles.itemSub}>
{item.lokasi}
</Text>

<Text style={styles.itemSub}>
Status QC: {item.status}
</Text>

</TouchableOpacity>

);

return (

<View style={styles.container}>

<Text style={styles.header}>
Daftar Item Inspeksi QC
</Text>

<FlatList
data={dataQC}
renderItem={renderItem}
keyExtractor={item => item.id}
/>

</View>

);

}

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: '#fff',
paddingTop: 20,
},

header: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 15,
paddingHorizontal: 15,
},

itemContainer: {
backgroundColor: '#f9f9f9',
padding: 15,
marginVertical: 8,
marginHorizontal: 15,
borderRadius: 10,
borderWidth: 1,
borderColor: '#ddd',
},

itemTitle: {
fontSize: 18,
fontWeight: 'bold',
},

itemSub: {
marginTop: 5,
color: '#666',
},

gagalText: {
color: 'red',
},

normalText: {
color: '#333',
},

});

export default HomeScreen;
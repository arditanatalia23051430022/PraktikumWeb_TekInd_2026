import React from 'react'; 

import { 
View, 
Text, 
StyleSheet, 
Button,
Image,
} from 'react-native'; 

function DetailScreen({ route, navigation }) { 

const { itemData, updateStatus } = route.params;

const gambarProduk =

itemData.gambar === 'produk1'
? require('../produk1.jpg')
: require('../produk2.jpeg');

return ( 

<View style={styles.container}> 

<View style={styles.card}> 

<Image
source={gambarProduk}
style={styles.image}
/>

<Text style={styles.label}>
Nama Item:
</Text>

<Text style={styles.value}>
{itemData.nama}
</Text>

<Text style={styles.label}>
Standar Kualitas:
</Text>

<Text style={styles.value}>

{itemData.gambar === 'produk1'
? 'Tidak berkarat, ulir lengkap, tidak bengkok'
: 'Tidak retak, rahang presisi, handle kuat'}

</Text>

<Text style={styles.label}>
Status Saat Ini:
</Text>

<Text style={styles.value}>
{itemData.status}
</Text>

</View> 

<View style={{ marginBottom: 10 }}>

<Button
title="Lolos"
onPress={() => {

updateStatus(itemData.id, 'Lolos');

navigation.goBack();

}}
/>

</View>

<View style={{ marginBottom: 10 }}>

<Button
title="Gagal"
color="red"
onPress={() => {

updateStatus(itemData.id, 'Gagal');

navigation.goBack();

}}
/>

</View>

<Button
title="Kembali"
onPress={() => navigation.goBack()}
/>

</View> 

); 
} 

const styles = StyleSheet.create({ 

container: { 
flex: 1, 
justifyContent: 'center', 
padding: 20, 
backgroundColor: '#f0f0f0', 
}, 

card: { 
backgroundColor: 'white', 
padding: 20, 
borderRadius: 10, 
marginBottom: 20, 
elevation: 3, 
}, 

image: {
width: '100%',
height: 220,
resizeMode: 'cover',
borderRadius: 10,
marginBottom: 15,
},

label: { 
fontSize: 14, 
color: '#7f8c8d', 
marginTop: 10, 
}, 

value: { 
fontSize: 18, 
fontWeight: 'bold', 
color: '#2c3e50', 
}, 

}); 

export default DetailScreen;
// =================================
// LATIHAN 2
// Konversi Kode Shift menggunakan Switch
// =================================

console.log("=== Logika Switch ===");

// Input dari pop-up
let kodeShift = Number(prompt("Masukkan Kode Shift (1 = Pagi, 2 = Siang, 3 = Malam):"));

// Logika Switch
switch (kodeShift) {

case 1:
console.log("Kode Shift: 1");
console.log("Nama Shift: Pagi");
break;

case 2:
console.log("Kode Shift: 2");
console.log("Nama Shift: Siang");
break;

case 3:
console.log("Kode Shift: 3");
console.log("Nama Shift: Malam");
break;

default:
console.log("Shift Tidak Valid");

}
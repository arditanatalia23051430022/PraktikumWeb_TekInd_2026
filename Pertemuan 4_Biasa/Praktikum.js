// =================================
// PRAKTIKUM LANGKAH 1
// Variabel dan Tipe Data
// =================================

// Variabel
let namaMesin = "CNC-Mazak-01"; // String
let targetHarian = 500; // Number
let isOperational = true; // Boolean

// Menampilkan data ke console
console.log("Mesin: " + namaMesin);
console.log("Target Harian: " + targetHarian);

// Operator Aritmatika
let produksiPagi = 200;
let produksiSiang = 150;

let totalProduksi = produksiPagi + produksiSiang;

console.log("Total Produksi: " + totalProduksi);

// Menghitung kekurangan target
let kekurangan = targetHarian - totalProduksi;

console.log("Kekurangan Target: " + kekurangan);



// =================================
// PRAKTIKUM LANGKAH 2
// Control Flow (If Else)
// =================================

// Simulasi data sensor mesin
let jamOperasional = 1250;
let batasMaksimal = 1200;

console.log("=== CEK STATUS MAINTENANCE ===");

if (jamOperasional >= batasMaksimal) {

console.log("PERINGATAN: Mesin mencapai batas maksimal!");
console.log("Status: MAINTENANCE WAJIB (Stop Produksi)");

} else if (jamOperasional > 1000) {

console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)");

} else {

console.log("Status: BERJALAN NORMAL");

}



// =================================
// PRAKTIKUM LANGKAH 3
// Perhitungan Availability (OEE)
// =================================

let jamKerjaPlanned = 8; // Jam kerja direncanakan
let jamKerjaAktual = 6.5; // Jam kerja aktual

let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;

// Membulatkan 2 angka di belakang koma
availability = availability.toFixed(2);

console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");

// Penilaian Availability
if (availability >= 90) {

console.log("Kategori: WORLD CLASS");

} else if (availability >= 80) {

console.log("Kategori: BAIK (Tetap monitor)");

} else {

console.log("Kategori: BURUK (Perlu investigasi)");

}



// =================================
// PRAKTIKUM LANGKAH 4
// Interaksi dengan User
// =================================

let namaOperator = prompt("Masukkan Nama Operator:");
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):");

if (shiftKerja === "Malam") {

alert("Halo " + namaOperator + ", Shift malam mendapat tambahan uang makan Rp 20.000.");

} else {

alert("Halo " + namaOperator + ", Selamat bekerja dan tetap semangat!");

}